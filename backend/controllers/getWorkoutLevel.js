import { StatusCodes } from "http-status-codes";
import RegularWorkout from "../models/RegularWorkout/regularUserWorkoutModel.js";
import RegularExerciseRole from "../models/RegularWorkout/RegularExerciseRole.js";

export const getWorkoutLevel = async (req, res) => {
    try {
        const data = await RegularWorkout.find();
        return res.status(StatusCodes.OK).json({
            message: "Levels retrieved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};

export const getRolelByLevelId = async (req, res) => {
    const { lvlId } = req.params;
    try {
        const level = await RegularWorkout.findById(lvlId);
        if (!level) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Level not found.",
            });
        }
        const rolesIds = level.role;
        const roles = await RegularExerciseRole.find({
            _id: { $in: rolesIds },
        });
        return res.status(StatusCodes.OK).json({
            message: "Roles retrieved successfully",
            data: roles,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};
