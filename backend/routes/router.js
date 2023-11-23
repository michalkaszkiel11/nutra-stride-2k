import express from "express";



import {
    createUser,
    loginUser,
    logoutUser,
} from "../controllers/UserController.js";
import {
    validationRules,
    validator,
    authenticateUser,
} from "../middleware/userValidator.js";
 

const router = express.Router();

router.post("/user/create", validationRules, validator, createUser);
router.post("/user/login", loginUser);
router.post("/user/logout", logoutUser);
router.use(authenticateUser);
export default router;
