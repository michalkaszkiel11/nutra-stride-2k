import express from "express";
import {
    saveExerciseData,
    saveExerciseRoleData,
    saveRegularWorkoutData,
} from "../data/dataExporter/RegularWorkout/RegularWorkoutExporter.js";
import regularWorkoutData from "../data/regularWorkoutData.js";

const router = express.Router();

router.post("/uploadRegularWorkoutData", async (req, res) => {
    try {
        // Save Exercise data
        const exerciseData = regularWorkoutData.difficulty.flatMap((level) =>
            level.role.flatMap((role) => role.workout)
        );
        await saveExerciseData(exerciseData);

        // Save ExerciseRole data
        const exerciseRoleData = regularWorkoutData.difficulty.flatMap(
            (level) =>
                level.role.map((role) => ({
                    title: role.title,
                    description: role.description,
                    workout: role.workout.map((exercise) => exercise.title),
                    video: role.video,
                    image: role.image,
                }))
        );
        await saveExerciseRoleData(exerciseRoleData);

        // Save RegularWorkout data
        await saveRegularWorkoutData(regularWorkoutData);

        res.status(201).json({
            message: "Regular workout data uploaded successfully!",
        });
    } catch (error) {
        console.error("Error uploading regular workout data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
