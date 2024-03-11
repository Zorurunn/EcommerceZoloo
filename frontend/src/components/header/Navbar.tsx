"use client";
import {
  Stack,
  Container,
  Typography,
  TextField,
  Input,
  InputAdornment,
  styled,
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <Stack position={"sticky"} width="100vw" bgcolor="#12A795">
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          padding={"10px"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Image src="/images/Logo.png" alt="Logo" width={37} height={31} />
            <Typography fontSize={31} fontWeight={700} color={"white"}>
              Ecommerce
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <TextField
              sx={{}}
              variant="outlined"
              type="search"
              placeholder="Хайлт"
              InputProps={{
                sx: { borderRadius: "8px", background: "#F7F7F8" },
                startAdornment: (
                  <InputAdornment position="start">
                    {/* search */}
                    <SearchIcon sx={{ cursor: "pointer" }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  padding: "8px",
                  border: "1px",
                  borderRadius: "8px",
                  background: "#F7F7F8",
                },
              }}
            />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <FavoriteIcon sx={{ color: "white" }} />
            <ShoppingCartIcon sx={{ color: "white" }} />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Navbar;
