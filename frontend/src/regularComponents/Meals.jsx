import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import green from "./images/green2.jpg";
import { Menu } from "../Menu";
import { useNavigate } from "react-router-dom";

export const Meals = () => {
    const greenImg = green;
    const navigate = useNavigate();
    const [mealPlans, setMealPlans] = useState([]);
    const { planId } = useParams();

    useEffect(() => {
        const fetchMealPlans = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:10000/api/ns/regular/diet-plans/meals/${planId}`
                );
                const plans = response.data.data.map((plan) => ({
                    ...plan,
                    isExpanded: false, // set value for scroll
                }));
                setMealPlans(plans);
            } catch (error) {
                console.log("Unable to fetch meal plans");
            }
        };

        fetchMealPlans();
    }, [planId]);

    const toggleReadMore = (index) => {
        const updatedMealPlans = [...mealPlans];
        updatedMealPlans[index].isExpanded =
            !updatedMealPlans[index].isExpanded;
        setMealPlans(updatedMealPlans);
    };
    const readMore = (index) => {
        const chevronDown =
            document.querySelectorAll(".fa-chevron-down")[index];
        const chevronUp = document.querySelectorAll(".fa-chevron-up")[index];
        const element = document.querySelectorAll(".wrapper")[index];
        if (element) {
            element.style.overflow = "scroll";
        }
        if (chevronUp) {
            chevronUp.style.display = "block";
        }
        if (chevronDown) {
            chevronDown.style.display = "none";
        }
        toggleReadMore(index);
    };

    const hideArrowUp = (index) => {
        const chevronDown =
            document.querySelectorAll(".fa-chevron-down")[index];
        const chevronUp = document.querySelectorAll(".fa-chevron-up")[index];
        const element = document.querySelectorAll(".wrapper")[index];
        if (element) {
            element.style.overflow = "hidden";
        }
        if (chevronUp) {
            chevronUp.style.display = "none";
        }
        if (chevronDown) {
            chevronDown.style.display = "block";
        }
        toggleReadMore(index);
    };
    const navigateToWorkout = () => {
        navigate("/regular/workout-level");
    };
    return (
        <>
            <Menu />
            <div className="meal-box">
                <h2>Diet for Selected Plan:</h2>
                <div className="meal-selection">
                    {mealPlans.map((mealPlan, index) => (
                        <div className="meal" key={mealPlan._id}>
                            <img src={greenImg} alt="vege" />
                            <h4>{mealPlan.title}</h4>
                            <div className="wrapper">
                                <p>{mealPlan.description}</p>
                                <h5>Example:</h5>
                                <p className="example">
                                    {mealPlan.mealExample}
                                </p>
                            </div>
                            <i
                                className="fa-solid fa-chevron-up"
                                onClick={() =>
                                    mealPlan.isExpanded && hideArrowUp(index)
                                }
                            ></i>
                            <i
                                className="fa-solid fa-chevron-down"
                                onClick={() =>
                                    !mealPlan.isExpanded && readMore(index)
                                }
                            ></i>
                            <button
                                className="button"
                                onClick={navigateToWorkout}
                            >
                                Go to workout
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
