"use client";
import { Stack, Typography } from "@mui/material";

export const OrderList = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"#FFFFFF"}
      border={"1px solid #ECEDF0"}
      borderRadius={1.5}
    >
      <Stack borderBottom={"1px solid #ECEDF0"} py={2.5} px={3}>
        <Stack direction={"row"}>
          <Stack width={"100%"} direction={"row"}>
            <Typography
              whiteSpace={"nowrap"}
              width={"25%"}
              fontSize={12}
              fontWeight={400}
              color={"#3F4145"}
            >
              Захиалгын ID дугаар
            </Typography>
            <Typography
              width={"40%"}
              fontSize={12}
              fontWeight={400}
              color={"#3F4145"}
            >
              Захиалагч
            </Typography>
            <Typography
              width={"25%"}
              fontSize={12}
              fontWeight={400}
              color={"#3F4145"}
            >
              Төлбөр
            </Typography>
            <Typography
              width={"15%"}
              fontSize={12}
              fontWeight={400}
              color={"#3F4145"}
            >
              Огноо
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack py={2.5} px={3}></Stack>
    </Stack>
  );
};
