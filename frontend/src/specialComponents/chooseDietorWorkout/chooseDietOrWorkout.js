import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axiosInstance";
import { useCallback } from "react";
import { Menu } from "../../Menu.jsx";

const ChooseDietOrWorkout = () => {
    let navigate = useNavigate();
    const inst = apiInstance();
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [healthConditions, setHealthConditions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getConditions();
    }, []);

    const getConditions = async () => {
        try {
            const response = await inst.get("/special/health-conditions");
            setHealthConditions(response.data.data);
        } catch (error) {
            console.error("Error fetching health conditions:", error);
        }
    };

    const getConditionsById = useCallback(async (conditionId) => {
        try {
            const response = await inst.get(
                `/special/health-conditions/${conditionId}`
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

    const insetOne = document.querySelector(".dowBtnchoose1");
    const insetTwo = document.querySelector(".dowBtnchoose2");
    const nextSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex + 1) % healthConditions.length
        );
        insetTwo.classList.add("insetBtn");
        setTimeout(() => {
            insetTwo.classList.remove("insetBtn");
        }, 100);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) =>
                (prevIndex - 1 + healthConditions.length) %
                healthConditions.length
        );

        insetOne.classList.add("insetBtn");
        setTimeout(() => {
            insetOne.classList.remove("insetBtn");
        }, 100);
    };

    useEffect(() => {
        if (healthConditions.length > 0) {
            handleSelectCondition(activeIndex);
        }
    }, [activeIndex, healthConditions.length, handleSelectCondition]);

    return (
        <div className="dowMain">
            <Menu />

            <div className="dowRest">
                {/* Search */}
                <section className="dowWelcome">
                    <h1 className="dowTitle">
                        Personalize Your Wellness Experience
                    </h1>
                    <p className="dowText">
                        Start your adventure today – every step is a step
                        towards a better you!
                    </p>
                </section>
                {/* Custom Carousel */}
                <section className="dowCarouselContainer">
                    <div className="dowCarouselSlides">
                        {healthConditions.map((condition, index) => (
                            <div
                                key={condition._id}
                                className="dowSlide"
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
                                    className="dowCondImage"
                                />
                                <h2 className="dowCondTitle">
                                    {condition.title}
                                </h2>
                            </div>
                        ))}
                    </div>
                    <div className="dowBtnContainer">
                        <button onClick={prevSlide} className="dowBtnchoose1">
                            <i class="fa-solid fa-left-long"></i>
                        </button>
                        <button onClick={nextSlide} className="dowBtnchoose2">
                            <i class="fa-solid fa-right-long"></i>
                        </button>
                    </div>
                </section>
                {/* Conditional rendering for Diet and Workout buttons */}
                {selectedCondition && (
                    <div className="dowButtons">
                        <button onClick={goToDiet} className="button">
                            Diet Plan
                        </button>
                        <button onClick={goToWorkout} className="button">
                            Workout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChooseDietOrWorkout;
