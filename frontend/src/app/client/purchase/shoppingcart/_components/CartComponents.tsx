"use client";
// to do: make product counter
// add image by connecting with backend
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
type ProductTypeProps = {
  name: string;
  color: string;
  price: string;
  image: string;
  total: string;
};
export const CartComponents = (props: ProductTypeProps) => {
  const { name, color, image, price, total } = props;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 2fr 3fr 2fr",
        gap: 1,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Stack width={"100%"} direction={"row"} gap={3} paddingBottom={2}>
        <Image src={image} alt="product picture" width={86} height={87} />
        <Stack gap={1}>
          <Typography fontSize={14} fontWeight={800}>
            {name}
          </Typography>
          <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {color}
          </Typography>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {price}
        </Typography>
      </Stack>
      <Stack justifyContent={"center"}></Stack>
      <Stack justifyContent={"center"} alignItems={"self-end"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {total}
        </Typography>
      </Stack>
    </Stack>
  );
};
