import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCog,
    faSignOutAlt,
    faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ collapsed, setCollapsed }) => {
    return (
        <div className="sidebar">
            <div className="logo-container" onClick={() => setCollapsed(!collapsed)}>
                <FontAwesomeIcon icon={faBars} className="toggle-icon" />
                <h1 className="company-name">Salesman</h1>
            </div>
            <div
                className="menu-item"
                onClick={() => (window.location.href = "/products")}
            >
                <FontAwesomeIcon icon={faHome} className="menu-item-icon" />
                <span className="menu-link">Dashboard</span>
            </div>

            <div
                className="menu-item"
                onClick={() => (window.location.href = "/settings")}
            >
                <FontAwesomeIcon icon={faCog} className="menu-item-icon" />
                <span className="menu-link">Settings</span>
            </div>
            <div className="spacer-logout"></div>
            <div
                className="menu-item"
                onClick={() => (window.location.href = "/logout")}
            >
                <FontAwesomeIcon icon={faSignOutAlt} className="menu-item-icon" />
                <span className="menu-link">Log out</span>
            </div>
        </div>
    );
};

export default Sidebar;
