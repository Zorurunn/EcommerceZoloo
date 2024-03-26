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
  images: [
    {
      type: String,
      required: false,
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
    type: Number,
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
  // thumbnails: {
  //   type: String,
  //   required: true,
  // },
  // coupon: {
  //   type: String,
  //   required: true,
  // },

  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);
