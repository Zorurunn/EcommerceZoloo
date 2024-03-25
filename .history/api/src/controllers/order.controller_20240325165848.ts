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
  const { userId, deliveryDetails, orderedProducts, deliveryStatus } = req.body;

  try {
    // CHECK STOCK
    // for (let i = 0; i <= orderedProducts.length; i++) {
    //   const { productId, quantity, name } = orderedProducts[i];
    //   const thisProduct = await ProductModel.findOne({ _id: productId });

    //   if (!thisProduct) {
    //     return res.status(401).json({
    //       message: ` could not find this product -> "${name}" from data base`,
    //     });
    //   }

    //   if (thisProduct.qty < quantity) {
    //     return res.status(401).json({
    //       message: ` "${name}" no more stock`,
    //     });
    //   }
    //   console.log("hasah");

    //   // return res.json({ message: "asdflksjf" });
    // }
    for (let i = 0; i < orderedProducts.length; i++) {
      const num = orderedProducts[i].quantity;

      const productStock = await ProductModel.findOne({
        _id: orderedProducts[i].productId,
      });

      if (!productStock) {
        return res.status(400).json({ message: "product id not found" });
      }

      const productStockQty = productStock.qty;

      if (productStockQty < num || num <= 0 || productStockQty === 0) {
        return res.json({ message: "order exceeded stock" });
      }

      // const updateLeftProductQty = await ProductModel.findOneAndUpdate(
      //   { _id: orderedProducts[i].productId },
      //   { $inc: { qty: -num } }
      // );

      // const updateSalesProductQty = await ProductModel.findOneAndUpdate(
      //   { _id: orderedProducts[i].productId },
      //   { $inc: { sales: num } }
      // );
    }
    console.log("duusaw");

    for (let i = 0; i < orderedProducts.length; i++) {
     

    
    }

    return res.json({ message: "Successfully order added" });
  } catch (error) {
    res.json(error);
  }
};

// BILKWRITE MINUS STOCK
//  for (let i = 0; i <= orderedProducts.length; i++) {
//   console.log("eeee");

//   const { productId, quantity, name } = orderedProducts[i];
//   const thisProduct = await ProductModel.findOne({ _id: productId });
//   console.log("Aaaa");

//   await ProductModel.updateOne(
//     { _id: productId },
//     {
//       $inc: { qty: -2 },
//     }
//   );
// }

// Too shirheg < stovk
// bulkwrite;
// await ProductModel.updateOne(
//   { _id: "" },
//   {
//     $inc: { stock: -5 },
//   }
// );
