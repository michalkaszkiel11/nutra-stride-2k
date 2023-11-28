import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="">Login</Link>
                </li>
                <li>
                    <Link to="">Register</Link>
                </li>

                <li>
                    <Link to="/regular/workout-level">Workout</Link>
                </li>
                <li>
                    <Link to="/regular/goal">Diets</Link>
                </li>
            </ul>
        </nav>
    );
};
