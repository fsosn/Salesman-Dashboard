import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const Page = ({pageTitle, children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    return (
        <div className="container-fluid">

            <div className={`wrapper ${collapsed && "wrapper-max"}`}>
                <Header title={t(pageTitle)}/>
                {children}
            </div><Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        </div>
    );
};

export default Page;
