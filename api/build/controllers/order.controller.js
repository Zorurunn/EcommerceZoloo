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
exports.createOrder = void 0;
const models_1 = require("../models");
// CREATE ORDER
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, deliveryDetails, orderedProducts, deliveryStatus } = req.body;
    try {
        // CHECK PRODUCT AND STOCK
        for (let i = 0; i < orderedProducts.length; i++) {
            const { productId, quantity, name } = orderedProducts[i];
            const thisProduct = yield models_1.ProductModel.findOne({ _id: productId });
            if (!thisProduct) {
                return res.status(401).json({
                    message: ` could not find this product -> "${name}" from data base`,
                });
            }
            if (thisProduct.remainQty < quantity ||
                quantity <= 0 ||
                thisProduct.remainQty === 0) {
                return res.status(401).json({
                    message: ` "${name}" no more stock`,
                });
            }
        }
        // DECREASE STOCK
        yield models_1.ProductModel.bulkWrite(orderedProducts.map((item) => ({
            updateOne: {
                filter: { _id: item.productId },
                update: {
                    $inc: { remainQty: -item.quantity },
                },
            },
        })));
        // INCREASE SALED QTY
        yield models_1.ProductModel.bulkWrite(orderedProducts.map((item) => ({
            updateOne: {
                filter: { _id: item.productId },
                update: {
                    $inc: { saledQty: item.quantity },
                },
            },
        })));
        // CREATE ORDER
        const myOrder = yield models_1.OrderModel.create({
            userId,
            deliveryDetails,
            orderedProducts,
            deliveryStatus,
            createdAt: new Date(),
        });
        return res.json({ message: "Successfully order added", myOrder });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.createOrder = createOrder;
