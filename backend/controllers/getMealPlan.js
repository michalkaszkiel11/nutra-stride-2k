import MealPlan from "../models/specialUser/mealPlanModel.js";
import SpecialDiet from "../models/specialUser/specialDietModel.js";
import { StatusCodes } from "http-status-codes";

export const getMealPlan = async (req, res) => {
  const { mealId } = req.params;
  try {
    // Fetch meal plans based on the planId
    const meal = await SpecialDiet.findById(mealId);
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
