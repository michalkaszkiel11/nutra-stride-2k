import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./diet.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "../../Navigation.js";

const DietPage = () => {
    const { conditionId } = useParams();
    const navigate = useNavigate();
    const [dietInfo, setDietInfo] = useState({});
    const [selectedMealType, setSelectedMealType] = useState(null);
    const [mealPlans, setMealPlans] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        const getSpecialDiets = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:10000/api/ns/special/diet/diets/${conditionId}`
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
            const response = await axios.post(
                `http://localhost:10000/api/ns/special/meals`,
                { mealIds }
            );
            setMealPlans(response.data.data);
        } catch (error) {
            console.error("Error fetching meal details:", error);
            setMealPlans([]);
        }
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal); // Set the selected meal to display its content
    };

    const backToChoose = () => {
        navigate("/"); //back to choose diet or workout
    };

    return (
        <>
            {" "}
           
            <div className={styles.dietPage}>
                <header className={styles.healthCondition}>
                    <h1>{dietInfo.healthCondition}</h1>
                    <p>{dietInfo.description}</p>
                </header>
                <div className={styles.wrapcontent}>
                    <div className={styles.mealTypes}>
                        {mealTypes.map((mealType) => (
                            <button
                                key={mealType}
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

                    <div className={styles.rightContent}>
                        {/* Only display meal options if a meal type is selected */}
                        {selectedMealType && (
                            <div className={styles.mealOptions}>
                                {mealPlans.map((meal, index) => (
                                    <div
                                        key={meal._id || index}
                                        className={styles.mealCard}
                                        onClick={() => handleMealClick(meal)}
                                    >
                                        <h3>{meal.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Display the content of the selected meal */}
                        {selectedMeal && (
                            <div className={styles.selectedMealContent}>
                                <img
                                    src={selectedMeal.image}
                                    alt="Meal"
                                    className={styles.imagefood}
                                />
                                <h3 className={styles.cardTitle}>
                                    {selectedMeal.title}
                                </h3>
                                <p className={styles.cardContent}>
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

                <button className={styles.backToChoose} onClick={backToChoose}>
                    Back
                </button>
            </div>
        </>
    );
};

export default DietPage;
