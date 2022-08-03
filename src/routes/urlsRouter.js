import express from "express";
import { urlBodyValidation, tokenValidation, repeatedUrlValidation } from "../middlewares/urlsMiddlewares.js";
import { postShortUrl, getShortUrlById, redirectToUrl } from "../controllers/urlsControllers.js";

const router = express.Router();

router.post("/urls/shorten", urlBodyValidation, tokenValidation, repeatedUrlValidation, postShortUrl);
router.get("/urls/:id", getShortUrlById);
router.get("/urls/open/:shortUrl", redirectToUrl);

export default router;