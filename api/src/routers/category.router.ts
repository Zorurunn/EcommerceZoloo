import { Router } from "express";
import {
  createGeneralCategory,
  createSubCategory,
  getGeneralCategory,
  getSubCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter
  .post("/createGeneralCategory", createGeneralCategory)
  .get("/getGeneralCategory", getGeneralCategory)
  .get("/getSubCategory", getSubCategory)
  .post("/createSubCategory", createSubCategory);

export default categoryRouter;
