import { Button, Stack, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import { ProductInput } from "./ProductInptu";
import { ProductScroll } from "./ProductScroll";

export const ProductAllInfo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack width={"100%"} height={"100%"}>
      <Stack width={"100%"} direction={"row"} gap={1} borderBottom={1}>
        <Button
          onClick={() => {
            setActiveTab(0);
          }}
          sx={{
            fontSize: "18px",
            color: "common.black",
            py: "16px",
            px: "24px",
            fontWeight: 0 === activeTab ? "800" : "400",
            borderBottom: 0 === activeTab ? "2" : "0",
          }}
        >
          Бүтээгдэхүүн
        </Button>
        <Button
          onClick={() => {
            setActiveTab(1);
          }}
          sx={{
            fontSize: "18px",
            color: "common.black",
            py: "16px",
            px: "24px",
            fontWeight: 0 === activeTab ? "400" : "800",
            borderBottom: 0 === activeTab ? "0" : "2",
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
