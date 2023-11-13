import { Schema, model } from "mongoose";
import specialDiet from "./specialDiet.js";
import specialWorkout from "./specialWorkout.js";

const conditionSchema = new Schema({
    title: String,
    conditionDesc: String,
    image: String,
    conditionChoose: {
        diet: [specialDiet],
        workout: [specialWorkout],
    },
});

const ConditionModel = model("Condition", conditionSchema);
export default ConditionModel;
