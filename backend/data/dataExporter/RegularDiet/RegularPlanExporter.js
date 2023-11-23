import dotenv from "dotenv";
import mongoose from "mongoose";
import getIdByTitle from "../../../middleware/getIDByTitle.js";
import RegularDietPlan from "../../../models/RegularDiet/PlanModel.js";
import regularDiet from "../../../data/regularDietData.js";
import DietModel from "../../../models/RegularDiet/DietModel.js";
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
        app.listen(process.env.PORT, () => {
            console.log(
                `🥦 The server is listening on port ${process.env.PORT} 🥦`
            );
        });
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

async function exportRegularPlan() {
    try {
        for (const goal of regularDiet.goal) {
            for (const plans of goal.plan) {
                const dietId = await Promise.all(
                    plans.diets.map(
                        async (meal) =>
                            await getIdByTitle(meal.title, DietModel)
                    )
                );
                if (!dietId) {
                    console.log(`No ID found for diet in plan: ${plans.title}`);
                    continue;
                }

                const newRegularDietPlan = new RegularDietPlan({
                    title: plans.title,
                    description: plans.description,
                    diets: dietId.filter((id) => id != null),
                });

                await newRegularDietPlan.save();
                console.log(`Saved diet for plan: ${plans.title}`);
            }
        }

        console.log("Diet data upload complete");
    } catch (error) {
        console.error("Error saving diet data:", error);
    } finally {
        mongoose.disconnect();
    }
}

exportRegularPlan(regularDiet);
export default exportRegularPlan;
// ... (existing model and export code)

// const checkout = async () => {
//     regularDiet.goal.flatMap((goal) =>
//         goal.plan.flatMap((plans) =>
//             plans.diets.flatMap((diet) => console.log(diet))
//         )
//     );
// };

// checkout();
