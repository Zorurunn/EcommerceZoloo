import { PropsWithChildren } from "react";

export type saleItemType = {
  title: string;
};

export type stepNodeType = {
  order: number;
  isActive: boolean;
  title: string;
} & PropsWithChildren;

export type productType = {
  _id: string;
  productName: string;
  categoryId: string;
  price: number;
  qty: number;
  // thumbnails: string;
  // images: string[];
  // coupon: string;
  // salePercent: number;
  description: string;
  // viewsCount: number;
  createdAt: Date;
  updatedAt: Date;
};
