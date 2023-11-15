import { Schema, model } from "mongoose";

const exercisesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: String,
});

const roleOfExerciseSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    workout: [exercisesSchema],
    video: String,
    image: String,
});

const regularWorkoutSchema = new Schema({
    difficulty: [
        {
            level: { type: String, required: true },
            role: [roleOfExerciseSchema],
        },
    ],
});
const RegularWorkout = model("RegularWorkout", regularWorkoutSchema);
export default RegularWorkout;
