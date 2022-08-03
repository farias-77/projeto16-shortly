import express from "express";
import { urlBodyValidation, tokenValidation, repeatedUrlValidation } from "../middlewares/urlsMiddlewares.js";
import { returnShortUrl } from "../controllers/urlsControllers.js";

const router = express.Router();

router.post("/urls/shorten", urlBodyValidation, tokenValidation, repeatedUrlValidation, returnShortUrl);

export default router;