"use client";

import { Stack } from "@mui/material";
import { Productdetial } from "./_components/product.detial";
import { MoreDetial } from "./_components/More.Detials";
import { HighLightProducts } from "../_components/HighLight.Products";
import { AssociationProduct } from "./_components/Association.Products";

export default function Home() {
  return (
    <>
      <Stack>
        <Productdetial />
        <MoreDetial />
        <AssociationProduct />
      </Stack>
    </>
  );
}
