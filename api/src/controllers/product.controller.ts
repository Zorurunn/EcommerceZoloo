import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ProductModel } from "../models";

// CREATE PRODUCT
export const createProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    categoryId,
    price,
    qty,
    thumbnails,
    images,
    coupon,
    salePercent,
    description,
    viewsCount,
    createdAt,
    updatedAt,
  } = req.body;

  try {
    const userExist = await ProductModel.find({});

    if (userExist.length) {
      return res.status(401).json({
        message: ` и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
      });
    }

    // const user = await ProductModel.create({
    //   userName,
    //   email,
    //   phoneNumber,
    //   password,
    //   updatedAt: new Date(),
    //   createdAt: new Date(),
    // });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (error) {
    res.json(error);
  }
};
