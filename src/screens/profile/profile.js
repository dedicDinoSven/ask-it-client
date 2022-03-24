import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router";
import { getUserById, updateUser, updatePassword } from "../../redux/userSlice";
import {
    FaCheck, FaPencilRuler, FaQuestion, FaTimesCircle, FaUserCog
} from "react-icons/fa";
import QuestionsList from "../../components/questionsList/questionsList";
import UpdatePasswordModal from "./updatePasswordModal/updatePasswordModal";
import UpdateDetails from "./updateDetails/updateDetails";
import Validation from "../../utils/validation";
import { toast } from "react-toastify";

const Profile = () => {
    const [data, setData] = useState({
        firstName: "", lastName: "", email: ""
    });
    const [passwordData, setPasswordData] = useState({
        password: "", password2: ""
    });
    const [toEdit, setToEdit] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [paginationState, setPaginationState] = useState(
        { page: 1, numberOfRows: 10 });
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);
    const { user, isSuccess, hasError, message } = useSelector(
        (state) => state.users);
    const decoded = jwt_decode(userData.token);

    useEffect(() => {
        dispatch(getUserById(id));
    }, [id, dispatch, hasError, isSuccess, message]);

    const handleDetailsUpdate = () => {
        if (!Validation.validateEmail(data.email))
            toast.error("Please enter valid email!");
        else {
            dispatch(updateUser({ id, data }));
            setToEdit(false);
        }
    };

    const handlePasswordUpdate = () => {
        if (!Validation.validatePasswordLength(passwordData.password))
            toast.error("Password must be 5 to 100 characters long!");

        else if (passwordData.password !== passwordData.password2)
            toast.error("Passwords do not match!");

        else {
            dispatch(updatePassword({ id, data: passwordData }));


            setModalVisible(false);
        }
    };

    return (<div className="profile-wrapper">
        <section className="profile-content-left">
            <div className="profile-heading">
                <h1>Profile</h1> <FaUserCog />
            </div>
            <section className="profile-details">
                <div className="icons-wrapper">
                    {decoded.id === parseInt(id) && (toEdit ?
                        <>
                            <FaCheck className="icon submit"
                                     onClick={handleDetailsUpdate} />
                            <FaTimesCircle className="icon cancel"
                                           onClick={() => setToEdit(
                                               false)} />
                        </>
                        : <FaPencilRuler className="icon edit"
                                         onClick={() => setToEdit(true)} />)}
                </div>
                {toEdit ? <UpdateDetails data={data} setData={setData} /> :
                    <>
                        <div className="profile-details-item">
                            <h2>First Name:</h2>
                            <p>{user?.firstName}</p>
                        </div>
                        <div className="profile-details-item">
                            <h2>Last Name:</h2>
                            <p>{user?.lastName}</p>
                        </div>
                        <div className="profile-details-item">
                            <h2>Email:</h2>
                            <p>{user?.email}</p>
                        </div>
                    </>}
                <div className="border" />
                <div className="profile-details-item">
                    <h2># of Questions:</h2>
                    <p>TODO</p>
                </div>
                <div className="profile-details-item">
                    <h2># of Answers:</h2>
                    <p>TODO</p>
                </div>
                {decoded.id === parseInt(id) &&
                <div className="change-password-link"
                     onClick={() => setModalVisible(true)}>
                    Change Password
                </div>}
            </section>
        </section>
        <section className="profile-content-right">
            <div className="profile-heading">
                <h1>My Questions</h1> <FaQuestion />
            </div>
            <QuestionsList paginationState={paginationState}
                           setPaginationState={setPaginationState}
                           loading={loading} />
        </section>
        {modalVisible &&
        <UpdatePasswordModal close={() => setModalVisible(false)}
                             passwordData={passwordData}
                             setPasswordData={setPasswordData}
                             handlePasswordUpdate={handlePasswordUpdate} />}
    </div>);
};

export default Profile;