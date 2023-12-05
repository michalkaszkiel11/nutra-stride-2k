import { Menu } from "../Menu";
import { Link } from "react-router-dom";
import loginPicture from "../regularComponents/images/user/loginPicture.jpg";
export const Login = () => {
    const logPic = loginPicture;
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
                        />
                        <input type="password" placeholder="Password" />
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
