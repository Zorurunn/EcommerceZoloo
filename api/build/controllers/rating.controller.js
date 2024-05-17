"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRating = void 0;
const models_1 = require("../models");
const rating_model_1 = require("../models/rating.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// ADD RATING
const addRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
    const { productId, rate, comment } = req.body;
    const isRated = yield rating_model_1.RatingModel.find({ userId: id, productId });
    if (isRated)
        return res.status(401).json({
            message: "already rated",
        });
    try {
        // ADD RATING MODEL
        yield rating_model_1.RatingModel.create({
            userId: id,
            productId,
            rate,
            comment,
        });
        // PRODUCT UPDATE
        const product = yield models_1.ProductModel.findOne({ _id: productId });
        if (!product)
            return res.status(401).json({
                message: "can not find this  product",
            });
        const ratedQty = (_a = product.rating) === null || _a === void 0 ? void 0 : _a.ratedQty;
        const starAverage = (_b = product.rating) === null || _b === void 0 ? void 0 : _b.starAverage;
        if (ratedQty === undefined || starAverage === undefined)
            return res.status(401).json({
                message: "can not find ratings field",
            });
        const totalStar = starAverage * ratedQty;
        if (ratedQty === 0) {
            yield models_1.ProductModel.updateOne({ _id: productId }, {
                "rating.ratedQty": 1,
                "rating.starAverage": rate,
            });
        }
        else {
            const newStarAverage = (totalStar + rate) / (ratedQty + 1);
            const aa = yield models_1.ProductModel.updateOne({ _id: productId }, {
                $inc: { "rating.ratedQty": 1 },
                "rating.starAverage": Math.floor(newStarAverage),
            });
        }
        return res.json({ message: "rating added" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.addRating = addRating;
