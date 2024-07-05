import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import RegularDiet from "../models/RegularDiet/regularDiet.js";

export const getGoals = async (req, res) => {
    try {
        const data = await RegularDiet.find();
        return res.status(StatusCodes.OK).json({
            message: "Goals retrieved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};
export const getGoalBg = async (req, res) => {
    const { goalId } = req.params;
    try {
        const data = await RegularDiet.findById(goalId);
        if (!data) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Goal not found.",
            });
        }
        return res.status(StatusCodes.OK).json({
            message: "Goal retrieved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while retrieving data.",
            error: error.message,
        });
    }
};
