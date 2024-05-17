"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rating_controller_1 = require("../controllers/rating.controller");
const ratingRouter = (0, express_1.Router)();
ratingRouter.post("/addRating", rating_controller_1.addRating);
exports.default = ratingRouter;
