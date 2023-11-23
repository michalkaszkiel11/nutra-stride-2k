import { Schema, model } from "mongoose";

const BlogCategoriesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
});

const BlogCategoriesModel = model("BlogCategories", BlogCategoriesSchema);

export default BlogCategoriesModel;
