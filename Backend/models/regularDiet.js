import {Schema, model} from "mongoose";

const dietSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    mealExample: { type: String, required: true }
});

const subOptionSchema = new Schema({
    title: { type: String, required: true, unique:true},
    description: { type: String, required: true },
    diets: [dietSchema] // Array of diet plans
});

const regularDietSchema = new Schema({
    goalOptions: [{
        title: { type: String, required: true,unique: true },
        subOptions: [subOptionSchema] // Array of sub-options
    }]
});

const RegularDiet = model('RegularDiet', regularDietSchema);
export default RegularDiet;
