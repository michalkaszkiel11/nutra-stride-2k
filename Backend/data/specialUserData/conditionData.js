import mongoose from 'mongoose';
import dotenv from "dotenv";
import ConditionModel from '../../models/specialUser/ConditionModel.js';
import healthConditionsData from './healthConditionsData.js';
import SpecialDiet from '../../models/specialUser/specialDietModel.js';
import SpecialWorkout from '../../models/specialUser/specialWorkoutModel.js';
import { getMealPlanIdByTitle } from './specialDietImporter.js';

dotenv.config();




const getPlanIdByTitle = async (title,model) => {
    try {
        console.log(`Searching for title: ${title}`);
        const plan = await model.findOne({ title }).exec();
        return plan ? plan._id : null;
    } catch (error) {
        console.error(`Error retrieving WorkoutPlan ID for ${title}:`, error);
        return null;
    }
};
const insertConditions = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Database connected! 😃");

        for (const condition of healthConditionsData) {
            const dietIds = await Promise.all(condition.conditionChoose.diet.map(async diet => {
                const mealPlanId = await getPlanIdByTitle(diet.healthCondition,SpecialDiet);
                return mealPlanId;
            }));

            const workoutIds = await Promise.all(condition.conditionChoose.workout.map(async workout => {
                return await getPlanIdByTitle(workout.workoutTitle, SpecialWorkout);
            }));

            let conditionDoc = await ConditionModel.findOne({ title: condition.title });
            if (!conditionDoc) {
                conditionDoc = new ConditionModel({
                    title: condition.title,
                    conditionDesc: condition.conditionDesc,
                    image: condition.image,
                    conditionChoose: { diet: dietIds.filter((id) => id!=null), workout: workoutIds.filter((id) => id!=null) }
                });
            } else {
                conditionDoc.conditionChoose.diet = dietIds.filter((id) => id!=null);
                conditionDoc.conditionChoose.workout = workoutIds.filter((id) => id!=null);
            }
            await conditionDoc.save();
            console.log(`Condition updated: ${condition.title}`);
        }
        console.log('All conditions updated with diets and workouts');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally { 
        mongoose.disconnect();
    }
};



insertConditions();
