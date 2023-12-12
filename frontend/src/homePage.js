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
        <div className={styles.logo}>
          <video src={logoImage} autoPlay loop muted playsInline alt="NutraStride Logo" />
        </div>

        <div className={styles.cards}>
          <div className={styles.cure} onClick={() => handleCardClick('/special')}
            role="button" 
            tabIndex="0">Cure</div>

          <div className={styles.title}>
            <h1>Discover Health</h1>
            <h2>Discover You</h2>
          </div>

          <div className={styles.fit} onClick={() => handleCardClick('/regular/goal')}
            role="button" 
            tabIndex="0">Be Fit</div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
