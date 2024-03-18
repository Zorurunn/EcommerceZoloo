"use client";
import { Container, Stack } from "@mui/material";
import { IncomeTable } from "./_components/Income.Table";
import { OrderList } from "./_components/Order.List";
import StickyHeadTable from "./_components/test.table";

export default function Home() {
  return (
    <Stack gap={3}>
      <IncomeTable />
      <OrderList />
      <StickyHeadTable />
    </Stack>
  );
}
