import { Schema, model } from "mongoose";

const Userschema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dietCollection: [{ type: String, required: false }],
    workoutCollection: [{ type: String, required: false }],
});

const UserModel = model("User", Userschema);
export default UserModel;
