"use client";
import { HighLightProducts } from "./_components/HighLight.Products";
import { IndexCard } from "./_components/Index.Card";
import { NewProducts } from "./_components/New.Products";
import { ServiceCards } from "./_components/Service";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack gap={4}>
        <IndexCard />
        <HighLightProducts />
        <NewProducts />
        <ServiceCards />
      </Stack>
    </>
  );
}
