import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Routes/router.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json()); // Apply express.json() middleware first
app.use(
    cors({
        origin: "*", // Allow all origins * = wildcard
        methods: ["HEAD", "GET", "POST", "PATCH", "DELETE"],
        credentials: true,
    })
);
app.use("/api/ns", router);

const port = process.env.PORT || 10000;

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
