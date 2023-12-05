import { Link } from "react-router-dom";
import { Menu } from "../Menu";

export const Register = () => {
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
                            type="email"
                            placeholder="E-mail"
                            minLength="3"
                            maxLength="36"
                        />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
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
