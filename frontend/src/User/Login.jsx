import { Menu } from "../Menu";
import { Link } from "react-router-dom";
import loginPicture from "../regularComponents/images/user/loginPicture.jpg";
import { useState, useEffect } from "react";
export const Login = () => {
    const logPic = loginPicture;
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="login">
            <Menu />
            <div className="login-container">
                <div className="bg-login"></div>
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="login-inputs">
                        <input
                            type="email"
                            placeholder="E-mail"
                            minLength="3"
                            maxLength="36"
                            name="email"
                        />
                        <div className="password-box">
                            <input
                                placeholder="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                            />
                            {!showPassword ? (
                                <i
                                    class="fa-solid fa-lock"
                                    onClick={() => handleShowPassword()}
                                ></i>
                            ) : (
                                <i
                                    class="fa-solid fa-lock-open"
                                    onClick={() => handleShowPassword()}
                                ></i>
                            )}
                        </div>
                    </div>
                    <div className="login-buttons">
                        <p>No account?</p>
                        <Link to="/register">Join us!</Link>
                        <button className="button">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
