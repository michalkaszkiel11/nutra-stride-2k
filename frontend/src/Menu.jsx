import { Link } from "react-router-dom";
import apiInstance from "../src/utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/LoginAuthContext";
import Cookies from "js-cookie";
export const Menu = () => {
    const inst = apiInstance();
    const navigate = useNavigate();
    const { isLogged, logout } = useAuth();
    const handleLogout = async () => {
        try {
            const response = await inst.post("/user/logout");
            if (response.status === 200) {
                logout();
                Cookies.remove("jwtToken");
                navigate("/login");
                console.log("logout success");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <nav>
            <ul
                style={{
                    background:
                        "linear-gradient(82.3deg, var(--darker-color) 60%, var(--darkest-color) 99%)",
                }}
            >
                <li>
                    <Link>
                        <i className="fa-solid fa-circle-user"></i>
                    </Link>
                </li>
                <li>
                    <Link>Storage</Link>
                </li>
                {isLogged && (
                    <li onClick={handleLogout}>
                        <Link>Logout</Link>
                    </li>
                )}
            </ul>
            <ul
                style={{
                    background:
                        "linear-gradient(82.3deg, rgba(231, 239, 197, 1) 10.8%, rgba(163, 196, 188, 0.8) 94.3%)",
                }}
            >
                <li>
                    <Link to="/home">Home</Link>
                </li>
                {!isLogged && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
                <li>
                    <Link to="/special">Cure</Link>
                </li>
                <li>
                    <Link to="/regular/workout-level">Workout</Link>
                </li>
                <li>
                    <Link to="/regular/goal">Diets</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};
