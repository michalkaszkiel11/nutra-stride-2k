import { Schema, model } from "mongoose";

const mealPlanSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    healthImpactRange: { type: Number, required: true },
});

const MealPlan = model("MealPlan", mealPlanSchema);

export default MealPlan;
