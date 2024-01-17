import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Menu } from "../Menu";
import { useState, useEffect } from "react";
import cureImg from "./cure.png";
import befitImg from "./heartrate.png";
import heal from "./heal.png";
import heal11 from "./heal11.png";
export const Home = () => {
    const [index, setIndex] = useState(0);
    const startTxt = [
        "Do you want to have a real impact on your life?",
        "We help people to find best diets related to their issues and we match it with effective physical therapy.",
    ];
    const startImg = [heal, heal11];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);
    const changeImg = `${index === 0 ? startImg[0] : startImg[1]}`;
    const pPadd = `${
        index === 0 ? "2rem 35% 2rem 2rem" : "2rem 26% 2rem 2rem"
    }`;
    return (
        <div className="home">
            <Menu />
            <div className="home-box">
                <div className="hpOverview">
                    <div className="home-start">
                        <Fade
                            key={index}
                            duration={1000}
                            direction="left"
                            className="animation-start"
                            style={{
                                backgroundImage: `url(${changeImg})`,
                            }}
                        >
                            <p style={{ padding: `${pPadd}` }}>
                                {index === 0 ? startTxt[0] : startTxt[1]}
                            </p>
                        </Fade>
                    </div>
                    <div className="hpOverview-sub">
                        <h3>In numbers</h3>
                        <p>
                            Statistics never lie. Trust our reliability and
                            authenticity
                        </p>
                        <div className="hpOverviewBox">
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
                </div>
                <div className="hpLogo">
                    <div className="hpLogo-box">
                        <Fade
                            className="hpLogoFade"
                            delay={500}
                            duration={2800}
                        >
                            <div className="hpLogoImg"></div>
                        </Fade>
                    </div>

                    <div className="hpChoose">
                        <Link className="hpCure" to="/special">
                            <div className="cureBg">
                                <img src={cureImg} alt="theCure" />
                            </div>
                            <div className="cureTxt">The Cure</div>
                        </Link>
                        <Link className="hpBeFit" to="/regular/goal">
                            <div className="befitBg">
                                <img src={befitImg} alt="beFit" />
                            </div>
                            <div className="befitTxt">Be Fit</div>
                        </Link>
                    </div>
                </div>
                <div className="hpOverviewSec">
                    <Link to="/blog" className="hpOverview-sub">
                        <h3>Latest News</h3>
                        <p>Be up to date with the latest nutrition news</p>
                        <div className="hpOverviewBoxx">
                            <div className="onee"></div>
                            <div className="twoo"></div>
                            <div className="threee"></div>
                            <div className="fourr"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
