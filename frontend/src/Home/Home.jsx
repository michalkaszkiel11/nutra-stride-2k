import { Link } from "react-router-dom";
import { Menu } from "../Menu";
import cureImg from "./cure.png";
import befitImg from "./heartrate.png";
export const Home = () => {
    return (
        <div className="home">
            <Menu />
            <div className="home-box">
                <div className="hpOverview">
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
                <div className="hpLogo">
                    <div className="hpLogo-box">
                        <div className="hpLogoImg"></div>
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
                <Link className="hpOverviewSec" to="/blog">
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
    );
};
