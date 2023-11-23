import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const validationRules = [
    body("email")
        .trim()
        .normalizeEmail({ gmail_remove_subaddress: true })
        .isEmail()
        .withMessage("Please enter a valid email address"),
    body("password")
        .isStrongPassword()
        .withMessage(
            "Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol."
        ),
    body("username").trim(),
];

/**
 * Middleware that catches our errors
 * @returns
 */
export const validator = (req, res, next) => {
    //extract the validation errors from the request object
    const errors = validationResult(req);
    //if there are errors
    if (!errors.isEmpty()) {
        //response code 400
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }

    next();
};

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the user from the database based on the decoded user information
        const user = await UserModel.findOne({ username: decodedToken.name });

        if (!user) {
            // User not found in the database
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ message: "Auth failed" });
        }
        // Attach the user object to the request for further use in route handlers
        req.user = user;
        next();
    } catch (error) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ message: error.toString() });
    }
};
