import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./diet.module.scss";
import { useParams } from "react-router-dom";

const DietPage = () => {
  const { conditionId } = useParams();
  const [dietInfo, setDietInfo] = useState({});
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [mealsDetail, setMealsDetail] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDietInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:10000/api/ns/special/health-conditions/conditions/${conditionId}/diets`
        );
        setDietInfo(response.data.data);
      } catch (error) {
        setError("Error fetching diet info: " + error.message);
      }
    };

    if (conditionId) {
      fetchDietInfo();
    }
  }, [conditionId]);

  const fetchMealDetails = async (mealIds) => {
    try {
      const meals = await Promise.all(
        mealIds.map((mealId) =>
          axios
            .get(`http://localhost:10000/special/meal-plan/${mealId}`)
            .then((response) => response.data.data)
        )
      );
      return meals;
    } catch (error) {
      setError("Error fetching meal details: " + error.message);
    }
  };

  const mealTypes = dietInfo.meals ? Object.keys(dietInfo.meals) : [];

  const handleMealTypeClick = async (mealType) => {
    setSelectedMealType(mealType);
    if (!mealsDetail[mealType]) {
      const mealIds = dietInfo.meals[mealType];
      const mealData = await fetchMealDetails(mealIds);
      setMealsDetail((prevDetails) => ({
        ...prevDetails,
        [mealType]: mealData,
      }));
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.dietPage}>
      <header className={styles.healthCondition}>
        <h1>helllooooo{dietInfo.healthCondition}</h1>
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

        {selectedMealType &&
          mealsDetail[selectedMealType] &&
          mealsDetail[selectedMealType].map((meal) => (
            <div key={meal._id} className={styles.mealCard}>
              <h3>{meal.title}</h3>
              <p>{meal.content}</p>
              <span>Health Impact Range: {meal.healthImpactRange}%</span>
            </div>
          ))}

      </div>
    </div>
  );
};

export default DietPage;
