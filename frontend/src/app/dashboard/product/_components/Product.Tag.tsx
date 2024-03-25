"use client";
import { CustomInput } from "@/components";
import { Stack, Typography } from "@mui/material";
import { style } from "@mui/system";
import { link } from "fs";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import { TagsInput } from "react-tag-input-component";

type ProductTagType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // Product tag
  productTagName: string;
  productTagValue: string;
  productTagError: boolean | undefined;
};

export const ProductTag = () => {
  const [selected, setSelected] = useState([""]);
  return (
    <Stack px={3} pt={4} pb={8} borderRadius={"8px"} bgcolor={"#FFFF"}>
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
