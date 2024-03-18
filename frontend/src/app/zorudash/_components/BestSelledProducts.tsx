import { Stack, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { TableHeader } from "./TableHeader";
import { BestSelledLine } from "./BestSelledLine";

// todo: after server implementation delete this mock data
// todo: use server side data instead of mock data

const products = [
  {
    name: "MEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S AND MY HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
  {
    name: "WOMEN'S HORSEBIT MULE",
    id: "#1246GQ8989",
    imgUrl: "/zoru/boot.jpg",
    price: 135000,
    soldQuantity: 15,
  },
];
export const BestSelledProducts = () => {
  return (
    <Stack
      overflow={"scroll"}
      height={"100%"}
      borderRadius={3}
      px={3}
      py={3}
      sx={{ backgroundColor: "#fff" }}
      gap={4}
    >
      <Stack direction={"row"}>
        <Stack
          justifyContent={"center"}
          flexGrow={1}
          fontSize={18}
          fontWeight={600}
        >
          Шилдэг бүтээгдэхүүн
        </Stack>
        <ChevronRightOutlinedIcon />
      </Stack>
      <Stack>
        <TableHeader />
        {products.map((item, index) => {
          return <BestSelledLine {...item} index={index} />;
        })}
      </Stack>
    </Stack>
  );
};
