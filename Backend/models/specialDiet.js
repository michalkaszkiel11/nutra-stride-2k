import { Schema, model } from "mongoose";

//sub-schema to define the structure of meal plans within the diet schema
const mealPlanSchema = new Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  healthImpactRange: { type: Number, required: true },
});

const specialDietSchema = new Schema({
  healthCondition: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  meals: {
    breakfast: [mealPlanSchema],
    lunch: [mealPlanSchema],
    dinner: [mealPlanSchema],
  },
});

const SpecialDiet = model("SpecialDiet", specialDietSchema);

export default SpecialDiet;
