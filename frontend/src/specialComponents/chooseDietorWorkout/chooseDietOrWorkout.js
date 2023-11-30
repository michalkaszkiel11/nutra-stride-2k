import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./chooseDietOrWorkout.module.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar.js";
import { Navigation } from "../../Navigation.js";
import { useCallback } from "react";

const ChooseDietOrWorkout = () => {
  let navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [healthConditions, setHealthConditions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getConditions();
  
  },[]);

  const getConditions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:10000/api/ns/special/health-conditions"
      );
      setHealthConditions(response.data.data);
    } catch (error) {
      console.error("Error fetching health conditions:", error);
    }
  };

  const getConditionsById = useCallback(async (conditionId) => {
    try {
      const response = await axios.get(
        `http://localhost:10000/api/ns/special/health-conditions/${conditionId}`
      );
      setSelectedCondition(response.data.data);
    } catch (error) {
      console.error("Error fetching health condition:", error);
    }
  }, []);

  const handleSelectCondition = useCallback((conditionIndex) => {
    const condition = healthConditions[conditionIndex];
    setSelectedCondition(condition);
    if (condition?._id) {
      getConditionsById(condition._id);
    }
  }, [getConditionsById, healthConditions]);


  const goToDiet = () => {
    if (selectedCondition) {
      navigate(
        `/special/health-conditions/conditions/${encodeURIComponent(
          selectedCondition._id
        )}/diets`
      );
    }
  };

  const goToWorkout = () => {
    if (selectedCondition) {
      navigate(`/workout/${selectedCondition._id}`);
    }
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % healthConditions.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + healthConditions.length) % healthConditions.length
    );
  };

  useEffect(() => {
    if (healthConditions.length > 0) {
      handleSelectCondition(activeIndex);
    }
  }, [activeIndex, healthConditions.length, handleSelectCondition]);

  return (
    <>
      <Navigation />

      {/* Search */}
      <section className={styles.welcome}>
        <h1 className={styles.title}>Personalize Your Wellness Adventure</h1>
        <p className={styles.text}>
          Start your adventure today – every step is a step towards a better
          you!
        </p>

        <SearchBar />
      </section>

      {/* Custom Carousel */}
      <div className={styles.carouselContainer}>
        <button onClick={prevSlide}>Prev</button>
        <div className={styles.carouselSlides}>
          {healthConditions.map((condition, index) => (
            <div
              key={condition._id}
              className={styles.slide}
              style={{ display: index === activeIndex ? "block" : "none" }}
              onClick={() => handleSelectCondition(index)}
            >
              <h2>{condition.title}</h2>
            </div>
          ))}
        </div>
        <button onClick={nextSlide}>Next</button>
      </div>

      {/* Conditional rendering for Diet and Workout buttons */}
      {selectedCondition && (
        <div className={styles.buttons}>
          <button onClick={goToDiet} className={styles.optionButton}>
            Diet Plan
          </button>
          <button onClick={goToWorkout} className={styles.optionButton}>
            Workout
          </button>
        </div>
      )}
    </>
  );
};

export default ChooseDietOrWorkout;
