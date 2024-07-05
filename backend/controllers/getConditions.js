import SpecialConditions from '../models/specialUser/ConditionModel.js'; 
import { StatusCodes } from "http-status-codes";

export const getConditions = async (req, res) => {
    try {
        const data = await SpecialConditions.find();
        return res.status(StatusCodes.OK).json({
            message: "Conditions retrieved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};


export const getConditionsById= async (req, res) => {
    const { conditionId } = req.params;
    try {
        const data = await SpecialConditions.findById(conditionId);
        if (!data) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Condition not found.",
            });
        }
        return res.status(StatusCodes.OK).json({
            message: "Condition Id retrieved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};