import RegularWorkout from "../../../models/RegularWorkout/regularUserWorkoutModel.js";
import regularWorkout from "../../regularWorkoutData.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import RegularExerciseRole from "../../../models/RegularWorkout/RegularExerciseRole.js";
import getIdByTitle from "../../../middleware/getIdByTitle.js";
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

async function saveRegularWorkoutData() {
    try {
        for (const difficultyLevel of regularWorkout.difficulty) {
            const roleId = await Promise.all(
                difficultyLevel.role.map(
                    async (roled) =>
                        await getIdByTitle(roled.title, RegularExerciseRole)
                )
            );

            const newWorkout = new RegularWorkout({
                level: difficultyLevel.level,
                role: roleId.filter((id) => id != null),
            });

            await newWorkout.save();
            console.log(
                `Saved regular workout for difficulty level: ${difficultyLevel.level}`
            );
        }

        console.log("Regular workout data upload complete");
    } catch (error) {
        console.error("Error saving regular workout data:", error);
    }
}
saveRegularWorkoutData(regularWorkout);
