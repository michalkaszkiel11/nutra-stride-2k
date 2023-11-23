import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const conditionSchema = new Schema({
    title: { type: String, required: true },
    conditionDesc: { type: String, required: true },
    image: String,
    conditionChoose: {
        diet: [{ type: Schema.Types.ObjectId, ref: 'SpecialDiet' }],
        workout: [{ type: Schema.Types.ObjectId, ref: 'SpecialWorkout' }]
    },
});

const ConditionModel = model("SpecialConditions", conditionSchema);
export default ConditionModel;
