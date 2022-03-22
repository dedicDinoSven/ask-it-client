import React, { useState } from "react";
import {
    FaUserCog,
    FaQuestion,
    FaPencilRuler,
    FaCheck,
    FaTimesCircle
} from "react-icons/fa";
import InputField from "../../components/inputField/inputField";
import Modal from "../../components/modal/modal";
import Button from "../../components/button/button";
import QuestionsList from "../../components/questionsList/questionsList";

const Profile = () => {
    const [data, setData] = useState({
        firstName: "Dino-Sven",
        lastName: "",
        email: "dinosven.dedic@hotmail.com",
        numberOfQuestions: 26,
        numberOfAnswers: 10
    });
    const [passwordData, setPasswordData] = useState({
        password: "",
        password2: ""
    });
    const [toEdit, setToEdit] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [paginationState, setPaginationState] = useState(
        { page: 1, numberOfRows: 10 });
    const [loading, setLoading] = useState(false);
    const onChange = (e) => {
        setData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };
    const onChangePasswordData = (e) => {
        setPasswordData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };

    const handlePasswordChange = () => {

    };
    return (<div className="profile-wrapper">
        <section className="profile-content-left">
            <div className="profile-heading">
                <h1>Profile</h1> <FaUserCog />
            </div>
            <section className="profile-details">
                <div className="icons-wrapper">
                    {toEdit ?
                        <>
                            <FaCheck className="icon submit"
                                     onClick={() => setToEdit(false)} />
                            <FaTimesCircle className="icon cancel"
                                           onClick={() => setToEdit(false)} />
                        </>
                        : <FaPencilRuler className="icon edit"
                                         onClick={() => setToEdit(true)} />}
                </div>
                {toEdit ? <>
                        <InputField label="First Name" type="text" id="firstName"
                                    name="firstName" value={data.firstName}
                                    onChange={onChange}
                                    style={{ marginLeft: "10px" }}
                                    autoFocus={!!data.firstName} />
                        <InputField label="Last Name" type="text" id="lastName"
                                    name="lastName" value={data.lastName}
                                    onChange={onChange}
                                    style={{ marginLeft: "10px" }}

                                    autoFocus={!!data.lastName} />
                        <InputField label="Email" type="email" id="email"
                                    name="email" value={data.email}
                                    onChange={onChange}
                                    autoFocus={!!data.email} />
                    </> :
                    <>
                        <div className="profile-details-item">
                            <h2>First Name:</h2>
                            <p>{data.firstName}</p>
                        </div>
                        <div className="profile-details-item">
                            <h2>Last Name:</h2>
                            <p>{data.lastName}</p>
                        </div>
                        <div className="profile-details-item">
                            <h2>Email:</h2>
                            <p>{data.email}</p>
                        </div>
                    </>}
                <div className="border" />
                <div className="profile-details-item">
                    <h2># of Questions:</h2>
                    <p>{data.numberOfQuestions}</p>
                </div>
                <div className="profile-details-item">
                    <h2># of Answers:</h2>
                    <p>{data.numberOfAnswers}</p>
                </div>
                <div className="change-password-link"
                     onClick={() => setModalVisible(true)}>
                    Change Password
                </div>
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
        <Modal close={() => setModalVisible(false)}>
            <h1>Password Change</h1>
            <InputField label="Password *" type="password" id="password"
                        name="password" value={passwordData.password}
                        onChange={onChangePasswordData} autoFocus />
            <InputField label=" Confirm Password *" type="password"
                        id="password2"
                        name="password2" value={passwordData.password2}
                        onChange={onChangePasswordData} />
            <Button onClick={handlePasswordChange}
                    className="submit" label="Submit"
                    style={{ width: "260px", marginTop: "16px" }}
                    disabled={!passwordData.password ||
                    passwordData.password === "" || !passwordData.password2 ||
                    passwordData.password2 === ""} />
        </Modal>}
    </div>);
};

export default Profile;