import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="">Home</Link>
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
            </ul>
        </nav>
    );
};
