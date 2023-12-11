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
import { getMealPlan, getMeals } from "../controllers/getMealPlan.js";
import { getSpecialDiets } from "../controllers/getDiet.js";
import { getWorkouts } from "../controllers/getWorkout.js";
import {
  getConditions,
  getConditionsById,
} from "../controllers/getConditions.js";

const router = express.Router();
router.post("/user/create", validationRules, validator, createUser);
router.post("/user/login", loginUser);

router.get("/special/health-conditions", getConditions);
router.get("/special/health-conditions/:conditionId", getConditionsById);
router.get("/special/diet/diets/:conditionId", getSpecialDiets);
router.post("/special/meals", getMeals);
router.get("/special/meal-plan/:conditionId", getMealPlan);
router.get(
  "/special/conditions-with-workouts/:conditionId",
  getWorkouts
);

router.use(authenticateUser);
router.post("/user/logout", logoutUser);

export default router;
