import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blog" className={styles.navLink}>
            Blog
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};
