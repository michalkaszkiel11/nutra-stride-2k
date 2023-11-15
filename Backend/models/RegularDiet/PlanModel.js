import { Schema, model } from "mongoose";
const planSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    diets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "DietModel",
    }],
});
const RegularDietPlan = model("RegularDietPlan", planSchema);
export default RegularDietPlan;
