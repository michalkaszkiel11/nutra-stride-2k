import { Schema, model } from "mongoose";

const regularWorkoutSchema = new Schema({
    difficulty: [
        {
            level: { type: String, required: true },
            role: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "RegularExerciseRole",
            },
        },
    ],
});
const RegularWorkout = model("RegularWorkout", regularWorkoutSchema);
export default RegularWorkout;
