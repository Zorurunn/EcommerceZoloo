"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
productRouter
    .post("/createProduct", product_controller_1.createProduct)
    .post("/updateProduct", product_controller_1.updateProduct)
    .post("/viewUpdate", product_controller_1.viewUpdate)
    .get("/getProducts", product_controller_1.getProducts);
exports.default = productRouter;
