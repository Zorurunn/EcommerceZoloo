"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const categoryRouter = (0, express_1.Router)();
categoryRouter
    .post("/createGeneralCategory", category_controller_1.createGeneralCategory)
    .post("/updateSubCategory", category_controller_1.updateSubCategory)
    .get("/getGeneralCategories", category_controller_1.getGeneralCategories)
    .get("/getSubCategories", category_controller_1.getSubCategories)
    .post("/createSubCategory", category_controller_1.createSubCategory);
exports.default = categoryRouter;
