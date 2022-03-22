import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
    const [data, setData] = useState({
        email: null,
        password: null,
    });

    const onChange = (e) => {
        setData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <section className="register-heading">
                <h1><FaSignInAlt /> Login </h1>
            </section>
            <section className="register-form">
                <form onSubmit={onSubmit}>
                    <input type="email" id="email" name="email"
                           value={data.email} onChange={onChange}
                           placeholder="Email *" />
                    <input type="password" id="password" name="password"
                           value={data.password} onChange={onChange}
                           placeholder="Password *" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>);
};

export default Login;