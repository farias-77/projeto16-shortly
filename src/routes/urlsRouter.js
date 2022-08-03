import express from "express";
import { urlBodyValidation, tokenValidation, repeatedUrlValidation } from "../middlewares/urlsMiddlewares.js";
import { postShortUrl, getShortUrlById } from "../controllers/urlsControllers.js";

const router = express.Router();

router.post("/urls/shorten", urlBodyValidation, tokenValidation, repeatedUrlValidation, postShortUrl);
router.get("/urls/:id", getShortUrlById)

export default router;