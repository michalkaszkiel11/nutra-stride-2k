import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./context/LoginAuthContext.js";
import { CookiesContext } from "./context/CookiesContext.js";
import ChooseDietOrWorkout from "./specialComponents/chooseDietorWorkout/chooseDietOrWorkout.js";
import DietPage from "./specialComponents/diet/dietPage";
import WorkoutPage from "./specialComponents/workout/workoutPage";
import HomePage from "./homePage.js";

function App() {
  return (
    <div>
      <Router>
        <CookiesContext>
          <AuthenticationProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/special" element={<ChooseDietOrWorkout />} />

              <Route
                path="/special/health-conditions/conditions/:conditionId/diets"
                element={<DietPage />}
              />

              <Route
                path="/special/workout/:conditionId"
                element={<WorkoutPage />}
              />
            </Routes>
          </AuthenticationProvider>
        </CookiesContext>
      </Router>
    </div>
  );
}

export default App;
