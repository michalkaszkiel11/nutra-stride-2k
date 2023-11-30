import SpecialDiet from "../models/specialUser/specialDietModel.js";
import MealPlan from "../models/specialUser/mealPlanModel.js";
import { StatusCodes } from "http-status-codes";

export const getMealPlan = async (req, res) => {
  const conditionId = req.params.conditionId;  

  try {
    const specialDiet = await SpecialDiet.findById(conditionId)
                                          .populate('meals.breakfast')
                                          .populate('meals.lunch')
                                          .populate('meals.dinner');

    if (!specialDiet) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Special Diet not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      message: "Special Diet retrieved successfully",
      data: specialDiet,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error while retrieving data.",
      error: error.message,
    });
  }
};
// Fetch meal 
export const getMeals = async (req, res) => {
  const { mealId } = req.params;
  try {
   
    const meal = await MealPlan.findById(mealId);
    if (!meal) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Meal Plan not found.",
      });
    }
    // Return the meal plan if found
    return res.status(StatusCodes.OK).json({
      message: "Meal Plan retrieved successfully",
      data: meal,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error while retrieving data.",
      error: error.message,
    });
  }
};