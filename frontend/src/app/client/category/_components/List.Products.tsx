"use client";

import { Stack } from "@mui/material";
import { ListCardProduct } from "./ListCardProduct";
import { CARD_TYPE } from "../../_components/GeneralCard";

export const ListProducts = () => {
  return (
    <Stack gap={"34px"} mt={6}>
      {CARD_TYPE.map((item, index) => (
        <ListCardProduct
          key={index}
          productName={item.productName}
          productImage={item.productImage}
          productColor={item.productColor}
          productPrice={item.productPrice}
          productAdditional={item.productAdditional}
          productId={item._id}
          avgStars={item.avgStars}
        />
      ))}
    </Stack>
  );
};
