import { CustomInput } from "@/components";
import { Stack } from "@mui/material";
import React from "react";

export const ProductTotalPrice = () => {
  return (
    <Stack width={"90%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack direction={"row"} gap={3}>
        <Stack flexGrow={1}>
          <CustomInput
            label="Үндсэн үнэ"
            type="number"
            placeHolder="Үндсэн үнэ"
          />
        </Stack>
        <Stack flexGrow={1}>
          <CustomInput
            label="Үлдэгдэл тоо ширхэг"
            type="number"
            placeHolder="Үлдэгдэл тоо ширхэг"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
