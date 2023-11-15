import { Schema, model } from "mongoose";

const roleOfExerciseSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    workout: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercises",
        },
    ],
    video: String,
    image: String,
});

const RegularExerciseRole = model("RegularExerciseRole", roleOfExerciseSchema);
export default RegularExerciseRole;
