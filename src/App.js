import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import Register from "./screens/register/register";
import Navbar from "./components/navbar/navbar";
import Profile from "./screens/profile/profile";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            <ToastContainer position="bottom-center" theme="colored"
                            autoClose={3500} closeOnClick draggable
                            pauseOnFocusLoss pauseOnHover />
        </>);
};

export default App;
