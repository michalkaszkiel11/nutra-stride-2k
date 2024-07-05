import mongoose from "mongoose";

const { Schema, model } = mongoose;

const dietSchema = new Schema({
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    mealExample: { type: String, required: true },
    image: { type: String },
});

const DietModel = model("DietModel", dietSchema);
export default DietModel;
