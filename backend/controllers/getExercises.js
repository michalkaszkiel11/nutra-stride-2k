import { StatusCodes } from "http-status-codes";
import RegularExerciseRole from "../models/RegularWorkout/RegularExerciseRole.js";
import ExercisesModel from "../models/RegularWorkout/RegularExerciseModel.js";

export const getExercises = async (req, res) => {
    const { roleId } = req.params;
    try {
        const roles = await RegularExerciseRole.findById(roleId);
        if (!roles) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Role not found.",
            });
        }
        const workoutIds = roles.workout;
        const workouts = await ExercisesModel.find({
            _id: { $in: workoutIds },
        });
        return res.status(StatusCodes.OK).json({
            message: "Workouts retrieved successfully",
            data: workouts,
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: err.message,
        });
    }
};
