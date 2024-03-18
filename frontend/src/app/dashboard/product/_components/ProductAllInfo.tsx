"use client";

import { Button, Stack, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import { ProductInput } from "./ProductInptu";
import { ProductScroll } from "./ProductScroll";

export const ProductAllInfo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack width={"100%"} height={"100%"}>
      <Stack
        width={"100%"}
        direction={"row"}
        gap={1}
        borderBottom={2}
        borderColor={"#eee"}
      >
        <Button
          onClick={() => {
            setActiveTab(0);
          }}
          sx={{
            fontSize: "16px",
            py: "12px",
            px: "16px",
            color: 0 === activeTab ? "#000" : "#3F4145",
            fontWeight: 0 === activeTab ? "800" : "400",
            borderBottom: 0 === activeTab ? "3px solid #000" : "0",
            borderRadius: "0",
          }}
        >
          Бүтээгдэхүүн
        </Button>
        <Button
          onClick={() => {
            setActiveTab(1);
          }}
          sx={{
            fontSize: "16px",
            py: "12px",
            px: "16px",
            color: 0 === activeTab ? "#000" : "#3F4145",
            fontWeight: 0 === activeTab ? "400" : "800",
            borderBottom: 0 === activeTab ? "0" : "3px solid #000",
            borderRadius: "0",
          }}
        >
          Ангилал
        </Button>
      </Stack>
      <ProductInput />
      <ProductScroll />
    </Stack>
  );
};
