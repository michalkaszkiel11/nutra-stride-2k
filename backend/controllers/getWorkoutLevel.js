import { StatusCodes } from "http-status-codes";
import RegularWorkout from "../models/RegularWorkout/regularUserWorkoutModel.js";

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
