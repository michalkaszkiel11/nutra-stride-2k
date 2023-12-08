import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel/UserModel.js";
import dotenv from "dotenv";
dotenv.config();

export const createUser = async (req, res) => {
    //     // Check if user already exists
    const existingUser = await UserModel.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
        if (existingUser.username === req.body.username) {
            // Duplicate username
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "User name already exists",
            });
        } else if (existingUser.email === req.body.email) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Email already exists",
            });
        }
    }

    // If no existing user, proceed with user creation
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    try {
        const { username, email, dietCollection, workoutCollection } = req.body;

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            dietCollection,
            workoutCollection,
        });

        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            newUser,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Failed to create user",
            error: error.toString(),
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        // check if the username/email address doesn't exist
        const user = await UserModel.findOne({
            $or: [{ username: req.body.username }, { email: req.body.email }],
        });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: " user with this Username/email  does not exist",
            });
        }

        // if exists, compare the password of the user with hash in the database
        const checkPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (checkPassword) {
            const token = jwt.sign(
                { name: user.username },
                "process.env.JWT_SECRET",
                // "secret",
                {
                    expiresIn: "1h",
                }
            );

            // Store the token in both cookies and local storage
            res.status(StatusCodes.OK)
                .cookie("jwtToken", token, { httpOnly: true, secure: true })
                .json({ token });
        } else {
            // passwords are not matching
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ message: "Combination email/password does not exist" });
        }
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "General error", error: error.toString() });
    }
};

export const logoutUser = async (req, res) => {
    try {
        res.status(StatusCodes.OK).json({ message: "Logged out" });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
    }
};
