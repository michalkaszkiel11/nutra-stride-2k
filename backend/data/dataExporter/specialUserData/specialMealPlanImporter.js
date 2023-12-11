import mongoose from 'mongoose';
import MealPlan from '../../../models/specialUser/mealPlanModel.js'
import healthConditionsData from '../../healthConditionsData.js';
import dotenv from "dotenv";

dotenv.config();
console.log(`Connecting to MongoDB with URI: mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`);
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

//------------------------------------------------

const insertMealPlans = async () => {
  try {
    //console.log(`Starting data insertion. Total conditions: ${healthConditionsData.length}`);
    for (const condition of healthConditionsData) {
      for (const diet of condition.conditionChoose.diet) {
        for (const mealType in diet.meals) {
          for (const meal of diet.meals[mealType]) {
            //console.log(`Inserting meal: ${meal.title}`);
            const newMealPlan = new MealPlan(meal);
            await newMealPlan.save();
            
          }
        }
      }
    }
  } catch (error) {
    console.error('Error inserting meal plans:', error);
  } finally {
    mongoose.disconnect();
  }
};

insertMealPlans();
  //insertMealPlans().then(() => console.log('Meal plan insertion complete.'));
