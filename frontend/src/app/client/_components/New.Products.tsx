"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CARD_TYPE, GeneralCard } from "./GeneralCard";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";

export const NewProducts = () => {
  const [cards, setCards] = useState<generalCategoryType[]>();

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"}>
        <Stack alignItems={"center"} gap={6}>
          <Stack color={"#151875"} fontSize={42} fontWeight={800}>
            Шинээр нэмэгдсэн
          </Stack>
          <Grid
            width={"100%"}
            container
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8 }}
            justifyContent={"space-between"}
          >
            {CARD_TYPE?.map((item, _) => (
              <Grid item xs={3}>
                <GeneralCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};
