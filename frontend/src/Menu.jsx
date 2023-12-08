import { Link } from "react-router-dom";
import apiInstance from "../src/utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/LoginAuthContext";
export const Menu = () => {
    const inst = apiInstance();
    const navigate = useNavigate();
    const { isLogged, logout } = useAuth();
    const handleLogout = async () => {
        try {
            const response = await inst.post("/user/logout");
            if (response.status === 200) {
                logout();
                navigate("/login");
                console.log("logout success");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
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
                {isLogged && (
                    <li onClick={handleLogout}>
                        <Link>Logout</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
