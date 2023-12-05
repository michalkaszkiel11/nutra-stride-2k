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
import { getGoalBg, getGoals } from "../controllers/getGoals.js";
import { getDietPlans } from "../controllers/getDietPlans.js";
import { getMealsForPlan } from "../controllers/getMealPlans.js";
import {
    getRolelByLevelId,
    getWorkoutLevel,
} from "../controllers/getWorkoutLevel.js";
import { getExercises } from "../controllers/getExercises.js";
import { getBlog, getBlogPosts } from "../controllers/Blog/getBlog.js";
import { getRoles } from "../controllers/getRoles.js";

const router = express.Router();

router.post("/user/register", validationRules, validator, createUser);
router.post("/user/login", loginUser);
router.post("/user/logout", logoutUser);

router.get("/regular/goal", getGoals);
router.get("/regular/diet-plans/:goalId", getDietPlans);
router.get("/regular/goal/bg/:goalId", getGoalBg);
router.get("/regular/diet-plans/meals/:planId", getMealsForPlan);
router.get("/regular/workout-level", getWorkoutLevel);
router.get("/regular/workout-level/:lvlId", getRolelByLevelId);
router.get("/regular/workout-level/exercises/:roleId", getExercises);
router.get("/regular/workout-level/roles/:roleId", getRoles);
router.get("/blog", getBlog);
router.get("/blog/posts/:cardId", getBlogPosts);

router.use(authenticateUser);
export default router;
