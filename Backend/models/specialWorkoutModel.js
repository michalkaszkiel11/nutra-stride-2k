import { Schema, model } from "mongoose";

const specialWorkoutSchema = new Schema({
    name: { type: String, required: true, unique: true },
    workoutDesc: { type: String, required: true },
    video: String,
    image: String,
});
const SpecialWorkout = model("SpecialWorkout", specialWorkoutSchema);
export default SpecialWorkout;
