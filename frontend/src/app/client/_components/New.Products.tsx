"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CARD_TYPE, GeneralCard } from "./GeneralCard";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";

export const NewProducts = () => {
  const [cards, setCards] = useState<generalCategoryType[]>();

  return (
    <Stack>
      <Container maxWidth={"lg"}>
        <Grid
          width={"100%"}
          container
          // spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8 }}
          justifyContent={"space-between"}
        >
          {CARD_TYPE?.map((item, _) => (
            <Grid item xs={3}>
              <GeneralCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
