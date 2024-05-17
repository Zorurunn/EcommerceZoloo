"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const generalCategorySchema = new mongoose_1.Schema({
    generalCategoryName: {
        type: String,
        required: true,
    },
    createdAt: Date,
    // updatedAt: Date,
});
exports.GeneralCategoryModel = (0, mongoose_1.model)("generalCategory", generalCategorySchema);
