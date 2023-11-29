import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthenticationProvider }from "./context/LoginAuthContext.js";
import { CookiesContext } from "./context/CookiesContext.js";
import ChooseDietOrWorkout from "./specialComponents/chooseDietorWorkout/chooseDietOrWorkout.js";
import DietPage from "./specialComponents/diet/dietPage";



function App() {
    return (
        <div>
            <Router>
                <CookiesContext>
                    <AuthenticationProvider>
                        <Routes>
                            <Route path="/" element={<ChooseDietOrWorkout />} />
                            <Route path="/special/health-conditions/conditions/:conditionId/diets" element={<DietPage />} />
                        </Routes>
                    </AuthenticationProvider>
                </CookiesContext>
            </Router>
        </div>
    );
}

export default App;
