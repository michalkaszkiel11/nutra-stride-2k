import { Link } from "react-router-dom";
export const RegCompleted = () => {
    return (
        <div className="success-message">
            <div class="grid">
                <div class="grid-item1"></div>
                <div class="grid-item2"></div>
                <div class="grid-item3"></div>
                <div class="grid-item4"></div>
                <div class="grid-item5"></div>
                <div class="grid-item6"></div>
                <div class="grid-item7"></div>
            </div>

            <div className="successful-rg">
                <i class="fa-solid fa-check"></i>
                <div>Registration completed successfully.</div>
                <p>
                    Now you can <Link to="/login">Login</Link>...{" "}
                </p>
            </div>
        </div>
    );
};
