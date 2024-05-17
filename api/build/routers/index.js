"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = __importDefault(require("./auth.router"));
const reset_router_1 = __importDefault(require("./reset.router"));
const category_router_1 = __importDefault(require("./category.router"));
const order_router_1 = __importDefault(require("./order.router"));
const rating_router_1 = __importDefault(require("./rating.router"));
exports.default = {
    authRouter: auth_router_1.default,
    emailRouter: reset_router_1.default,
    categoryRouter: category_router_1.default,
    orderRouter: order_router_1.default,
    ratingRouter: rating_router_1.default,
};
