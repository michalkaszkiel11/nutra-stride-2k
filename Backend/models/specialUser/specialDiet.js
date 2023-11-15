import { Schema, model } from "mongoose";

const specialDietSchema = new Schema({
  healthCondition: {
    type: Schema.Types.ObjectId,
    ref: 'ConditionModel',
    required: true
  },
  description: { type: String, required: true },
  meals: {
    breakfast: [{
        type: Schema.Types.ObjectId,
        ref: 'MealPlan'
    }],
    lunch: [{
        type: Schema.Types.ObjectId,
        ref: 'MealPlan'
    }],
    dinner: [{
        type: Schema.Types.ObjectId,
        ref: 'MealPlan'
    }],
},
});

const SpecialDiet = model("SpecialDiet", specialDietSchema);

export default SpecialDiet;
