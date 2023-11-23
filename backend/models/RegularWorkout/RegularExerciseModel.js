import mongoose from "mongoose";

const { Schema, model } = mongoose;
const exercisesSchema = new Schema({
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    image: { type: String, required: false },
});
const ExercisesModel = model("Exercises", exercisesSchema);
export default ExercisesModel;
