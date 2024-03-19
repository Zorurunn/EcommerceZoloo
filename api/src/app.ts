import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import categoryRouter from "./routers/category.router";
import { authMiddleware } from "./middlewares/auth.middleware";
import emailRouter from "./routers/reset.router";
import productRouter from "./routers/product.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/", emailRouter);
app.use("/", categoryRouter);
app.use("/", productRouter);

// app.use(authMiddleware);

export default app;
