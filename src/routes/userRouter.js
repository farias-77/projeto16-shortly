import express from "express";
import { signUpBodyValidation, newEmailValidation, signInBodyValidation, signInValidation } from "../middlewares/userMiddlewares.js";
import { postSignUp, postSignIn } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signUpBodyValidation, newEmailValidation, postSignUp);
router.post("/signin", signInBodyValidation, signInValidation, postSignIn);

export default router;