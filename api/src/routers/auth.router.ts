import { Router } from "express";
import { signIn } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signIn", signIn);

export default authRouter;
