import mongoose from "mongoose";
import SpecialDiet from "../../../models/specialUser/specialDietModel.js";
import MealPlan from "../../../models/specialUser/mealPlanModel.js";
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

// Function to get MealPlan ID by title
export const getMealPlanIdByTitle = async (title) => {
    try {
        const mealPlan = await MealPlan.findOne({ title }).exec();
        return mealPlan?._id ?? null;
    } catch (error) {
        console.error(`Error retrieving MealPlan ID for ${title}:`, error);
        return null;
    }
};


const insertSpecialDiets = async () => {
    try {
        for (const condition of healthConditionsData) {

            for (const diet of condition.conditionChoose.diet) {
                const breakfastIds = await Promise.all(diet.meals.breakfast.map(meal => getMealPlanIdByTitle(meal.title)));
                const lunchIds = await Promise.all(diet.meals.lunch.map(meal => getMealPlanIdByTitle(meal.title)));
                const dinnerIds = await Promise.all(diet.meals.dinner.map(meal => getMealPlanIdByTitle(meal.title)));

                const specialDiet = new SpecialDiet({
                    healthCondition: diet.healthCondition,
                    description: diet.description,
                    meals: {
                        breakfast: breakfastIds.filter(id => id),
                        lunch: lunchIds.filter(id => id),
                        dinner: dinnerIds.filter(id => id),
                    },
                });

                await specialDiet.save();
                console.log(`Inserted SpecialDiet for ${condition.title}`);
            }
        }
        console.log('All SpecialDiets inserted');
    } catch (error) {
        console.error('Error inserting SpecialDiets:', error);
    } finally {
        mongoose.disconnect();
    }
};

insertSpecialDiets();
