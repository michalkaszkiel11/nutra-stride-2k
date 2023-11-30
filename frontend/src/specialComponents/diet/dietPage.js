import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./diet.module.scss";
import { useParams } from "react-router-dom";

const DietPage = () => {
  const { conditionId } = useParams();

  const [dietInfo, setDietInfo] = useState({});
  const [selectedMealType, setSelectedMealType] = useState(null);
 

  useEffect(() => {
    const getSpecialDiets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:10000/api/ns/special/diet/diets/${conditionId}`
        );
        setDietInfo(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching diet info: " + error.message);
      }
    };

    getSpecialDiets();
  }, [conditionId]);

  const mealTypes = dietInfo.meals ? Object.keys(dietInfo.meals) : [];

  const handleMealTypeClick = (mealType) => {
    setSelectedMealType(mealType);
    console.log(mealOptions)
  };

  const mealOptions = selectedMealType && dietInfo.meals 
    ? dietInfo.meals[selectedMealType] 
    : [];

  return (
    <div className={styles.dietPage}>
      <header className={styles.healthCondition}>
        <h1>{dietInfo.healthCondition}</h1>
        <p>{dietInfo.description}</p>
      </header>

      <div className={styles.mealTypes}>
        {mealTypes.map((mealType) => (
          <button
            key={mealType}
            className={selectedMealType === mealType ? styles.activeTab : ""}
            onClick={() => handleMealTypeClick(mealType)}
          >
            {mealType.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.mealOptions}>
        {mealOptions.map((meal, index) => (
          <div key={meal._id || index} className={styles.mealCard}>
            <h3>{meal.title}</h3>
            <p>{meal.content}</p>
            <span>{meal.healthImpactRange}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPage;
