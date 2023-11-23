import mongoose from "mongoose";

const { Schema, model } = mongoose;

const planSchema = new Schema({
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    diets: [
        {
            type: Schema.Types.ObjectId,
            ref: "DietModel",
        },
    ],
});
const RegularDietPlan = model("RegularDietPlan", planSchema);
export default RegularDietPlan;
