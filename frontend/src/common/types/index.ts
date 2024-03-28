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

export type generalCategoryType = {
  generalCategoryName: string;
  _id: string;
};
export type subCategoryType = {
  _id: string;
  subCategoryName: string;
  generalCategoryId: string[];
};

export type cartProductType = {
  name: string;
  price: number;
  discount: number;
  quantity: number;
  thumbnailUrl: string;
  color: string;
  merchantId: string;
};

export type ratingType = {
  productId: string;
  rate: number;
  comment: string;
};
