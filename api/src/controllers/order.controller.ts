import { RequestHandler } from "express";
import { OrderModel, ProductModel } from "../models";
import mongoose from "mongoose";

type orderedProductsType = {
  productId: {
    type: mongoose.Schema.Types.ObjectId;
    required: true;
  };
  name: string;
  price: number;
  discount: number;
  quantity: number;
  thumbnailUrl: string;
};

// CREATE ORDER
export const createOrder: RequestHandler = async (req, res) => {
  console.log("KITA");

  const { userId, deliveryDetails, orderedProducts, deliveryStatus } = req.body;

  try {
    // CHECK STOCK
    for (let i = 0; i <= orderedProducts.length; i++) {
      const { productId, quantity, name } = orderedProducts[i];
      const thisProduct = await ProductModel.findOne({ _id: productId });

      if (!thisProduct)
        return res.status(401).json({
          message: ` could not find this product -> "${name}" from data base`,
        });

      if (thisProduct.qty < quantity) {
        return res.status(401).json({
          message: ` "${name}" no more stock`,
        });
      }
    }
    // Too shirheg < stovk
    // bulkwrite;
    // await ProductModel.updateOne(
    //   { _id: "" },
    //   {
    //     $inc: { stock: -5 },
    //   }
    // );
    return res.json({ message: "Successfully order added" });
  } catch (error) {
    res.json(error);
  }
};
