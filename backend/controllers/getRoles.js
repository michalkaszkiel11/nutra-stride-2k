import { StatusCodes } from "http-status-codes";
import RegularExerciseRole from "../models/RegularWorkout/RegularExerciseRole.js";

export const getRoles = async (req, res) => {
    const { roleId } = req.params;
    try {
        const data = await RegularExerciseRole.findById(roleId);
        if (!data) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Role not found.",
            });
        }
        return res.status(StatusCodes.OK).json({ data: data });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: err.message,
        });
    }
};
