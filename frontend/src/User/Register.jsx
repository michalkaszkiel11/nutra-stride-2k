import { Link } from "react-router-dom";
import { Menu } from "../Menu";
import { useState, useEffect } from "react";
import apiInstance from "../utils/axiosInstance";
export const Register = () => {
    const inst = apiInstance();
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
        setConfirmPassword(!confirmPassword);
    };
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    useEffect(() => {
        const handleRegister = async () => {
            try {
                if (formData.password !== formData.confirmPassword) {
                    console.log("Passwords do not match");
                    setPasswordMismatch(true);
                    return;
                } else {
                    const newUser = await inst.post("/user/register", {
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                    });
                    console.log("User registered successfully:", newUser.data);
                }
            } catch (error) {
                console.log("Unable to send data to the server");
            }
        };
    }, [formData]);

    return (
        <div className="register">
            <Menu />
            <div className="register-container">
                <div className="info">
                    <div className="first1">
                        <div>
                            <h4>Follow your diets</h4>
                            <p>
                                When you forgot your meal plan, you can always
                                save your diets on the list attached to your
                                account and use ready snippets.
                            </p>
                        </div>
                    </div>
                    <div className="bg-1"></div>

                    <div className="second2">
                        <div>
                            <h4>Inspiring exercises</h4>
                            <p>
                                Every workout plan has its limits and is
                                repetable, as soon as you join us, you will get
                                an opportunity to discover new set of physical
                                activity and store it as well as your diets.
                            </p>
                        </div>
                    </div>
                    <div className="bg-2"></div>
                    <div className="third3">
                        <div>
                            <h4>Decode your lifestyle</h4>
                            <p>
                                Keep abreast of innovate diet plans with our{" "}
                                <Link to="/blog"> Blog</Link> and enhance your
                                knowledge about your body. For those who loves
                                technologies, we have latest news available on
                                our Tech & Diets section.
                            </p>
                        </div>
                    </div>
                    <div className="bg-3"></div>
                </div>
                <div className="register-box">
                    <h1>Register</h1>
                    <div className="register-inputs">
                        <input
                            type="text"
                            placeholder="User Name"
                            minLength="2"
                            maxLength="36"
                            value={formData.username}
                            onChange={handleChange}
                            name="username"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            minLength="3"
                            maxLength="36"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                        />
                        <div className="password-box">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                onChange={handleChange}
                                value={formData.password}
                                className="password"
                                name="password"
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
                        <div className="password-box">
                            <input
                                type={confirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                name="confirmPassword"
                            />
                            {!confirmPassword ? (
                                <i
                                    class="fa-solid fa-lock"
                                    onClick={() => handleShowConfirmPassword()}
                                ></i>
                            ) : (
                                <i
                                    class="fa-solid fa-lock-open"
                                    onClick={() => handleShowConfirmPassword()}
                                ></i>
                            )}
                        </div>
                    </div>
                    <div className="register-buttons">
                        <p>Already have an account?</p>
                        <Link to="/login">Login!</Link>
                        <button className="button">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
