import { Schema, model } from "mongoose";

const BlogCategoriesSchema = new Schema({
    title: { type: String, required: true, unique: false },
    image: String,
    description: { type: String, required: true },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
});

const BlogCategoriesModel = model("BlogCategories", BlogCategoriesSchema);

export default BlogCategoriesModel;
