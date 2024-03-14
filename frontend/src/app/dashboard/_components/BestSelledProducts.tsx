import { Divider, Stack, Typography } from "@mui/material";
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
      overflow={"hidden"}
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
      <Stack gap={2} flexGrow={1}>
        <TableHeader />
        <Stack gap={2} flexGrow={1} overflow={"scroll"}>
          <Stack width={"100%"} height={"100%"} position={"relative"}>
            <Stack position={"absolute"} top={0} left={0}>
              {products.map((item, index) => {
                return (
                  <Stack key={item.id + index}>
                    <BestSelledLine {...item} index={index + 1} />
                    <Divider />
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          {/* {products.map((item, index) => {
            return (
              <Stack key={item.id + index}>
                <BestSelledLine {...item} index={index + 1} />
                <Divider />
              </Stack>
            );
          })} */}
        </Stack>
      </Stack>
    </Stack>
  );
};
