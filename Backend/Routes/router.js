import express from "express";


const router = express.Router();

router.post("/saveWorkout", async (req, res) => {
    try {
        const { difficulty, role } = req.body;

        const workout = new RegularWorkout({
            difficulty,
            role,
        });

        await workout.save();

        res.status(201).json({ message: "Workout saved successfully!" });
    } catch (error) {
        console.error("Error saving workout:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
