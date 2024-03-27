"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type ProductTypeProps = {
  name: string;
  color: string;
  price: string;
  image: string;
};
export const ProductForm = (props: ProductTypeProps) => {
  const { name, color, price, image } = props;
  return (
    <Stack
      direction={"row"}
      gap={3}
      paddingBottom={3}
      sx={{ borderBottom: "1px solid #E1E1E4" }}
    >
      <Image src={image} alt="product picture" width={86} height={87} />
      <Stack width={"100%"} gap={1}>
        <Typography fontSize={14} fontWeight={800}>
          {name}
        </Typography>
        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {color}
          </Typography>
          <Typography fontSize={14} fontWeight={700} color={"#151875"}>
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
