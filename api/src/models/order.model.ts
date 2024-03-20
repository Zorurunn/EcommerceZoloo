import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  deliveryDetails: {
    type: {
      address: String,
      phoneNumber: Number,
      paymentMethod: String,
    },
    required: true,
  },
  orderedProducts: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        name: String,
        price: Number,
        discount: Number,
        quantity: Number,
        thumbnailUrl: String,
      },
    ],
    required: true,
  },
  deliveryStatus: {
    type: String,
    required: true,
  },

  createdAt: Date,
  updatedAt: Date,
});

export const OrderModel = model("order", orderSchema);
