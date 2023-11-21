import dotenv from "dotenv";
import mongoose from "mongoose";
import regularWorkout from "../../regularWorkoutData.js";
import RegularExerciseRole from "../../../models/RegularWorkout/regularExerciseRole.js";
import ExercisesModel from "../../../models/RegularWorkout/regularExerciseModel.js";
import getIdByTitle from "../../../middleware/getIdByTitle.js";
import express from "express";
dotenv.config();

const app = express();
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
        // Assuming 'app' is defined elsewhere in your code
        app.listen(process.env.PORT, () => {
            console.log(
                `🥦The server is listening on port ${process.env.PORT}🥦`
            );
        });
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

async function saveExerciseRoleData() {
    try {
        for (const difficulties of regularWorkout.difficulty) {
            for (const roles of difficulties.role) {
                const workoutIds = await Promise.all(
                    roles.workout.map(
                        async (workouts) =>
                            await getIdByTitle(workouts.title, ExercisesModel)
                    )
                );
                const newExerciseRole = new RegularExerciseRole({
                    title: roles.title,
                    description: roles.description,
                    workout: workoutIds.filter((id) => id != null),
                    video: roles.video,
                    image: roles.image,
                });

                await newExerciseRole.save();
                console.log(`Saved exercise role: ${roles.title}`);
            }
        }

        console.log("Exercise role data upload complete");
    } catch (error) {
        console.error("Error saving exercise role data:", error);
    } finally {
        mongoose.disconnect();
    }
}

saveExerciseRoleData(regularWorkout);

// export default saveExerciseRoleData;
// const checkout = async () => {
//     regularWorkout.difficulty.flatMap((role) =>
//         role.workout.flatMap((workouts) =>
//             workouts.title.flatMap((diet) => console.log(diet))
//         )
//     );
// };

// checkout();
