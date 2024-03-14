"use client";
import { Container, Stack } from "@mui/material";
import { IncomeTable } from "./_components/Income.Table";
import { OrderList } from "./_components/Order.List";

export default function Home() {
  return (
    <>
      <Container maxWidth={"xl"}>
        <IncomeTable />
        <OrderList />
      </Container>
    </>
  );
}
