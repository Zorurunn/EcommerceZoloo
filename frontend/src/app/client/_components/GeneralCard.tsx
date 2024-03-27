"use client";

import { Stack, Typography, CardActionArea, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import Image from "next/image";
import { useState } from "react";
import { ProductParams } from "@/components/provider/DataProvider";

export type GeneralCardType = {
  src: string;
  name: string;
  price: number;
};

export const GeneralCard = (props: ProductParams) => {
  const { images, productName, price } = props;
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
          // src={images[0]??"/cam.png"}
          // Todo zurag ynzal
          src={"/cam.png"}
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
          {productName}
        </Typography>
        <Stack>{/* color input props */}</Stack>
        <Stack
          fontFamily={"Josefin Sans"}
          fontSize={21}
          fontWeight={400}
          color={"#151875"}
          alignItems={"center"}
        >
          {new Intl.NumberFormat().format(price) + "₮"}
        </Stack>
      </Stack>
    </Stack>
  );
};
