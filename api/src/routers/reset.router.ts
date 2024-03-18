import { Router } from "express";
import { sendEmail, sendOtp } from "../controllers";

const emailRouter = Router();

emailRouter.post("/sendEmail", sendEmail).post("/sendOtp", sendOtp);

export default emailRouter;
