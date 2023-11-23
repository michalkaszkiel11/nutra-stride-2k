import { Schema, model } from "mongoose";

const specialWorkoutSchema = new Schema({
    workoutTitle: { type: String, required: true},
    workoutDesc: { type: String, required: true },
    workoutVideo: String,
    workoutImage: String,
});
const SpecialWorkout = model("SpecialWorkout", specialWorkoutSchema);
export default SpecialWorkout;
