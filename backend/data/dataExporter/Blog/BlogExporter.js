import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogCategoriesModel from "../../../models/BlogModel/Blog.js";
import PostModel from "../../../models/BlogModel/BlogPost.js";
import getIdByTitle from "../../../middleware/getIDByTitle.js";
import blogData from "../../BlogData.js";
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

async function exportBlog() {
    try {
        for (const category of blogData.categories) {
            const categoryId = await Promise.all(
                category.posts.map(
                    async (post) => await getIdByTitle(post.title, PostModel)
                )
            );
            const newCategory = new BlogCategoriesModel({
                title: category.title,
                image: category.image,
                description: category.description,
                posts: categoryId.filter((id) => id != null),
            });
            await newCategory.save();
            console.log(`Saved blog category: ${category.title}`);
        }
    } catch (error) {
        console.error("Error exporting blog:", error);
    } finally {
        mongoose.disconnect();
    }
}

exportBlog();
