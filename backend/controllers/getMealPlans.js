import RegularDietPlan from "../models/RegularDiet/PlanModel.js";
import DietModel from "../models/RegularDiet/DietModel.js";
import { StatusCodes } from "http-status-codes";
export const getMealsForPlan = async (req, res) => {
    const { planId } = req.params;
    try {
        // Fetch meal plans based on the planId
        const plan = await RegularDietPlan.findById(planId);
        if (!plan) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Plan not found.",
            });
        }
        const mealId = plan.diets;
        const meals = await DietModel.find({ _id: { $in: mealId } });
        return res.status(StatusCodes.OK).json({
            message: "Meal plans retrieved successfully",
            data: meals,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};
