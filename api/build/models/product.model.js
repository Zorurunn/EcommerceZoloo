"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    generalCategoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    subCategoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    remainQty: {
        type: Number,
        required: true,
    },
    quantiy: {
        type: Number,
        required: true,
    },
    images: [
        {
            type: String,
            required: true,
        },
    ],
    discount: {
        type: Number,
        required: false,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
    },
    productType: {
        productColor: [
            {
                type: String,
                required: true,
            },
        ],
        productSize: [
            {
                type: String,
                required: true,
            },
        ],
    },
    productTag: [
        {
            type: String,
            required: true,
        },
    ],
    viewsCount: {
        type: Number,
        required: false,
    },
    rating: {
        ratedQty: {
            type: Number,
            default: 0,
        },
        starAverage: {
            type: Number,
            default: 0,
        },
    },
    merchantId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    saledQty: {
        type: Number,
    },
    createdAt: Date,
    updatedAt: Date,
});
exports.ProductModel = (0, mongoose_1.model)("product", productSchema);
