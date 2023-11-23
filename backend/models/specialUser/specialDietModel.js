import { Schema, model } from "mongoose";

const specialDietSchema = new Schema({

    healthCondition: { 
        type: String, 
        required: true 
      },
  description: { type: String},
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
