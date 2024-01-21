import {createContext, useState} from 'react';

export const LanguageContext = createContext({
    language: "en",
});

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    const changeLanguage = () => {
        let newLanguage = language === "en" ? "pl" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};