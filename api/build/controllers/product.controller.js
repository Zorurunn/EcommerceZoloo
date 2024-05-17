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
exports.productViewsQuantityCreate = exports.productViewsQuantityUpdate = exports.viewUpdate = exports.updateProduct = exports.getProducts = exports.createProduct = void 0;
const models_1 = require("../models");
const view_model_1 = require("../models/view.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// CREATE PRODUCT
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
    const { productName, generalCategoryId, subCategoryId, price, remainQty, images, discount, description, serialNumber, productType, productTag,
    // thumbnails,
    // coupon,
     } = req.body;
    console.log("id", id);
    try {
        const productExists = yield models_1.ProductModel.find({
            serialNumber,
        });
        if (productExists.length) {
            return res.status(401).json({
                message: "This product is already exists",
            });
        }
        const a = "test";
        const product = yield models_1.ProductModel.create({
            productName,
            generalCategoryId,
            subCategoryId,
            price,
            remainQty,
            images,
            discount,
            description,
            serialNumber,
            productType,
            productTag,
            merchantId: id,
            // thumbnails,
            // coupon,
            createdAt: new Date(),
        });
        return res.json({ message: "Product successfully created", product });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createProduct = createProduct;
// GET PRODUCTS
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield models_1.ProductModel.find({});
    res.json(products);
});
exports.getProducts = getProducts;
// UPDATE PRODUCT
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, productName, generalCategoryId, subCategoryId, price, remainQty, 
    // thumbnails,
    // images,
    // coupon,
    // salePercent,
    description, } = req.body;
    try {
        const productExists = yield models_1.ProductModel.find({ _id: id });
        if (!productExists.length) {
            return res.status(401).json({
                message: "Could not find this product",
            });
        }
        const updatedProduct = yield models_1.ProductModel.updateOne({ _id: id }, {
            productName,
            generalCategoryId,
            subCategoryId,
            price,
            remainQty,
            // thumbnails,
            // images,
            // coupon,
            // salePercent,
            description,
            updatedAt: new Date(),
        });
        return res.json({
            message: "Product successfully updated",
            updatedProduct,
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.updateProduct = updateProduct;
// VIEW UPDATE
const viewUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId } = req.body;
    try {
        const isViewed = yield view_model_1.ViewModel.find({ userId, productId });
        if (isViewed.length) {
            const newViewQty = isViewed[0].viewQty + 1;
            yield view_model_1.ViewModel.updateOne({
                userId,
                productId,
            }, { viewQty: newViewQty });
            (0, exports.productViewsQuantityUpdate)(productId);
            return res.json({ message: "View quantity updated" });
        }
        yield view_model_1.ViewModel.create({
            userId,
            productId,
            viewQty: 1,
        });
        yield (0, exports.productViewsQuantityCreate)(productId);
        return res.json({ message: "View quantity created" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.viewUpdate = viewUpdate;
// PRODUCT VIEWS QUANTITY UPDATE
const productViewsQuantityUpdate = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = props;
    try {
        const thisProduct = yield models_1.ProductModel.findOne({ productId });
        if (thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.viewsCount) {
            const newViewsCount = (thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.viewsCount) + 1;
            yield models_1.ProductModel.updateOne({
                productId,
            }, { viewsCount: newViewsCount });
        }
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.productViewsQuantityUpdate = productViewsQuantityUpdate;
// PRODUCT VIEWS QUANTITY CREATE
const productViewsQuantityCreate = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = props;
    try {
        yield models_1.ProductModel.updateOne({
            productId,
        }, { viewsCount: 1 });
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.productViewsQuantityCreate = productViewsQuantityCreate;
