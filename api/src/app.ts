import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use(authMiddleware);

export default app;
