import express from "express";
import { urlBodyValidation, tokenValidation } from "../middlewares/urlsMiddlewares.js";
import { returnShortUrl } from "../controllers/urlsControllers.js";

const router = express.Router();

router.post("/urls/shorten", urlBodyValidation, tokenValidation, returnShortUrl);

export default router;