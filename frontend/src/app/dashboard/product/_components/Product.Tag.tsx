"use client";
import { CustomInput } from "@/components";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export const ProductTag = () => {
  const [selected, setSelected] = useState([""]);
  return (
    <Stack width={"90%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Typography fontSize={16} fontWeight={600} color={"text.primary"}>
        Төрөл
      </Typography>
      <TagsInput
        value={selected}
        onChange={setSelected}
        placeHolder="Таг нэмэх..."
      />
      <Typography fontSize={14} fontWeight={400} color={"#5E6166"}>
        Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
      </Typography>
    </Stack>
  );
};
