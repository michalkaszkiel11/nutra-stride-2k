import mongoose from "mongoose";

const { Schema, model } = mongoose;

const regularWorkoutSchema = new Schema({
    level: { type: String, required: true, unique: false },
    role: [
        {
            type: Schema.Types.ObjectId,
            ref: "RegularExerciseRole",
        },
    ],
});
const RegularWorkout = model("RegularWorkout", regularWorkoutSchema);
export default RegularWorkout;
