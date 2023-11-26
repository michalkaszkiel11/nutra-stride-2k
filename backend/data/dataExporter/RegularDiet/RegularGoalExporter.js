import dotenv from "dotenv";
import mongoose from "mongoose";
import RegularDiet from "../../../models/RegularDiet/regularDiet.js";
import regularDiet from "../../../data/regularDietData.js";
import RegularDietPlan from "../../../models/RegularDiet/PlanModel.js";
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

async function regularGoalExporter() {
    try {
        for (const goals of regularDiet.goal) {
            const goalId = await Promise.all(
                goals.plan.map(
                    async (plan) =>
                        await getIdByTitle(plan.title, RegularDietPlan)
                )
            );
            const newGoal = new RegularDiet({
                title: goals.title,
                image: goals.image,
                plan: goalId.filter((id) => id != null),
            });
            await newGoal.save();
            console.log(`Saved goal: ${goals.title}`);
        }
    } catch (error) {
        console.error("Error saving goal data:", error);
    } finally {
        mongoose.disconnect();
    }
}

regularGoalExporter(regularDiet);
