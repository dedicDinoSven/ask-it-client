import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";
import InputField from "../../components/inputField/inputField";
import Button from "../../components/button/button";
import Validation from "../../utils/validation";

const Login = () => {
    const [data, setData] = useState({
        email: null,
        password: null,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isSuccess, hasError, message } = useSelector(
        (state) => state.auth);

    const onChange = (e) => {
        setData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };

    const handleSubmit = () => {
        if (!Validation.validateEmail(data.email))
            toast.error("Please enter valid email!");

        else if (!Validation.validatePasswordLength(data.password))
            toast.error("Password must be 5 to 100 characters long!");

        else dispatch(login(data));
    };

    useEffect(() => {
        if (hasError)
            toast.error(message);

        if (isSuccess || user)
            navigate("/");

        dispatch(reset());

    }, [user, isSuccess, hasError, message, navigate, dispatch]);

    return (
        <div className="login-wrapper">
            <section className="login-heading">
                <h1><FaSignInAlt /> Login </h1>
                <p>Login to start asking questions</p>
            </section>
            <section className="login-form">
                <InputField label="Email *" type="email" id="email"
                            name="email" value={data.email}
                            onChange={onChange} autoFocus />
                <InputField label="Password *" type="password" id="password"
                            name="password" value={data.password}
                            onChange={onChange} />
                <Button onClick={handleSubmit}
                        className="submit" label="Submit"
                        style={{ width: "260px", marginTop: "16px" }}
                        disabled={!data.email || data.email === "" ||
                        !data.password || data.password === ""} />
            </section>
        </div>);
};

export default Login;