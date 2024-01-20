import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faEarth,
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const Header = () => {
    return (
        <div className="header bg-body">
            <h1 className="title-font title-dashboard">Dashbord</h1>
            <div className="header-icons">
                <FontAwesomeIcon icon={faMoon} className="icon" />
                <FontAwesomeIcon icon={faEarth} className="icon" />
                <div className="user-info">
                    <FontAwesomeIcon icon={faCircleUser} className="icon user-icon" />
                    <span className="account-name">Tom Cruise</span>
                </div>
            </div>
        </div>
    );

    // <div className="header">
    //   <h1 className="title-font title-dashboard">Dashboard</h1>
    //   <div className="header-icons">
    //     <FontAwesomeIcon icon={faMoon} className="icon" />
    //     <FontAwesomeIcon icon={faEarth} className="icon" />
    //     <div className="user-info">
    //       <FontAwesomeIcon icon={faCircleUser} className="icon user-icon" />
    //       <span className="account-name">Tom Cruise</span>
    //     </div>
    //   </div>
    // </div>
    // );
};

export default Header;
