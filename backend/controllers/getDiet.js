import SpecialConditions from "../models/specialUser/ConditionModel.js";
import SpecialDiet from "../models/specialUser/specialDietModel.js";
import { StatusCodes } from "http-status-codes";

export const getSpecialDiets = async (req, res) => {
  const { conditionId } = req.params;
  try {
    //Find the condition by Id
    const condition = await SpecialConditions.findById(conditionId);
    if (!condition) {
        return res.status(StatusCodes.NOT_FOUND).json({
            message: "Condition not found.",
        });
    }
 // Get the diet IDs from the conditionChoose object
 const dietIds = condition.conditionChoose.diet;
 
 // Fetch the diets using the dietIds
 const diets = await SpecialDiet.find({ _id: { $in: dietIds } });

 return res.status(StatusCodes.OK).json({
   message: "Diets retrieved successfully",
   data: diets,
 });
} catch (error) {
 return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   message: "Error while retrieving data.",
   error: error.message,
 });
}
};