"use client";
// to do: make product counter
// add image by connecting with backend
import { ListItem, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { ProductParams } from "@/components/provider/DataProvider";

export const CartComponents = (props: ProductParams) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 2fr 3fr 2fr",
        gap: 1,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Stack width={"100%"} direction={"row"} gap={3} paddingBottom={2}>
        <Stack position={"relative"} width={86} height={87}>
          <Image
            src={props.images[0]}
            alt="product picture"
            width={86}
            height={87}
          />
          <CancelIcon
            fontSize="small"
            sx={{ position: "absolute ", top: -8, right: -10 }}
          />
        </Stack>
        <Stack gap={1}>
          <Typography fontSize={14} fontWeight={800}>
            {props.productName}
          </Typography>
          <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {props.productType.productColor}
          </Typography>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {props.price}
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} paddingLeft={3}>
        <Stack
          width={"51px"}
          height={"15px"}
          direction={"row"}
          alignItems={"center"}
          bgcolor={"#F0EFF2"}
        >
          <Stack
            width={"12px"}
            height={"100%"}
            bgcolor={"#E7E7EF"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#BEBFC2"}
          >
            -
          </Stack>
          <Stack
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"27px"}
            fontSize={12}
            fontWeight={800}
            color={"#BEBFC2"}
          >
            {props.remainQty}
          </Stack>
          <Stack
            width={"12px"}
            height={"100%"}
            bgcolor={"#E7E7EF"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#BEBFC2"}
          >
            +
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"self-end"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {props.price}
        </Typography>
      </Stack>
    </Stack>
  );
};
