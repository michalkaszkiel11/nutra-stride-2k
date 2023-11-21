import { Schema, model } from "mongoose";

const specialWorkoutSchema = new Schema({
    workoutTitle: { type: String, required: true, unique: false },
    workoutDesc: { type: String, required: true },
    workoutVideo: String,
    workoutImage: String,
});
const WorkoutSmallest = model("WorkoutSmallest", specialWorkoutSchema);
export default WorkoutSmallest;
