import React from "react";
import styles from "./homePage.module.scss";
import { Menu } from "../src/Menu";
import logoImage from "../src/logo/ns.mp4";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
        console.log(`Navigate to ${path}`);
    };
    return (
        <>
            <Menu />
            <main className={styles.container}>
                <div className={styles.logo1}>
                    <video
                        src={logoImage}
                        autoPlay
                        loop
                        muted
                        playsInline
                        alt="NutraStride Logo"
                    />
                </div>

                <div className={styles.cards}>
                    <div className={styles.overview}>
                        <h3>In numbers</h3>
                        <p>
                            Statistics never lie. Trust our reliability and
                            authenticity
                        </p>
                        <div className={styles.overviewBox}>
                            <div>
                                <h2>+100</h2>
                                <p>diets</p>
                            </div>
                            <div>
                                <h2>+1000</h2>
                                <p>exercises</p>
                            </div>
                            <div>
                                <h2>+30</h2>
                                <p>specialists</p>
                            </div>
                            <div>
                                <h2>+1</h2>
                                <p>who wants changes</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.cure}
                        onClick={() => handleCardClick("/special")}
                        role="button"
                        tabIndex="0"
                        style={{ borderBottomLeftRadius: "5rem" }}
                    >
                        Cure
                    </div>

                    <div className={styles.title}>
                        <h1>Discover Health</h1>
                        <h2>Discover You</h2>
                    </div>

                    <div
                        className={styles.fit}
                        onClick={() => handleCardClick("/regular/goal")}
                        role="button"
                        tabIndex="0"
                        style={{ borderBottomRightRadius: "5rem" }}
                    >
                        Be Fit
                    </div>
                    <div className={styles.overviewSec}>
                        <h3>Latest News</h3>
                        <p>Be up to date with the latest nutrition news</p>
                        <div className={styles.overviewBoxx}>
                            <div className="onee"></div>
                            <div className="twoo"></div>
                            <div className="threee"></div>
                            <div className="fourr"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
