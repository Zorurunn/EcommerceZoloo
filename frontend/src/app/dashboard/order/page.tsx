"use client";
import { Container } from "@mui/material";
import { Tabs } from "./_components/Tabs";
import { Filter } from "./_components/Filter";
import { OrderInfo } from "./_components/OrderInfo";
import { Stack } from "@mui/system";

export default function Home() {
  return (
    <>
      <Stack>
        <Tabs />
        <Filter />
        <OrderInfo />
      </Stack>
    </>
  );
}
