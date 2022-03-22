import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import Spinner from "../../components/spinner/spinner";

const Register = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, hasError, message } = useSelector(
        (state) => state.auth);

    const onChange = (e) => {
        setData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (data.password !== data.password2)
            toast.error("Passwords do not match!");
        else dispatch(register(data));
    };

    useEffect(() => {
        if (hasError)
            toast.error(message);

        if (isSuccess || user)
            navigate("/");

        dispatch(reset());

    }, [user, isSuccess, hasError, message, navigate, dispatch]);

    return (isLoading ? <Spinner /> :
        <>
            <section className="register-heading">
                <h1><FaUser /> Register</h1>
                <p>Please create an account</p>
            </section>
            <section className="register-form">
                <form onSubmit={onSubmit}>
                    <input type="text" id="firstName" name="firstName"
                           value={data.firstName} onChange={onChange}
                           placeholder="First Name" />
                    <input type="text" id="lastName" name="lastName"
                           value={data.lastName} onChange={onChange}
                           placeholder="Last Name" />
                    <input type="email" id="email" name="email"
                           value={data.email} onChange={onChange}
                           placeholder="Email *" />
                    <input type="password" id="password" name="password"
                           value={data.password} onChange={onChange}
                           placeholder="Password *" />
                    <input type="password" id="password2" name="password2"
                           value={data.password2} onChange={onChange}
                           placeholder="Confirm Password *" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>);
};

export default Register;