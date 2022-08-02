import express from "express";
import { signUpBodyValidation, newEmailValidation } from "../middlewares/userMiddlewares.js";
import { postSignUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signUpBodyValidation, newEmailValidation, postSignUp);
router.post("/signin");

export default router;