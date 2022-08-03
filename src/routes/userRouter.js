import { signUpBodyValidation, newEmailValidation, signInBodyValidation, signInValidation,userExists } from "../middlewares/userMiddlewares.js";
import { postSignUp, postSignIn, getUserInfo, getRanking } from "../controllers/userControllers.js";
import { tokenValidation } from "../middlewares/urlsMiddlewares.js";
import express from "express";

const router = express.Router();

router.post("/signup", signUpBodyValidation, newEmailValidation, postSignUp);
router.post("/signin", signInBodyValidation, signInValidation, postSignIn);
router.get("/users/me", tokenValidation, userExists, getUserInfo);
router.get("/ranking", getRanking);

export default router;