import styles from "./Navigation.scss";


export const Navigation = () => {
    return(
        <nav className={styles.nav}>
        <div className={styles.logo}>
          {/* <img src={logoImage} alt="logo" className={styles.logo} /> */}
        </div>
        <div className={styles.links}>
          <li>
            <a href="#home" target="_blank" rel="noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="#blog" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a href="#about" target="_blank" rel="noreferrer">
              About
            </a>
          </li>
          <li>
            <a href="#login" target="_blank" rel="noreferrer">
              Login
            </a>
          </li>
          <li>
            <a href="#contact" target="_blank" rel="noreferrer">
              Contact
            </a>
          </li>
        </div>
      </nav>
    )
};