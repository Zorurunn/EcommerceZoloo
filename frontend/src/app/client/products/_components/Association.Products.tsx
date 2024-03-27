"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";
import { GeneralCard, CARD_TYPE } from "../../_components/GeneralCard";

export const AssociationProduct = () => {
  const [cards, setCards] = useState<generalCategoryType[]>();

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"} py={6}>
        <Stack alignItems={"flex-start"} gap={6}>
          <Stack color={"#151875"} fontSize={42} fontWeight={800}>
            Холбоотой бүтээгдэхүүн
          </Stack>
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
        </Stack>
      </Stack>
    </Container>
  );
};
