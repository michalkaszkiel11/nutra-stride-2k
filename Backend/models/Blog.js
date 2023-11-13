import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: String,
});
const BlogCategoriesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    posts: [PostSchema],
});

const BlogCategoriesModel = model("BlogCategories", BlogCategoriesSchema);

export default BlogCategoriesModel;
