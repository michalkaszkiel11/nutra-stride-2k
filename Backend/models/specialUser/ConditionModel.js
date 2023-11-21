import { Schema, model } from "mongoose";

const conditionSchema = new Schema({
    title: String,
    conditionDesc: String,
    image: String,
    choose: {
        diet: [
            {
                type: Schema.Types.ObjectId,
                ref: "DietMiddle",
            },
        ],
        workout: [
            {
                type: Schema.Types.ObjectId,
                ref: "WorkoutSmallest",
            },
        ],
    },
});

const ConditionM = model("ConditionM", conditionSchema);
export default ConditionM;
