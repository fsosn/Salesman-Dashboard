import DashboardPage from "./pages/DashboardPage.js"
import "./styles.css";
import {useContext, useEffect} from "react";
import {ThemeContext} from "./context/ThemeContext.js";
import {LanguageContext} from "./context/LanguageContext.js";
import i18n from "./i18n.js"
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm.js";
import {RequireAuth} from "./auth/RequireAuth.js";
import {AuthContext} from "./context/AuthContext.js";
import SalesQuality from "./components/salesQuality/SalesQuality.jsx";
import SalesTips from "./pages/SalesTips.js";
import OrdersPaid from "./pages/orders/OrdersPaid.js";
import OrdersUnpaid from "./pages/orders/OrdersUnpaid.js";
import OrdersReturned from "./pages/orders/OrdersReturned.js";

const App = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const auth= useContext(AuthContext);

    const handleSignOut = () => {
        auth.signout(() => {
            console.log("User signed out");
        });
    };

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
                <Route index element={<DashboardPage/>}/>
                <Route path='/test' element={<SalesQuality />}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/sales-tips' element={SalesTips()}/>
                <Route path='/orders/paid' element={OrdersPaid()}/>
                <Route path='/orders/unpaid' element={OrdersUnpaid()}/>
                <Route path='/orders/returned' element={OrdersReturned()}/>
                <Route path="/t" element={<RequireAuth><button onClick={handleSignOut}>sign out</button></RequireAuth>}/>
            </Routes>

    );
};

export default App;
