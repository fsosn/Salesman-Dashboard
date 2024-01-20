import React from "react";

const Dashboard = () => {
    return (
        <div className="container-fluid dashboard">
            <div className="first-row">
                <div className="dashboard-item sales-chart">
                    <h3>Sales Chart</h3>
                </div>
                <div className="top-right-panel">
                    <div className="dashboard-item">
                        <h3>Order</h3>
                    </div>
                    <div className="dashboard-item">
                        <h3>Sales Tips</h3>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="dashboard-item">
                    <h3>Offers Ranking</h3>
                </div>
                <div className="dashboard-item">
                    <h3>Customer Opinions</h3>
                </div>
                <div className="dashboard-item">
                    <h3>Sales Quality</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
