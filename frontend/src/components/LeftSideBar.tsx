import { sideBarLines } from "@/constants";
import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export const LeftSideBar = () => {
  const [selectedOption, setSelectedOption] =
    useState<string>("Хяналтын самбар");
  return (
    <Stack gap={3}>
      {sideBarLines.map((item) => (
        <Button
          sx={{
            ":hover": { backgroundColor: "none" },
            textTransform: "none",
            justifyContent: "start",
            color: "text.primary",
            backgroundColor: selectedOption === item.name ? "#D6D8DB" : null,
            borderRadius: 0,
          }}
          onClick={() => {
            setSelectedOption(item.name);
          }}
        >
          <Stack key={item.name} direction={"row"} gap={1} pl={3}>
            <item.icon className="w-8 h-8" />
            <Typography>{item.name}</Typography>
          </Stack>
        </Button>
      ))}
    </Stack>
  );
};
