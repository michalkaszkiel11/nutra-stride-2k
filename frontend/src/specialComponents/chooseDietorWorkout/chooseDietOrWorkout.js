import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./chooseDietOrWorkout.module.scss";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../Navigation.js";
import { useCallback } from "react";
import { Menu } from "../../Menu.jsx";

const ChooseDietOrWorkout = () => {
    let navigate = useNavigate();

    const [selectedCondition, setSelectedCondition] = useState(null);
    const [healthConditions, setHealthConditions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getConditions();
    }, []);

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

    const handleSelectCondition = useCallback(
        (conditionIndex) => {
            const condition = healthConditions[conditionIndex];
            setSelectedCondition(condition);
            if (condition?._id) {
                getConditionsById(condition._id);
            }
        },
        [getConditionsById, healthConditions]
    );

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
            navigate(`/special/workout/${selectedCondition._id}`);
        }
    };

    const nextSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex + 1) % healthConditions.length
        );
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) =>
                (prevIndex - 1 + healthConditions.length) %
                healthConditions.length
        );
    };

    useEffect(() => {
        if (healthConditions.length > 0) {
            handleSelectCondition(activeIndex);
        }
    }, [activeIndex, healthConditions.length, handleSelectCondition]);

    return (
        <div className={styles.main}>
            <Menu />

            <div className={styles.rest}>
                {/* Search */}
                <section className={styles.welcome}>
                    <h1 className={styles.title}>
                        Personalize Your Wellness Adventure
                    </h1>
                    <p className={styles.text}>
                        Start your adventure today – every step is a step
                        towards a better you!
                    </p>
                </section>
                {/* Custom Carousel */}
                <section className={styles.carouselContainer}>
                    <div className={styles.carouselSlides}>
                        {healthConditions.map((condition, index) => (
                            <div
                                key={condition._id}
                                className={styles.slide}
                                style={{
                                    display:
                                        index === activeIndex
                                            ? "block"
                                            : "none",
                                }}
                                onClick={() => handleSelectCondition(index)}
                            >
                                <img
                                    src={condition.image}
                                    alt="Health Condition"
                                    className={styles.condImage}
                                />
                                <h2 className={styles.condTitle}>
                                    {condition.title}
                                </h2>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            onClick={prevSlide}
                            className={styles.btnchoose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={styles.arrow}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className={styles.btnchoose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={styles.arrow}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>
                        </button>
                    </div>
                </section>
                {/* Conditional rendering for Diet and Workout buttons */}
                {selectedCondition && (
                    <div className={styles.buttons}>
                        <button
                            onClick={goToDiet}
                            className={styles.optionButton}
                        >
                            Diet Plan
                        </button>
                        <button
                            onClick={goToWorkout}
                            className={styles.optionButton}
                        >
                            Workout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChooseDietOrWorkout;
