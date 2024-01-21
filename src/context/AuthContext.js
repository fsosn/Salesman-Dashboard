import {createContext, useState} from "react";
import {fakeAuthProvider} from "../auth/auth.js";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    let signin = (username, password, callback) => {
        return fakeAuthProvider.signIn(username, password, () => {
            setUser(username);
            setPassword(password)
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signOut(() => {
            setUser(null);
            setPassword(null);
            callback();
        });
    };


    return (
        <AuthContext.Provider value={{user, password, signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
};