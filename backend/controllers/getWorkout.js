import SpecialWorkout from "../models/specialUser/specialWorkoutModel.js";
import SpecialConditions from "../models/specialUser/ConditionModel.js";
import { StatusCodes } from "http-status-codes";

export const getWorkouts = async (req, res) => {
    const { OK, INTERNAL_SERVER_ERROR } = StatusCodes;

    try {
        // Fetch all conditions and workouts
        const conditions = await SpecialConditions.find();
        const workouts = await SpecialWorkout.find();

        // Pair each condition with a workout based on their index
        const conditionWorkoutPairs = conditions.map((condition, index) => ({
            condition,
            workout: workouts[index] // both arrays are of the same length
        }));

        return res.status(OK).json({ message: "Data retrieved successfully", data: conditionWorkoutPairs });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(INTERNAL_SERVER_ERROR).json({ message: "Error while retrieving data.", error: error.message });
    }
};
