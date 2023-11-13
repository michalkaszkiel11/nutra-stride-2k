import {Schema, model} from "mongoose";

const dietSchema = new Schema({
    title: String,
    description: String,
    mealExample: String
});

const subOptionSchema = new Schema({
    title: String,
    description: String,
    diets: [dietSchema] // Array of diet plans
});

const regularDietSchema = new Schema({
    goalOptions: [{
        title: String,
        description: String,
        subOptions: [subOptionSchema] // Array of sub-options
    }]
});

const RegularDiet = model('RegularDiet', regularDietSchema);
export default RegularDiet;
