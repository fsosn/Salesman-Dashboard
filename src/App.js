import DashboardPage from "./pages/DashboardPage.js"
import "./styles.css";
import {useContext, useEffect} from "react";
import {ThemeContext} from "./context/ThemeContext.js";
import {LanguageContext} from "./context/LanguageContext.js";
import i18n from "./i18n.js"
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm.js";
import {RequireAuth} from "./auth/RequireAuth.js";
import SalesTipsPage from "./pages/SalesTipsPage.js";
import OrdersPaid from "./pages/orders/OrdersPaid.js";
import OrdersUnpaid from "./pages/orders/OrdersUnpaid.js";
import OrdersReturned from "./pages/orders/OrdersReturned.js";
import Settings from "./pages/SettingsPage.js";
import AccountPage from "./pages/AccountPage.js";

const App = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);


    return (
        <Routes>
            <Route index element={<RequireAuth><DashboardPage/></RequireAuth>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/sales-tips' element={<RequireAuth>{SalesTipsPage()}</RequireAuth>}/>
            <Route path='/settings' element={<RequireAuth>{Settings()}</RequireAuth>}/>
            <Route path='/account' element={<RequireAuth>{AccountPage()}</RequireAuth>}/>
            <Route path='/orders/paid' element={<RequireAuth>{OrdersPaid()}</RequireAuth>}/>
            <Route path='/orders/unpaid' element={<RequireAuth>{OrdersUnpaid()}</RequireAuth>}/>
            <Route path='/orders/returned' element={<RequireAuth>{OrdersReturned()}</RequireAuth>}/>
        </Routes>

    );
};

export default App;
