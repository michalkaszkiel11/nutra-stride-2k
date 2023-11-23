import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roleOfExerciseSchema = new Schema({
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    workout: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercises",
        },
    ],
    video: { type: String, required: false },
    image: { type: String, required: false },
});

const RegularExerciseRole = model("RegularExerciseRole", roleOfExerciseSchema);
export default RegularExerciseRole;
