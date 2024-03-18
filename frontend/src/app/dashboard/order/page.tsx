"use client";
import { Container } from "@mui/material";
import { Tabs } from "./_components/Tabs";
import { Filter } from "./_components/Filter";
import { OrderInfo } from "./_components/OrderInfo";

export default function Home() {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Tabs />
        <Filter />
        <OrderInfo />
      </Container>
    </>
  );
}
