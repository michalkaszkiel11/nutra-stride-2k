import { Menu } from "../Menu";
import { Link } from "react-router-dom";
import apiInstance from "../utils/axiosInstance";
import { useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "../context/LoginAuthContext";
import { useNavigate } from "react-router-dom";
import { LoginFailed } from "./actionMessages/LoginFailed";
import axios from "axios";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(
                "https://nutrastride.onrender.com/api/ns/user/login",
                {
                    email: document.querySelector("input[name=email]").value,
                    password: document.querySelector("input[name=password]")
                        .value,
                }
            );

            if (response.status === 200) {
                const token = response.data.token;
                Cookies.set("jwtToken", token);
                login();
                navigate("/home");
                console.log("success");
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            let errorMessage = "Failed to login. Please try again.";
            if (err.response && err.response.data) {
                if (err.response.data.errors) {
                    const formattedErrors = err.response.data.errors.map(
                        (error) => error.msg
                    );
                    errorMessage = formattedErrors.join("\n");
                    setError(errorMessage);
                } else if (err.response.data.message) {
                    errorMessage = err.response.data.message;
                    setError(errorMessage);
                }
                console.log("error");
            }
        } finally {
            setLoading(false);
        }
    };
    const handleOk = () => {
        setError(null);
    };
    return (
        <div className="login">
            <Menu />
            <div className="login-container">
                <div className="bg">
                    <div className="bg-login"></div>
                </div>
                <form className="login-box" onSubmit={handleLogin}>
                    {loading ? (
                        <div className="loading-spinner"></div>
                    ) : (
                        <>
                            {error && (
                                <LoginFailed error={error} ok={handleOk} />
                            )}
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
                                        type={
                                            showPassword ? "text" : "password"
                                        }
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
                                <button type="submit" className="button">
                                    Login
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};
