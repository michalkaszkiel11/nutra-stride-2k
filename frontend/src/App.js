// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./context/LoginAuthContext.js";
import { CookiesContext } from "./context/CookiesContext.js";
import { MainGoal } from "./regularComponents/MainGoal.jsx";
import { Meals } from "./regularComponents/Meals.jsx"; // Import the new Meals component
import { WorkoutLevel } from "./regularComponents/WorkoutLevel.jsx"; // Import the new Workout component
import "../src/regularComponents/regular.scss";
function App() {
    return (
        <div className="App">
            <Router>
                <CookiesContext>
                    <AuthenticationProvider>
                        <Routes>
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
                        </Routes>
                    </AuthenticationProvider>
                </CookiesContext>
            </Router>
        </div>
    );
}

export default App;
