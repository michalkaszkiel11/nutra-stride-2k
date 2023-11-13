import { Schema, model } from "mongoose";

const roleOfExerciseSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    video: String,
    image: String,
});
const exercisesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: String,
});

const regularWorkoutSchema = new Schema({
    difficulty: { type: String, required: true },
    role: [roleOfExerciseSchema],
    workout: [exercisesSchema],
});
const RegularWorkout = model("RegularWorkout", regularWorkoutSchema);
export default RegularWorkout;
