import mongoose from 'mongoose';
import dotenv from "dotenv";
import ConditionModel from '../../../models/specialUser/ConditionModel.js';
import healthConditionsData from '../../healthConditionsData.js';
import SpecialDiet from '../../../models/specialUser/specialDietModel.js';
import SpecialWorkout from '../../../models/specialUser/specialWorkoutModel.js';



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


const getPlanIdByTitle = async (title, model) => {
    try {
        const queryField = model === SpecialDiet ? 'healthCondition' : 'workoutTitle';
        const plan = await model.findOne({ [queryField]: title }).exec();
        console.log(`Found plan for ${title}:`, plan);
        return plan ? plan._id : null;
    } catch (error) {
        console.error(`Error retrieving plan ID for ${title}:`, error);
        return null;
    }
};


const insertConditions = async () => {
    try {
        for (const condition of healthConditionsData) {
            const dietIds = await Promise.all(condition.conditionChoose.diet.map(async diet => {
                return getPlanIdByTitle(diet.healthCondition, SpecialDiet);
            }));

            const workoutIds = await Promise.all(condition.conditionChoose.workout.map(async workout => {
                return getPlanIdByTitle(workout.workoutTitle, SpecialWorkout);
            }));
            
            // Create a new document
            const conditionDoc = new ConditionModel({
                title: condition.title,
                conditionDesc: condition.conditionDesc,
                image: condition.image,
                conditionChoose: {
                    diet: dietIds.filter(id => id),
                    workout: workoutIds.filter(id => id)
                }
            });
            await conditionDoc.save();
            
            console.log(`Condition processed: ${condition.title}`);
        }
    } catch (error) {
        console.error("Error in insertConditions:", error);
    } finally { 
        await mongoose.disconnect();
    }
};

insertConditions();
