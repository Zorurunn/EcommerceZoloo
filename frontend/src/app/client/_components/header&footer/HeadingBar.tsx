"use client";
import { Stack, Container, Typography, Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import React from "react";
import { NAVBAR_HEIGHT } from "@/constants";
import { useRouter } from "next/navigation";

export const HeadingBar = () => {
  const router = useRouter();
  return (
    <Stack
      position={"sticky"}
      width="100vw"
      bgcolor="#7E33E0"
      height={NAVBAR_HEIGHT}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          padding={"10px"}
          alignItems={"center"}
        >
          <Stack direction={"row"} gap={8} alignItems={"center"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              color={"#F1F1F1"}
            >
              <MailOutlineIcon sx={{ fontSize: "18px" }} />
              <Typography fontSize={16} fontWeight={600}>
                info@ecommerce.mn
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              color={"#F1F1F1"}
            >
              <PhoneInTalkOutlinedIcon sx={{ fontSize: "18px" }} />
              <Typography fontSize={16} fontWeight={600}>
                77123456
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={3}
            color={"#F1F1F1"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={0.5}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/signin");
              }}
            >
              <Typography fontSize={16} fontWeight={600}>
                Нэвтрэх
              </Typography>
              <PersonOutlineIcon sx={{ fontSize: "18px" }} />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={0.5}
            >
              <Typography fontSize={16} fontWeight={600}>
                Хадгалах
              </Typography>
              <FavoriteBorderIcon sx={{ fontSize: "18px" }} />
            </Stack>
            <ShoppingCartIcon
              sx={{ fontSize: "22px", cursor: "pointer" }}
              onClick={() => {
                router.push("/client/purchase/shoppingcart");
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
