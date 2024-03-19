"use client";
import { Container } from "@mui/material";
import { Filter } from "./_components/Filter";
import { OrderInfo } from "./_components/OrderInfo";
import { Tabs } from "./_components/Tabs";


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
