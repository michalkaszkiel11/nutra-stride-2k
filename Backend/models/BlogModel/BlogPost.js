import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true, unique: false },
    content: { type: String, required: true },
    image: String,
});

const PostModel = model("Post", PostSchema);
export default PostModel;
