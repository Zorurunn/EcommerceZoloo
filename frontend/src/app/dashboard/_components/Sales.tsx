import { Stack } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SalesBarChart } from "./SalesBarChart";

export const Sales = () => {
  return (
    <Stack
      overflow={"hidden"}
      height={"100%"}
      borderRadius={3}
      px={3}
      py={3}
      sx={{ backgroundColor: "#fff" }}
      gap={4}
    >
      <Stack direction={"row"}>
        <Stack
          justifyContent={"center"}
          flexGrow={1}
          fontSize={18}
          fontWeight={600}
        >
          Борлуулалт
        </Stack>
        <ChevronRightIcon />
      </Stack>
      <Stack>
        <SalesBarChart />
      </Stack>
    </Stack>
  );
};
