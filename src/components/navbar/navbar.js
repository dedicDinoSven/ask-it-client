import React from "react";
import {
    FaRegQuestionCircle,
    FaSignInAlt,
    FaSignOutAlt,
    FaUser,
    FaUserPlus,
    FaPlusCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);

    return (
        <header className="navbar-wrapper">
            <Link to="/" className="logo">
                Ask.it <FaRegQuestionCircle />
            </Link>
            <div className="navbar-links-container">
                {userData ?
                    <>
                        <Link to="/create-question" className="navbar-link">
                            <FaPlusCircle /> Ask Question
                        </Link>
                        <Link to={`/user/${userData.id}`}
                              className="navbar-link">
                            <FaUser /> Profile
                        </Link>
                        <Link to="/" className="navbar-link" onClick={() => {
                            dispatch(logout());
                            dispatch(reset());
                        }}>
                            <FaSignOutAlt /> Logout
                        </Link>
                    </> :
                    <>
                        <Link to="/login" className="navbar-link">
                            <FaSignInAlt /> Login
                        </Link>
                        <Link to="/register" className="navbar-link">
                            <FaUserPlus /> Register
                        </Link>
                    </>
                }
            </div>
        </header>
    );
};

export default Navbar;