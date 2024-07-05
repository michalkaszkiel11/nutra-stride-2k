export const LogoutMessage = () => {
    const notificationOff = () => {
        document.querySelector(".logout-message").style.display = "none";
    };
    return (
        <div className="logout-message">
            <i class="fa-solid fa-bomb"></i>
            <div></div>
            <button onClick={notificationOff} className="button">
                ok
            </button>
        </div>
    );
};
