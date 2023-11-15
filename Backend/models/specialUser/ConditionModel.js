import { Schema, model } from "mongoose";

const conditionSchema = new Schema({
    title: String,
    image: String,
    conditionChoose: {
        diet: [{
            type: Schema.Types.ObjectId,
            ref: 'SpecialDiet'
        }],
        workout: [{
            type: Schema.Types.ObjectId,
            ref: 'SpecialWorkout'
        }],
    },
});

const ConditionModel = model("Condition", conditionSchema);
export default ConditionModel;
