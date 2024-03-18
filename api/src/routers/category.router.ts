import { Router } from "express";
import {
  createGeneralCategory,
  createSubCategory,
  getGeneralCategory,
  getSubCategory,
  updateSubCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter
  .post("/createGeneralCategory", createGeneralCategory)
  .post("/updateSubCategory", updateSubCategory)
  .get("/getGeneralCategory", getGeneralCategory)
  .get("/getSubCategory", getSubCategory)
  .post("/createSubCategory", createSubCategory);

export default categoryRouter;
