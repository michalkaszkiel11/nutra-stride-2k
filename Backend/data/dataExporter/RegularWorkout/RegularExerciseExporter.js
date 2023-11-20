import dotenv from "dotenv";
import mongoose from "mongoose";
import ExercisesModel from "../../../models/RegularWorkout/regularExerciseModel.js";
dotenv.config();
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Database connected! 😃");
        app.listen(port, () => {
            console.log(`🥦The server is listening on port ${port}🥦`);
        });
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

async function saveExerciseData(exerciseData) {
    try {
        for (const exercise of exerciseData) {
            const newExercise = new ExercisesModel({
                title: exercise.title,
                description: exercise.description,
                image: exercise.image,
            });

            await newExercise.save();
            console.log(`Saved exercise: ${exercise.title}`);
        }

        console.log("Exercise data upload complete");
    } catch (error) {
        console.error("Error saving exercise data:", error);
    } finally {
        mongoose.disconnect;
    }
}
saveExerciseData(
    regularWorkoutData.difficulty.flatMap(
        (level) => level.role.flatMap((role) => role.workout) //role wasnt an array before saving
    )
);
