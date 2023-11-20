import mongoose from "mongoose";

const { Schema, model } = mongoose;
const regularDietSchema = new Schema({
    goal: [
        {
            title: { type: String, required: true, unique: false },
            plan: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "RegularDietPlan",
                },
            ],
        },
    ],
});

const RegularDiet = model("RegularDiet", regularDietSchema);
export default RegularDiet;
