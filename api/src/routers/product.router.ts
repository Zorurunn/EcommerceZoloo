import { Router } from "express";
import {
  viewUpdate,
  createProduct,
  updateProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/createProduct", createProduct)
  .post("/updateProduct", updateProduct)
  .post("/viewUpdate", viewUpdate);

export default productRouter;
