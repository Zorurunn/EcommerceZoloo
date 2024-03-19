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
};

export const ProductTotalPrice = (props: productTotalPriceType) => {
  const { handleChange, handleBlur, priceName, priceValue, priceError } = props;
  return (
    <Stack width={"90%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack direction={"row"} gap={3}>
        <Stack flexGrow={1}>
          <CustomInput
            name={priceName}
            value={priceValue ?? 0}
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
            label="Үлдэгдэл тоо ширхэг"
            type="number"
            placeHolder="Үлдэгдэл тоо ширхэг"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
