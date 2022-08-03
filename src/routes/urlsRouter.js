import express from "express";
import { urlBodyValidation, tokenValidation, repeatedUrlValidation, userOwnsUrlValidation } from "../middlewares/urlsMiddlewares.js";
import { postShortUrl, getShortUrlById, redirectToUrl, deleteUrlById } from "../controllers/urlsControllers.js";

const router = express.Router();

router.post("/urls/shorten", urlBodyValidation, tokenValidation, repeatedUrlValidation, postShortUrl);
router.get("/urls/:id", getShortUrlById);
router.get("/urls/open/:shortUrl", redirectToUrl);
router.delete("/urls/:id", tokenValidation, userOwnsUrlValidation, deleteUrlById)

export default router;