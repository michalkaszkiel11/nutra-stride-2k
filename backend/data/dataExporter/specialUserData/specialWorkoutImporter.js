import mongoose from 'mongoose';
import SpecialWorkout from '../../../models/specialUser/specialWorkoutModel.js';
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


const insertWorkouts = async () => {
    try {
        for (const condition of healthConditionsData) {
            if (condition.conditionChoose && condition.conditionChoose.workout) {
                for (const workout of condition.conditionChoose.workout) {
                    const newWorkout = new SpecialWorkout(workout);
                    await newWorkout.save();
                    console.log(`Inserted workout: ${workout.workoutTitle}`);
                }
            }
        }
        console.log('All workouts inserted');
    } catch (error) {
        console.error('Error inserting workouts:', error);
    } finally {
        mongoose.disconnect();
    }
};

insertWorkouts();
