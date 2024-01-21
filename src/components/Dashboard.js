import {useTranslation} from "react-i18next";
import CustomersOpinions from "./customersOpinions/CustomerOpinions.jsx";
import OrderBoxContainer from "./orders/OrderBoxContainer.js";
import SalesTips from "./salesTips/SalesTips.js"
import SalesQuality from "./salesQuality/SalesQuality.jsx";

const Dashboard = () => {
    const {t} = useTranslation();

    return (
        <div className="container-fluid dashboard">
            <div className="first-row">
                <div className="dashboard-item sales-chart">
                    <h3>{t('sales-chart')}</h3>
                </div>
                <div className="top-right-panel">
                    <div className="dashboard-item">
                        <h3>{t('orders')}</h3>
                        <OrderBoxContainer/>
                    </div>
                    <div className="dashboard-item">
                        <h3>{t('sales-tips')}</h3>
                        <SalesTips/>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="dashboard-item">
                    <h3>{t('offers-ranking')}</h3>
                </div>
                <div className="dashboard-item">
                    <h3>{t('customer-opinions')}</h3>
                    <CustomersOpinions/>
                </div>
                <div className="dashboard-item">
                    <h3>{t('sales-quality')}</h3>
                    <SalesQuality />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
