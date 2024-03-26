"use client";

import { Stack, Typography, CardActionArea, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import Image from "next/image";

export type GeneralCardType = {
  src: string;
  name: string;
  price: number;
};

export const CARD_TYPE = [
  { src: "/canon.png", name: "Canon камер", price: 750000 },
  { src: "/Chair.png", name: "Усан ягаан сандал", price: 750000 },
  { src: "/chair2.png", name: "Саарал сандал", price: 750000 },
  { src: "/backpack.png", name: "Laptop цүнх", price: 750000 },
  { src: "/product2.jpg", name: "Canon камер", price: 750000 },
  { src: "/Chair.png", name: "Усан ягаан сандал", price: 750000 },
  { src: "/ss.png", name: "Саарал сандал", price: 750000 },
  { src: "/backpack.png", name: "Laptop цүнх", price: 750000 },
];

export const GeneralCard = (props: GeneralCardType) => {
  const { src, name, price } = props;
  return (
    <Stack
      box-shadow={"0px 0px 25px 0px #0000001A"}
      width={1}
      sx={{
        aspectRatio: 1 / 1,
        transition: "0.2 linear",
        "&:hover .card": {
          transform: "scale(1.05)",
          transition: "0.2s ease",
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
      <Stack
        width={"100%"}
        height={280}
        bgcolor={"#F6F7FB"}
        className="bg"
        position={"relative"}
      >
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
        <Image
          className="card"
          fill
          objectFit="cover"
          src={props.src}
          alt="Product Image"
        />
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
