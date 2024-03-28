"use client";
// to do: make product counter
// add image by connecting with backend
import { Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { cartProductType } from "@/common/types";
import { useData } from "@/components/provider/DataProvider";
import Add from "@mui/icons-material/Add";
import { Remove } from "@mui/icons-material";

export const CartComponents = (props: cartProductType) => {
  const { productCount, setProductCount, addCart, setAddCart } = useData();
  const { numberFormatter } = useData();
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
            src={props.thumbnailUrl}
            alt="product picture"
            width={86}
            height={87}
          />
        </Stack>
        <Stack gap={1}>
          <Typography fontSize={14} fontWeight={800}>
            {props.name}
          </Typography>
          <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {props.color}
          </Typography>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {numberFormatter.format(props.price) + "₮"}
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} paddingLeft={3}>
        <Stack
          width={"fit-content"}
          height={"15px"}
          direction={"row"}
          alignItems={"center"}
          bgcolor={"#F0EFF2"}
          color={"#BEBFC2"}
          fontSize={"14px"}
          gap={1}
        >
          <Stack
            onClick={() => {
              const newAddCart = addCart.map((element) => {
                if (element.productId == props.productId) {
                  if (element.quantity != 1) {
                    element.quantity -= 1;
                  }
                  return element;
                } else {
                  return element;
                }
              });
              setAddCart(newAddCart);
            }}
            sx={{ cursor: "pointer" }}
          >
            <Remove
              sx={{
                fontSize: "14px",
              }}
            />
          </Stack>

          {props.quantity}

          <Stack
            onClick={() => {
              const newAddCart = addCart.map((element) => {
                if (element.productId == props.productId) {
                  element.quantity += 1;
                  return element;
                } else {
                  return element;
                }
              });
              setAddCart(newAddCart);
            }}
            sx={{ cursor: "pointer" }}
          >
            <Add
              sx={{
                fontSize: "14px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"self-end"}>
        <Typography color={"#151875"} fontSize={14} fontWeight={700}>
          {numberFormatter.format(props.quantity * props.price) + "₮"}
        </Typography>
      </Stack>
    </Stack>
  );
};
