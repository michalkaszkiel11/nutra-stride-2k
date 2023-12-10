import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const token = Cookies.get("jwtToken");
        return !!token && isValidToken(token);
    });

    const login = (token) => {
        Cookies.set("jwtToken", token);
        setIsLogged(true);
    };

    const logout = () => {
        Cookies.remove("jwtToken");
        setIsLogged(false);
    };

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        if (token && isValidToken(token)) {
            setIsLogged(true);
        }
    }, []);

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

const isValidToken = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp * 1000 > Date.now();
    } catch (error) {
        return false;
    }
};
