import express from "express";
<<<<<<< HEAD:backend/routes/router.js



=======
>>>>>>> c15ea04ae8f5deb9972e34ccdc84702afbf3b73a:Backend/Routes/router.js
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
<<<<<<< HEAD:backend/routes/router.js
 
=======
>>>>>>> c15ea04ae8f5deb9972e34ccdc84702afbf3b73a:Backend/Routes/router.js

const router = express.Router();

router.post("/user/create", validationRules, validator, createUser);
router.post("/user/login", loginUser);
router.post("/user/logout", logoutUser);
router.use(authenticateUser);
export default router;
