import { RequestHandler } from "express";
import { ProductModel } from "../models";
import { RatingModel } from "../models/rating.model";

// ADD RATING
export const addRating: RequestHandler = async (req, res) => {
  const { userId, productId, rate, comment } = req.body;

  try {
    // ADD RATING MODEL
    await RatingModel.create({
      userId,
      productId,
      rate,
      comment,
    });

    // PRODUCT UPDATE
    const product = await ProductModel.findOne({ _id: productId });

    if (!product)
      return res.status(401).json({
        message: "can not find this  product",
      });

    const ratedQty = product.rating?.ratedQty;
    const starAverage = product.rating?.starAverage;
    if (ratedQty === undefined || starAverage === undefined)
      return res.status(401).json({
        message: "can not find ratings field",
      });
    const totalStar = starAverage * ratedQty;
    if (ratedQty === 0) {
      await ProductModel.updateOne(
        { _id: productId },
        {
          "rating.ratedQty": 1,
          "rating.starAverage": rate,
        }
      );
    } else {
      const newStarAverage = (totalStar + rate) / (ratedQty + 1);
      const aa = await ProductModel.updateOne(
        { _id: productId },
        {
          $inc: { "rating.ratedQty": 1 },
          "rating.starAverage": newStarAverage,
        }
      );
    }

    return res.json({ message: "rating added" });
  } catch (error) {
    res.json(error);
  }
};
