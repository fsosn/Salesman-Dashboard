import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faEarth,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.js";
import {LanguageContext} from "../context/LanguageContext.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Header = ({title}) => {
    const {isDarkTheme, toggleTheme} = useContext(ThemeContext);
    const {changeLanguage} = useContext(LanguageContext)
    const icon = isDarkTheme ? faSun : faMoon;

    return (
        <div className="header bg-body">
            <h1 className="title-font title-dashboard">{title}</h1>
            <div className="header-icons">
                <FontAwesomeIcon icon={icon} className="icon" onClick={toggleTheme}/>
                <FontAwesomeIcon icon={faEarth} className="icon" onClick={changeLanguage}/>
                <ProfileInfo />
                <div className="user-info">

                </div>
            </div>
        </div>
    );
};

export default Header;
