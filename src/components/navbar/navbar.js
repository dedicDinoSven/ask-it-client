import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout, reset } from "../../redux/auth/authSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    return (
        <header className="navbar-wrapper">
            <div className="logo">
                <Link to="/">Ask.it</Link>
            </div>
            <ul>
                {user ?
                    <>
                        <li>
                            <Link to="/profile">
                                <FaUser />
                                {(user?.firstName || user?.lastName)
                                    ? (user?.firstName + " " + user?.lastName)
                                    : user?.email}
                            </Link>
                        </li>
                        <li>
                            <button className="navbar-button"
                                    onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </header>
    );
};

export default Navbar;