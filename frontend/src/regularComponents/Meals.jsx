import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Menu } from "../Menu";
export const Meals = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const { planId } = useParams();
    useEffect(() => {
        const fetchMealPlans = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:10000/api/ns/regular/diet-plans/meals/${planId}`
                );
                const plans = response.data.data;
                setMealPlans(plans);
            } catch (error) {
                console.log("Unable to fetch meal plans");
            }
        };

        fetchMealPlans();
    }, [planId]);

    return (
        <>
            <Menu />
            <div className="meal-box">
                <h2>Diet for Selected Plan:</h2>
                <div className="meal-selection">
                    {mealPlans.map((mealPlan) => (
                        <div className="meal" key={mealPlan._id}>
                            <h4>{mealPlan.title}</h4>
                            <p>{mealPlan.description}</p>
                            <h5>Example:</h5>
                            <p>{mealPlan.mealExample}</p>
                            <button className="button">Go to workout</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
