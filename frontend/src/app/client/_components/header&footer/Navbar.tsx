"use client";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import { useState } from "react";
import { TextFields } from "@mui/icons-material";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(" Нүүр");

  const data = [{ name: "Нүүр" }, { name: " Ангилал" }];
  return (
    <Stack width={"100%"} bgcolor={"#FFFFFF"}>
      <Container maxWidth={"xl"}>
        <Stack
          width={"100%"}
          py={3}
          px={1}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"25%"}
          >
            <Typography fontSize={34} fontWeight={700} color={"#0D0E43"}>
              Ecommerce
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={3}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  sx={{
                    color: activeTab === "Нүүр" ? "#0D0E43" : "#0D0E43",
                  }}
                >
                  Нүүр
                </Typography>
                <KeyboardArrowDownIcon />
              </Stack>

              <Typography fontSize={16} fontWeight={400} color={"#0D0E43"}>
                Ангилал
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <TextField
              sx={{}}
              variant="outlined"
              type="search"
              InputProps={{
                sx: {
                  background: "#FB2E86",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ cursor: "pointer", color: "#FFFFFF" }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  padding: "8px",
                  border: "2px solid #E7E6EF",
                  background: "#F7F7F8",
                },
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
