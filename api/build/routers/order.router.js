"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/createOrder", order_controller_1.createOrder);
exports.default = orderRouter;
