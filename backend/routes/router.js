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
import { getMealPlan } from "../controllers/getMealPlan.js";
import { getSpecialDiets } from "../controllers/getDiet.js";
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
router.get("/special/meal-plan/:Id", getMealPlan);
router.use(authenticateUser);
router.post("/user/logout", logoutUser);

export default router;
