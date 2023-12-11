import SpecialDiet from "../models/specialUser/specialDietModel.js";
import MealPlan from "../models/specialUser/mealPlanModel.js";
import { StatusCodes } from "http-status-codes";

export const getMealPlan = async (req, res) => {
  const { conditionId } = req.params;

  try {
    const specialDiet = await SpecialDiet.findById(conditionId)
      .populate("meals.breakfast")
      .populate("meals.lunch")
      .populate("meals.dinner");

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
  const mealIds = req.body.mealIds;

  try {
    const meals = await MealPlan.find({ _id: { $in: mealIds } });
    if (!meals || meals.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Meal Plans not found.",
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "Meal Plans retrieved successfully",
      data: meals,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error while retrieving data.",
      error: error.message,
    });
  }
};
