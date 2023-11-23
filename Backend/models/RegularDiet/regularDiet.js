import { Schema, model } from "mongoose";

const regularDietSchema = new Schema({
    goalOptions: [
        {
            title: { type: String, required: true, unique: true },
            planName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "RegularDietPlan",
            },
        },
    ],
});

const RegularDiet = model("RegularDiet", regularDietSchema);
export default RegularDiet;
