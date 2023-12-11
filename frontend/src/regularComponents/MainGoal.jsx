import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from "../Menu";
import apiInstance from "../utils/axiosInstance";

export const MainGoal = () => {
    const [goals, setGoals] = useState([]);
    const [plans, setPlans] = useState([]);
    const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);
    const inst = apiInstance();
    useEffect(() => {
        getGoal();
        getDietPlans();
    }, []);

    const getGoal = async () => {
        try {
            const response = await inst.get("/regular/goal");
            const goal = response.data.data;
            setGoals(goal);
        } catch (error) {
            console.log("Unable to send data to the server");
        }
    };

    const getDietPlans = async (goalId) => {
        try {
            const response = await inst.get(`/regular/diet-plans/${goalId}`);
            const plan = response.data.data;
            setPlans(plan);
        } catch (error) {
            console.log("Unable to send plans to the server");
        }
    };

    const handleGoalClick = (goalId, index) => {
        getDietPlans(goalId);
        setSelectedGoalIndex(index);
    };

    const navigate = useNavigate();
    const handlePlanCardClick = (planId) => {
        navigate(`/regular/meal-plans/${planId}`);
    };

    return (
        <>
            <Menu />
            <div className="mainGoal-box">
                <div className="header-box">
                    <h1 className="mainGoal-header">Find your Path</h1>
                    <h3>Select your aim</h3>
                </div>
                <div className="dietChoose-box">
                    {goals.map((goal, index) => (
                        <div className="dietbox" key={goal._id}>
                            <button
                                className="cta"
                                onClick={() => handleGoalClick(goal._id, index)}
                            >
                                {goal.title}
                            </button>
                            <img
                                src={goal.image}
                                alt={index}
                                className={
                                    selectedGoalIndex === index
                                        ? "showHide"
                                        : ""
                                }
                            />
                        </div>
                    ))}
                </div>

                <div className="diet-plans">
                    {plans.map((plan) => (
                        <div
                            className="plan-card"
                            key={plan._id}
                            onClick={() => handlePlanCardClick(plan._id)}
                        >
                            <h4>{plan.title}</h4>
                            <p>{plan.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
