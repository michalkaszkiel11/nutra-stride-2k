import React, { useState } from "react";
import styles from "./chooseDietOrWorkout.module.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //  const searchSubmit = (e) => {
  //    e.preventDefault();
  //   console.log("searchSubmit");
  //  };

  return (
    <form className={styles.searchForm}>
      <label htmlFor="search-input" className={styles.search}>
        <div className={styles.one}>
          <div className={styles.two}>
            <div className={styles.three}>
              <input
                type="search"
                id="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Type here to search..."
                className={styles.four}
              />
            </div>
            <div className={styles.stick}></div>
          </div>
        </div>
      </label>
    </form>
  );
};

export default SearchBar;
