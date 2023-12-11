import dotenv from "dotenv";
import mongoose from "mongoose";
import RegularDiet from "../../../models/RegularDiet/DietModel.js";
import regularDiet from "../../../data/regularDietData.js";
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

const exportRegularDiet = async (dietData) => {
    try {
        for (const diet of dietData) {
            const newDiet = new RegularDiet({
                title: diet.title,
                description: diet.description,
                mealExample: diet.mealExample,
                image: diet.image,
            });

            await newDiet.save();
            console.log(`Saved diet: ${diet.title}`);
        }

        console.log("Diet data upload complete");
    } catch (error) {
        console.error("Error saving diet data:", error);
    } finally {
        mongoose.disconnect();
    }
};
exportRegularDiet(
    regularDiet.goal.flatMap((goal) => goal.plan.flatMap((plan) => plan.diets))
);
