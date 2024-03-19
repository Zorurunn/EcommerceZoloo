import { Router } from "express";
import { viewUpdate } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/viewUpdate", viewUpdate);

export default productRouter;
