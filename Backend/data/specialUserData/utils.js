import ConditionModel from "../../models/specialUser/ConditionModel.js";



export const getIdByTitle = async (title, ConditionModel) => {
    try {
      
      const condition = await ConditionModel.findOne({ title: title }).exec();
      console.log(`Found condition:`, condition);  // Debugging log
  
      return condition ? condition._id : null;
    } catch (error) {
      console.error(`Error retrieving Condition ID for title ${title}:`, error);
      return null;
    }
  };