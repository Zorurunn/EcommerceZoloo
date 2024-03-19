"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export const Head = () => {
  return (
    <Stack
      width="100%"
      height={"56px"}
      direction={"row"}
      alignItems={"center"}
      bgcolor={"#FFFFFF"}
      px={3}
      gap={3}
      fontSize={"16px"}
      fontWeight={"400"}
    >
      <Link href={"./"}>
        <ArrowBackIosIcon fontSize="small" />
      </Link>
      <Typography>Захиалгын дэлгэрэнгүй</Typography>
    </Stack>
  );
};
