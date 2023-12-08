import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(!!Cookies.get("jwtToken"));

    const login = () => {
        setIsLogged(true);
    };

    const logout = () => {
        Cookies.remove("jwtToken", { httpOnly: true, secure: true });
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogged,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
