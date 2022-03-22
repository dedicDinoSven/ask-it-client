import React from "react";
import {
    FaRegQuestionCircle,
    FaSignInAlt,
    FaSignOutAlt,
    FaUser,
    FaUserPlus
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/auth/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <header className="navbar-wrapper">
            <Link to="/" className="logo">
                Ask.it <FaRegQuestionCircle />
            </Link>
            <div className="navbar-links-container">
                {user ?
                    <>
                        <Link to="/profile" className="navbar-link">
                            <FaUser />
                            {(user.firstName || user.lastName)
                                ? (user.firstName + " " + user.lastName)
                                : user?.email}
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