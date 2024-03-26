"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CARD_TYPE, GeneralCard } from "./GeneralCard";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";
import Carousel from "react-material-ui-carousel";

export const HighLightProducts = () => {
  const [cards, setCards] = useState<generalCategoryType[]>();

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"}>
        <Stack alignItems={"center"} gap={6}>
          <Stack color={"#151875"} fontSize={42} fontWeight={800}>
            Онцлох бүтээгдэхүүн
          </Stack>

          <Carousel
            sx={{ width: "100%" }}
            animation="slide"
            autoPlay={true}
            duration={100}
          >
            <Grid
              width={"100%"}
              container
              spacing={{ xs: 2, md: 3 }}
              // columns={{ xs: 4, sm: 8 }}
              justifyContent={"space-between"}
            >
              {CARD_TYPE?.slice(0, 4).map((item, _) => (
                <Grid item xs={3}>
                  <GeneralCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Carousel>
        </Stack>
      </Stack>
    </Container>
  );
};
