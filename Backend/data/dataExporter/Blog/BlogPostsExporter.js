import mongoose from "mongoose";
import dotenv from "dotenv";
import PostModel from "../../../models/BlogModel/BlogPost.js";
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

async function exportBlogPosts(data) {
    try {
        for (const post of data) {
            const newPost = new PostModel({
                title: post.title,
                content: post.content,
                image: post.image,
            });
            await newPost.save();
            console.log(`Saved blog post: ${post.title}`);
        }
    } catch (error) {
        console.error("Error exporting blog posts:", error);
    } finally {
        mongoose.disconnect();
    }
}
exportBlogPosts(blogData.categories.flatMap((category) => category.posts));
