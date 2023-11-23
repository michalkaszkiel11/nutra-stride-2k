import { useState, useEffect } from "react";
import "../regularComponents/regular.scss";
import axios from "axios";
export const MainGoal = () => {
    useEffect(() => {
        getGoal();
        getDietPlans();
    }, []);
    const [goals, setGoal] = useState([]);
    const [plans, setPlans] = useState([]);

    const getGoal = async () => {
        try {
            const response = await axios.get(
                "http://localhost:10000/api/ns/regular/goal"
            );
            const goal = response.data.data;
            setGoal(goal);
        } catch (error) {
            console.log("Unable to send data to the server");
        }
    };
    const getDietPlans = async (goalId) => {
        try {
            const response = await axios.get(
                `http://localhost:10000/api/ns/regular/diet-plans/${goalId}`
            );
            const plan = response.data.data;
            setPlans(plan);
        } catch (error) {
            console.log("Unable to send plans to the server");
        }
    };
    const handleGoalClick = (goalId) => {
        getDietPlans(goalId);
    };

    return (
        <div className="mainGoal-box">
            <div className="header-box">
                <h1 className="mainGoal-header">Find your Path</h1>
                <h3>Select your aim</h3>
            </div>
            <div className="dietChoose-box">
                {goals.map((goal) => (
                    <button
                        className="button"
                        key={goal._id}
                        onClick={() => handleGoalClick(goal._id)}
                    >
                        {goal.title}
                    </button>
                ))}
            </div>
            <div className="diet-plans">
                {plans.map((plan) => (
                    <div className="plan-card" key={plan._id}>
                        <h4>{plan.title}</h4>
                        <p>{plan.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
