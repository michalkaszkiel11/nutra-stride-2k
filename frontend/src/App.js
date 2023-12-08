// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./context/LoginAuthContext.js";
import { CookiesContext } from "./context/CookiesContext.js";
import { MainGoal } from "./regularComponents/MainGoal.jsx";
import { Meals } from "./regularComponents/Meals.jsx"; // Import the new Meals component
import { WorkoutLevel } from "./regularComponents/WorkoutLevel.jsx"; // Import the new Workout component
import "../src/regularComponents/regular.scss";
import { WorkoutRoles } from "./regularComponents/WorkoutRoles.jsx";
import { Exercises } from "./regularComponents/Exercises.jsx";
import { Blog } from "./blog/Blog.jsx";
import { Posts } from "./blog/Posts.jsx";
import { Login } from "./User/Login.jsx";
import { Register } from "./User/Register.jsx";
import { Home } from "./Home.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <CookiesContext>
                    <AuthenticationProvider>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/regular/goal"
                                element={<MainGoal />}
                            />
                            <Route
                                path="/regular/meal-plans/:planId"
                                element={<Meals />}
                            />
                            <Route
                                path="/regular/workout-level"
                                element={<WorkoutLevel />}
                            />
                            <Route
                                path="/regular/workout-level/:lvlId"
                                element={<WorkoutRoles />}
                            />
                            <Route
                                path="/regular/workout-level/exercises/:roleId"
                                element={<Exercises />}
                            />
                            <Route path="/blog" element={<Blog />} />
                            <Route
                                path="/blog/posts/:cardId"
                                element={<Posts />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </AuthenticationProvider>
                </CookiesContext>
            </Router>
        </div>
    );
}

export default App;
