import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthenticationProvider }from "./context/LoginAuthContext.js";
import { CookiesContext } from "./context/CookiesContext.js";
function App() {
    return (
        <div className="App" style={{width:"100%", heigth:"100%", background: "red"}}>
            <Router>
                <CookiesContext>
                    <AuthenticationProvider>
                        <Routes>
                            <Route path="/" element={<></>} />
                        </Routes>
                    </AuthenticationProvider>
                </CookiesContext>
            </Router>
        </div>
    );
}

export default App;
