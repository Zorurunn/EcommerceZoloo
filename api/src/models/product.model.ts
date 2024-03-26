import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  generalCategory: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
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
  // thumbnails: {
  //   type: String,
  //   required: true,
  // },

  images: [
    {
      type: String,
      required: true,
    },
  ],
  // coupon: {
  //   type: String,
  //   required: true,
  // },
  // salePercent: {
  //   type: Number,
  //   required: true,
  // },
  description: {
    type: String,
    required: true,
  },
  viewsCount: {
    type: Number,
    required: false,
  },
  serialNumber: {
    type: Number,
    required: true,
  },
  productType: {
    type: [],
    required: true,
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
  tag: {
    type: String,
    required: true,
  },

  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);
