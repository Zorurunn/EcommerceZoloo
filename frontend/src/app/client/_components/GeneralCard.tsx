"use client";

import { Stack, Typography, CardActionArea, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import Image from "next/image";
import { useState } from "react";

export type GeneralCardType = {
  src: string;
  name: string;
  price: number;
};

export const CARD_TYPE = [
  { src: "/pro.jpg", name: "Product", price: 750000 },
  { src: "/pro2.jpg", name: "Product", price: 750000 },
  { src: "/pro3.jpg", name: "Product", price: 750000 },
  { src: "/pro4.jpg", name: "Product", price: 750000 },
  { src: "/pro5.jpg", name: "Product", price: 750000 },
  { src: "/pro6.jpg", name: "Product", price: 750000 },
  { src: "/pro7.jpg", name: "Product", price: 750000 },
  { src: "/pro8.jpg", name: "Product", price: 750000 },
  { src: "/pro9.jpg", name: "Product", price: 750000 },
  { src: "/pro10.jpg", name: "Product", price: 750000 },
  { src: "/pro11.jpg", name: "Product", price: 750000 },
  { src: "/pro12.jpg", name: "Product", price: 750000 },
];

export const GeneralCard = (props: GeneralCardType) => {
  const { src, name, price } = props;
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  return (
    <Stack width={1} height={1}>
      <Stack
        bgcolor={"#F6F7FB"}
        className="bg"
        position={"relative"}
        box-shadow={"0px 0px 25px 0px #0000001A"}
        width={1}
        overflow={"hidden"}
        sx={{
          aspectRatio: 1 / 1,
          transition: "0.2 linear",
          "&:hover .card": {
            transform: "scale(1.05)",
            transition: "0.2s ease",
            bgcolor: "#EBF4F3",
          },
          "&:hover .bg": {
            bgcolor: "#EBF4F3",
            transition: "0.2s ease",
          },
          "&:hover .edit": {
            opacity: "100%",
            transition: "300ms ease-in-out",
          },
        }}
      >
        <Image
          className="card"
          fill
          sizes="small"
          style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          src={props.src}
          alt="Product Image"
        />
        {
          <Stack
            py={3}
            px={1}
            justifyContent={"end"}
            zIndex={1}
            width={50}
            height={"100%"}
            gap={1}
            alignItems={"center"}
            color={"#151875"}
            fontSize={20}
            className="edit"
            sx={{
              opacity: "0",
            }}
          >
            <Stack
              bgcolor={"transparent"}
              p={1}
              borderRadius={"50%"}
              sx={{ "&:hover": { bgcolor: "#FFFFFF" }, cursor: "pointer" }}
            >
              <ShoppingCartOutlinedIcon />
            </Stack>
            <Stack
              bgcolor={"transparent"}
              p={1}
              borderRadius={"50%"}
              sx={{ "&:hover": { bgcolor: "#FFFFFF" }, cursor: "pointer" }}
            >
              <ZoomInOutlinedIcon />
            </Stack>
            <Stack
              bgcolor={"transparent"}
              p={1}
              borderRadius={"50%"}
              sx={{ "&:hover": { bgcolor: "#FFFFFF" }, cursor: "pointer" }}
            >
              <FavoriteBorderIcon />
            </Stack>
          </Stack>
        }
      </Stack>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        marginY={1}
      >
        <Typography fontSize={18} fontWeight={700} color={"#151875"}>
          {props.name}
        </Typography>
        <Stack>{/* color input props */}</Stack>
        <Stack
          fontFamily={"Josefin Sans"}
          fontSize={21}
          fontWeight={400}
          color={"#151875"}
          alignItems={"center"}
        >
          {new Intl.NumberFormat().format(props.price) + "₮"}
        </Stack>
      </Stack>
    </Stack>
  );
};
