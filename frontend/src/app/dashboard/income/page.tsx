"use client";
import { Stack } from "@mui/material";
import { IncomeTable } from "./_components/Income.Table";
import OrderList from "./_components/Order.List"
import KeepMountedModal from "./_components/test";

export default function Home() {
  return (
    <Stack gap={2} my={3}>
      <IncomeTable />
      <KeepMountedModal/>
      <OrderList />
    </Stack>
  );
}
