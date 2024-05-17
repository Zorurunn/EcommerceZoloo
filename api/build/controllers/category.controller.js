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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubCategories = exports.getGeneralCategories = exports.updateSubCategory = exports.createSubCategory = exports.createGeneralCategory = void 0;
const models_1 = require("../models");
// CREATE GENERAL CATEGORY
const createGeneralCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { generalCategoryName } = req.body;
    try {
        const categoryExists = yield models_1.GeneralCategoryModel.find({
            generalCategoryName,
        });
        if (categoryExists.length) {
            return res.status(401).json({
                message: "category already exists",
            });
        }
        yield models_1.GeneralCategoryModel.create({
            generalCategoryName,
            createdAt: new Date(),
        });
        return res.json({ message: "Successfully category added" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createGeneralCategory = createGeneralCategory;
// CREATE SUB CATEGORY
const createSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { subCategoryName, generalCategoryId } = req.body;
    try {
        const categoryExists = yield models_1.SubCategoryModel.find({
            subCategoryName,
        });
        if (categoryExists.length) {
            return res.status(401).json({
                message: "category already exists. Update it !!!",
            });
        }
        //
        // id
        // rating unelge number
        // comment
        // product ID
        // product Model
        // rating
        // nemeed rate hiisen hunii toond huwaana
        // dundaj  4.5
        // niit heden hun unelgee ugsun  1000 hun
        //
        //
        //
        yield models_1.SubCategoryModel.create({
            subCategoryName,
            generalCategoryId,
            createdAt: new Date(),
        });
        return res.json({ message: "Successfully category added" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createSubCategory = createSubCategory;
// UPDATE SUB CATEGORY
const updateSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { subCategoryName, generalCategoryId } = req.body;
    try {
        const categoryExists = yield models_1.SubCategoryModel.find({
            subCategoryName,
        });
        if (!categoryExists.length) {
            return res.status(401).json({
                message: "no sub category exists. first create sub category",
            });
        }
        const categoryExistsWithGeneral = yield models_1.SubCategoryModel.find({
            subCategoryName,
            generalCategoryId,
        });
        if (categoryExistsWithGeneral.length) {
            return res.status(401).json({
                message: "category already exists",
            });
        }
        yield models_1.SubCategoryModel.updateOne({
            subCategoryName,
        }, { $push: { generalCategoryId: generalCategoryId }, updatedAt: new Date() });
        return res.json({ message: "Successfully category updated" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.updateSubCategory = updateSubCategory;
// GET GENERAL CATEGORY
const getGeneralCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalCategories = yield models_1.GeneralCategoryModel.find({});
        return res.json(generalCategories);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getGeneralCategories = getGeneralCategories;
// GET SUB CATEGORY
const getSubCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subCategories = yield models_1.SubCategoryModel.find({});
        return res.json(subCategories);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getSubCategories = getSubCategories;
