import mongoose from "mongoose";

const { Schema, model } = mongoose;
const regularDietSchema = new Schema({
    title: { type: String, required: true, unique: false },
    image: String,
    plan: [
        {
            type: Schema.Types.ObjectId,
            ref: "RegularDietPlan",
        },
    ],
});

const RegularDiet = model("RegularDiet", regularDietSchema);
export default RegularDiet;
