import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import userRouter from "./src/routes/userRouter.js";
import urlsRouter from "./src/routes/urlsRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(urlsRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.magenta("Server on!"));
});