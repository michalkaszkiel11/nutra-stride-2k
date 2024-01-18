import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { Menu } from "../Menu";
import { useState, useEffect } from "react";
import cureImg from "./cure.png";
import befitImg from "./heartrate.png";
import heal from "./heal.png";
import heal11 from "./heal11.png";
import apiInstance from "../utils/axiosInstance";

export const Home = () => {
    const [indexed, setIndex] = useState(0);
    const [blog, setBlog] = useState([]);
    const inst = apiInstance();
    const [isMobile, setIsMobile] = useState(false);
    const [rolled, isRolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        handleResize(); // set initial state
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = async () => {
        try {
            const blogData = await inst.get("/blog");
            const blog = blogData.data.data;
            setBlog(blog);
        } catch (e) {
            console.error(e);
        }
    };
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
    const changeImg = `${indexed === 0 ? startImg[0] : startImg[1]}`;
    const pPadd = `${
        indexed === 0 ? "2rem 35% 2rem 2rem" : "2rem 26% 2rem 2rem"
    }`;

    const mother = document.querySelector(".hpOverviewBoxx");
    const chevronDown = () => {
        isRolled(false);
        mother.style.height = "20%";
    };

    const chevronUp = () => {
        isRolled(true);
        mother.style.height = "100%";
    };

    return (
        <div className="home">
            <Menu />
            <div className="home-box">
                <div className="hpOverview">
                    <div className="home-start">
                        <Fade
                            key={indexed}
                            duration={1000}
                            direction="left"
                            className="animation-start"
                            style={{
                                backgroundImage: `url(${changeImg})`,
                            }}
                        >
                            <p style={{ padding: `${pPadd}` }}>
                                {indexed === 0 ? startTxt[0] : startTxt[1]}
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
                            <Zoom delay={200}>
                                <div>
                                    <h2>+100</h2>
                                    <p>diets</p>
                                </div>
                            </Zoom>
                            <Zoom delay={400}>
                                <div>
                                    <h2>+1000</h2>
                                    <p>exercises</p>
                                </div>
                            </Zoom>
                            <Zoom delay={600}>
                                <div>
                                    <h2>+30</h2>
                                    <p>specialists</p>
                                </div>
                            </Zoom>
                            <Zoom delay={800}>
                                <div>
                                    <h2>+1</h2>
                                    <p>who wants changes</p>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="hpLogo">
                    <div className="hpLogo-box">
                        <Fade
                            className="hpLogoFade"
                            delay={400}
                            duration={1200}
                            direction="down"
                        >
                            <div className="hpLogoImg"></div>
                        </Fade>
                    </div>
                    <div className="healthyIcon"></div>
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
                    <div className="hpOverview-sub">
                        <h3>Latest News</h3>
                        <p>Be up to date with the latest nutrition news</p>
                        <div className="hpOverviewBoxx">
                            {blog.map((category, index) => (
                                <Zoom className="over-zoom" key={index}>
                                    <Link to="/blog" className="linked">
                                        <img
                                            src={category.image}
                                            alt={index}
                                            key={index}
                                        ></img>
                                        <p>{category.title}</p>
                                    </Link>
                                </Zoom>
                            ))}
                        </div>
                        {isMobile && (
                            <>
                                {rolled ? (
                                    <i
                                        style={{ fontSize: "3rem" }}
                                        className="fa-solid fa-chevron-up"
                                        onClick={chevronDown}
                                    ></i>
                                ) : (
                                    <i
                                        style={{ fontSize: "3rem" }}
                                        className="fa-solid fa-chevron-down"
                                        onClick={chevronUp}
                                    ></i>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
