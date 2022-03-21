import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";

const App = () => {
    return (<div className="app-wrapper">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </div>);
};

export default App;
