"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
//Post request
userRouter.get("/getUser", user_controller_1.getUser);
exports.default = userRouter;
