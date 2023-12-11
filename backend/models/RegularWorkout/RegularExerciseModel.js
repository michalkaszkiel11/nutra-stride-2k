import mongoose from "mongoose";

const { Schema, model } = mongoose;
const exercisesSchema = new Schema({
    title: { type: String, required: true, unique: false },
    image: { type: String },
    description: { type: [String], required: true },
    video: [String],
});
const ExercisesModel = model("Exercises", exercisesSchema);
export default ExercisesModel;
