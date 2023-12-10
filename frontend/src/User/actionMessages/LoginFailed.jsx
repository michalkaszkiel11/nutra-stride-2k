export const LoginFailed = ({ error, ok }) => {
    return (
        <div className="error-message">
            <i class="fa-solid fa-bomb"></i>
            <div>{error}</div>
            <button onClick={ok} className="button">
                ok
            </button>
        </div>
    );
};
