import { Schema, model } from "mongoose";

const specialDietSchema = new Schema({
    healthCondition: { type: String, required: true },
    description: { type: String, required: true },
    meals: [
        {
            breakfast: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "MealSmallest",
                },
            ],
            lunch: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "MealSmallest",
                },
            ],
            dinner: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "MealSmallest",
                },
            ],
        },
    ],
});

const DietMiddle = model("DietMiddle", specialDietSchema);

export default DietMiddle;
