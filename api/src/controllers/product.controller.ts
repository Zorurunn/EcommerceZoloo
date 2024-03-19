import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ProductModel } from "../models";
import { ViewModel } from "../models/view.model";

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

// VIEW UPDATE
export const viewUpdate: RequestHandler = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const isViewed = await ViewModel.find({ userId, productId });

    if (isViewed.length) {
      const newViewQty = isViewed[0].viewQty + 1;
      await ViewModel.updateOne(
        {
          userId,
          productId,
        },
        { viewQty: newViewQty }
      );
      return res.json({ message: "View quantity updated" });
    }

    await ViewModel.create({
      userId,
      productId,
      viewQty: 1,
    });

    return res.json({ message: "View quantity created" });
  } catch (error) {
    res.json(error);
  }
};
