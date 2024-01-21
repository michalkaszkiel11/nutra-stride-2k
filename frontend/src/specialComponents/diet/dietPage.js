import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../utils/axiosInstance";
import { Menu } from "../../Menu";
import breakfast from "./images/breakfast.png";
import lunch from "./images/lunch.png";
import dinner from "./images/dinner.png";
import { Range } from "../../utils/Range";
// import {
//     Bounce,
//     Fade,
//     Flip,
//     Hinge,
//     JackInTheBox,
//     Roll,
//     Rotate,
//     Slide,
//     Zoom,
// } from "react-awesome-reveal";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import menup from "./images/menup.png";
const DietPage = () => {
    const { conditionId } = useParams();

    const [dietInfo, setDietInfo] = useState({});
    const [selectedMealType, setSelectedMealType] = useState(null);
    const [mealPlans, setMealPlans] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [healthImpactRange, setHealthImpactRange] = useState(0);
    const inst = apiInstance();

    useEffect(() => {
        if (selectedMeal) {
            const newHealthImpactRange = selectedMeal.healthImpactRange / 100;
            console.log("New Health Impact Range:", newHealthImpactRange);
            setHealthImpactRange(newHealthImpactRange);
        }
    }, [selectedMeal]);

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
        setSelectedMeal(meal);
    };

    const btnImgarray = [breakfast, lunch, dinner];
    const btnImg = btnImgarray.map((img) => img);
    const stpbox = selectedMealType ? "4/2/8/20" : "4/2/16/20";
    const stpimg = selectedMealType ? "8rem" : "12rem";

    const mealClick = (meal) => {
        const item = document.querySelector(meal);

        if (item) {
            item.classList.add("insetBtn");

            setTimeout(() => {
                item.classList.remove("insetBtn");
            }, 200);
        }
    };
    // const mealOpt = document.querySelector(".meal-options");

    return (
        <div className="diet-page">
            <Menu />
            <div className="diet-main">
                <header>
                    <h1>{dietInfo.healthCondition}</h1>
                    <p>{dietInfo.description}</p>
                </header>

                <div className="meal-types" style={{ gridArea: stpbox }}>
                    <Zoom duration={1800}>
                        {mealTypes.map((mealType, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    handleMealTypeClick(mealType);
                                    mealClick(mealType);
                                }}
                                className="meal"
                            >
                                <img
                                    src={btnImg[index]}
                                    alt="index"
                                    style={{ width: stpimg }}
                                ></img>
                                <p> {mealType.toUpperCase()}</p>
                            </div>
                        ))}
                    </Zoom>
                </div>
                {selectedMealType && (
                    <div className="options-box">
                        {/* {selectedMealType && <h2>Options</h2>} */}

                        <div className="meal-options">
                            <Fade
                                className="options-img"
                                direction="down"
                                duration={2000}
                            >
                                <img src={menup} alt="menu"></img>
                            </Fade>
                            <div className="menu-meal">
                                <Fade duration={2000}>
                                    {mealPlans.map((meal, index) => (
                                        <div
                                            key={meal._id || index}
                                            className="meal-card"
                                            onClick={() => {
                                                handleMealClick(meal);
                                            }}
                                        >
                                            {meal.title}
                                        </div>
                                    ))}
                                </Fade>
                            </div>
                        </div>

                        {selectedMeal && (
                            <Slide className="faded" direction="right">
                                <div className="selected-meal">
                                    <div
                                        className="smMeal"
                                        style={{
                                            backgroundImage: `url(${selectedMeal.image})`,
                                        }}
                                    ></div>
                                    <div className="smTxt">
                                        <h2 className="card-title">
                                            {selectedMeal.title}
                                        </h2>
                                        <p className="card-content">
                                            {selectedMeal.content}
                                        </p>
                                        <div className="health-impact">
                                            <h5>Health Impact Range:</h5>
                                            <Range value={healthImpactRange} />
                                            <span>
                                                {selectedMeal.healthImpactRange}
                                                %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DietPage;
