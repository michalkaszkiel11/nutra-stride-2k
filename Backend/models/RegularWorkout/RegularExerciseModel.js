import { Schema, model } from "mongoose";
const exercisesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: String,
});
const ExercisesModel = model("Exercises", exercisesSchema);
export default ExercisesModel;
