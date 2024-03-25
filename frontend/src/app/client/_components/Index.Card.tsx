"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Stack, Container, Typography } from "@mui/material";
const items = [
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        sx={{
          backgroundImage: "url(/bg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        justifyContent={"center"}
      >
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={16} fontWeight={700}>
              Тав тухтай орчинг таны амьдралд
            </Typography>
            <Typography color={"#FFFFFF"} fontSize={53} fontWeight={800}>
              2024 оны хамгийн <br /> шинэ загвар
            </Typography>
            <Typography color={"#EBF4F3"} fontSize={16} fontWeight={700}>
              Швед улсын хамгийн шилдэг брэндийг албан ёсны <br /> эрхтэйгээр
              оруулж ирж байна
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        sx={{
          backgroundImage: "url(/product2.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={16} fontWeight={700}>
              Тав тухтай орчинг таны амьдралд
            </Typography>
            <Typography color={"#FFFFFF"} fontSize={53} fontWeight={800}>
              2024 оны хамгийн <br /> шинэ загвар
            </Typography>
            <Typography color={"#EBF4F3"} fontSize={16} fontWeight={700}>
              Швед улсын хамгийн шилдэг брэндийг албан ёсны <br /> эрхтэйгээр
              оруулж ирж байна
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        sx={{
          backgroundImage: "url(/product3.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={16} fontWeight={700}>
              Тав тухтай орчинг таны амьдралд
            </Typography>
            <Typography color={"#FFFFFF"} fontSize={53} fontWeight={800}>
              2024 оны хамгийн <br /> шинэ загвар
            </Typography>
            <Typography color={"#EBF4F3"} fontSize={16} fontWeight={700}>
              Швед улсын хамгийн шилдэг брэндийг албан ёсны <br /> эрхтэйгээр
              оруулж ирж байна
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
];

export const IndexCard = () => {
  return (
    <Carousel animation="slide" autoPlay={true} duration={100}>
      {items.map((item, i) => (
        <Paper key={i}>
          <Stack>{item.bgImg}</Stack>
        </Paper>
      ))}
    </Carousel>
  );
};
