import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="container-fluid">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`wrapper ${collapsed && "wrapper-max"}`}>
                <Header />
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
