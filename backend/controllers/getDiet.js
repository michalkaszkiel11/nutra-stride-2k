import SpecialConditions from "../models/specialUser/ConditionModel.js";
import SpecialDiet from "../models/specialUser/specialDietModel.js";
import { StatusCodes } from "http-status-codes";

export const getSpecialDiets = async (req, res) => {
  const { conditionId } = req.params;
  const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

  try {
    const condition = await SpecialConditions.findById(conditionId);
    if (!condition) {
      return res.status(NOT_FOUND).json({ message: "Condition not found." });
    }

    const dietIds = condition.conditionChoose.diet;
    const diets = await SpecialDiet.findOne({ _id: { $in: dietIds } });

    return res.status(OK).json({ message: "Diets retrieved successfully", data: diets });
  } catch (error) {
    console.error("Error fetching special diets:", error);  // Optional: logging the error
    return res.status(INTERNAL_SERVER_ERROR).json({ message: "Error while retrieving data.", error: error.message });
  }
};
