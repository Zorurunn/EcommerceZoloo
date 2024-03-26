import { CustomInput } from "@/components";
import { Stack } from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler } from "react";

type productTotalPriceType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // Price
  priceName: string;
  priceValue: number | null;
  priceError?: boolean | undefined;
  // Remain qty
  remainQtyName: string;
  remainQtyValue: number | string;
  remainQtyError?: boolean | undefined;
};

export const ProductTotalPrice = (props: productTotalPriceType) => {
  const {
    handleChange,
    handleBlur,
    priceName,
    priceValue,
    priceError,
    remainQtyName,
    remainQtyValue,
    remainQtyError,
  } = props;
  return (
    <Stack width={"100%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack direction={"row"} gap={3}>
        <Stack flexGrow={1}>
          <CustomInput
            borderRadius="8px"
            name={priceName}
            value={priceValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={priceError}
            label="Үндсэн үнэ"
            type="number"
            placeHolder="Үндсэн үнэ"
          />
        </Stack>
        <Stack flexGrow={1}>
          <CustomInput
            borderRadius="8px"
            name={remainQtyName}
            value={remainQtyValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={remainQtyError}
            label="Үлдэгдэл тоо ширхэг"
            type="number"
            placeHolder="Үлдэгдэл тоо ширхэг"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
