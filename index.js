import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import userRouter from "./src/routes/userRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log(chalk.magenta("Server on!"));
});