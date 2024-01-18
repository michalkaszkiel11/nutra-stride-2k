import { useState, useEffect } from "react";
import styles from "./diet.scss";
import { useParams, useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axiosInstance";
import { Menu } from "../../Menu";

const DietPage = () => {
    const { conditionId } = useParams();
    const navigate = useNavigate();
    const [dietInfo, setDietInfo] = useState({});
    const [selectedMealType, setSelectedMealType] = useState(null);
    const [mealPlans, setMealPlans] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const inst = apiInstance();
    useEffect(() => {
        const getSpecialDiets = async () => {
            try {
                const response = await inst.get(
                    `/special/diet/diets/${conditionId}`
                );
                setDietInfo(response.data.data);
            } catch (error) {
                console.error("Error fetching diet info: " + error.message);
            }
        };

        getSpecialDiets();
    }, [conditionId]);

    const mealTypes = dietInfo.meals ? Object.keys(dietInfo.meals) : [];

    const handleMealTypeClick = async (mealType) => {
        setSelectedMealType(mealType);
        setSelectedMeal(null); // Clear the previously selected meal

        if (dietInfo.meals && dietInfo.meals[mealType]) {
            await fetchMealDetails(dietInfo.meals[mealType]);
        }
    };

    const fetchMealDetails = async (mealIds) => {
        try {
            const response = await inst.post(`/special/meals`, { mealIds });
            setMealPlans(response.data.data);
        } catch (error) {
            console.error("Error fetching meal details:", error);
            setMealPlans([]);
        }
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal); // Set the selected meal to display its content
    };

    return (
        <div className="diet-page">
            <Menu />
            <div className="diet-main">
                <header>
                    <h1>{dietInfo.healthCondition}</h1>
                    <p>{dietInfo.description}</p>
                </header>
                <div className="meal-types-main">
                    <div className="meal-types-sub">
                        {mealTypes.map((mealType, index) => (
                            <button
                                key={index}
                                className={
                                    selectedMealType === mealType
                                        ? styles.activeTab
                                        : ""
                                }
                                onClick={() => handleMealTypeClick(mealType)}
                            >
                                {mealType.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div className="meal-options-main">
                        {selectedMealType && (
                            <div className="meal-options-sub">
                                {mealPlans.map((meal, index) => (
                                    <div
                                        key={meal._id || index}
                                        className="meal-card"
                                        onClick={() => handleMealClick(meal)}
                                    >
                                        <h3>{meal.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedMeal && (
                            <div className="selected-meal">
                                <div>
                                    <img
                                        src={selectedMeal.image}
                                        alt="Meal"
                                        className="food-img"
                                    />
                                </div>
                                <h3 className="card-title">
                                    {selectedMeal.title}
                                </h3>
                                <p className="card-content">
                                    {selectedMeal.content}
                                </p>
                                <span>
                                    Health Impact Range:{" "}
                                    {selectedMeal.healthImpactRange}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietPage;
