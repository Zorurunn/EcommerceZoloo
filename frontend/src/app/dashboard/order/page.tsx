"use client";
import { Container } from "@mui/material";
import { Tabs } from "./components/Tabs";
import { Filter } from "./components/Filter";
import { OrderInfo } from "./components/OrderInfo";

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
