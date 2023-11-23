import React, { createContext, useContext, useState } from "react";

const CookieContext = createContext();
export const CookiesContext = ({ children }) => {
    const [cookie, setCookie] = useState(false);

    const acceptCookie = () => {
        setCookie(true);
    };
    const declineCookie = () => {
        setCookie(false);
    };

    return (
        <CookieContext.Provider
            value={{ cookie, setCookie, acceptCookie, declineCookie }}
        >
            {children}
        </CookieContext.Provider>
    );
};
export const useCookie = () => useContext(CookieContext);
