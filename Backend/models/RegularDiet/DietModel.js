import { Schema, model } from "mongoose";

const dietSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    mealExample: { type: String, required: true },
});

const DietModel = model("DietModel", dietSchema);
export default DietModel;
