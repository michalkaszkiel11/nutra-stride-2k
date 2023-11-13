import {Schema, model} from "mongoose";

//sub-schema to define the structure of meal plans within the diet schema
const mealPlanSchema = new Schema({
    title: String,
    content: String,
    healthImpactRange: Number 
});

const specialDietSchema = new Schema({
  healthCondition: String,
  description: String,
  meals: {
    breakfast: [mealPlanSchema],
    lunch: [mealPlanSchema],
    dinner: [mealPlanSchema],
  },
});

const SpecialDiet = model('SpecialDiet', specialDietSchema);

export default SpecialDiet;