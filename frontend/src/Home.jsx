import { Menu } from "./Menu";

export const Home = () => {
    return (
        <div className="home">
            <Menu />
            <div className="home-box">
                <h1>Home</h1>
                <p>
                    This is the home page. It is the first page you see when you
                    visit this site.
                </p>
            </div>
        </div>
    );
};
