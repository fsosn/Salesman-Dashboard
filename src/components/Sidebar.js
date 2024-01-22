import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCog,
    faSignOutAlt,
    faHome, faUser,
} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from 'react-i18next';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

const Sidebar = ({collapsed, setCollapsed}) => {
    const {t} = useTranslation();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth.signout();
    };

    return (
        <div className="sidebar">
            <div className="logo-container" onClick={() => setCollapsed(!collapsed)}>
                <FontAwesomeIcon icon={faBars} className="toggle-icon"/>
                <h1 className="company-name">Salesman</h1>
            </div>
            <div className="menu-item" onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faHome} className="menu-item-icon"/>
                <span className="menu-link">{t('dashboard')}</span>
            </div>

            <div
                className="menu-item"
                onClick={() => navigate("/settings")}
            >
                <FontAwesomeIcon icon={faCog} className="menu-item-icon"/>
                <span className="menu-link">{t('settings')}</span>
            </div>
            <div
                className="menu-item"
                onClick={() => navigate("/account")}
            >
                <FontAwesomeIcon icon={faUser} className="menu-item-icon"/>
                <span className="menu-link">{t('account')}</span>
            </div>
            <div className="spacer-logout"></div>
            <div
                className="menu-item"
                onClick={handleSignOut}
            >
                <FontAwesomeIcon icon={faSignOutAlt} className="menu-item-icon"/>
                <span className="menu-link">{t('logout')}</span>
            </div>
        </div>
    );
};

export default Sidebar;
