import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { OrderDetails } from "./OrderDetails";
import { TableHead } from "./TableHead";
import { ORDERINGS } from "@/constants";

export const OrderInfo = () => {
  return (
    <Stack
      width={"100%"}
      height={600}
      borderRadius={3}
      sx={{ backgroundColor: "#fff", border: " 1px solid #ECEDF0" }}
    >
      <Stack height={"72px"} justifyContent={"center"} px={3}>
        <Typography fontSize={20} fontWeight={700}>
          Захиалга
        </Typography>
      </Stack>
      <Stack flexGrow={1}>
        <TableHead />
        <Stack gap={2} flexGrow={1} overflow={"scroll"}>
          <Stack width={"100%"} height={"100%"}>
            {ORDERINGS.map((item, orderID) => {
              return (
                <Stack key={item.orderID + orderID}>
                  <OrderDetails {...item} index={orderID + 1} />
                  <Divider />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
