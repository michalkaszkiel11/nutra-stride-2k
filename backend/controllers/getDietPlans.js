import { StatusCodes } from "http-status-codes";
import RegularDietPlan from "../models/RegularDiet/PlanModel.js";
import RegularDiet from "../models/RegularDiet/regularDiet.js";
export const getDietPlans = async (req, res) => {
    const { goalId } = req.params;
    try {
        // Find the goal by ID
        const goal = await RegularDiet.findById(goalId);

        if (!goal) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Goal not found.",
            });
        }

        // Get the plan IDs from the goal
        const planIds = goal.plan;

        // Fetch the plans using the plan IDs
        const plans = await RegularDietPlan.find({ _id: { $in: planIds } });

        return res.status(StatusCodes.OK).json({
            message: "Plans retrieved successfully",
            data: plans,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};
