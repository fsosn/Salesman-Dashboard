import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from './store';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext.js";
import {LanguageProvider} from "./context/LanguageContext.js";
import {AuthProvider} from "./context/AuthContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider>
                    <LanguageProvider>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </LanguageProvider>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
