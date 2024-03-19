"use client";

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { number } from "yup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { useEffect, useState } from "react";

const statusMap = {
  delivered: {
    backgroundColor: "#C1E6CF",
    color: "#0A4E22",
    title: "Хүргэгдсэн",
  },
  neworder: {
    backgroundColor: "#FFFFFF",
    color: "text.secondary",
    title: "Шинэ захиалга",
  },
  ondelivery: {
    backgroundColor: "#B7DDFF",
    color: "#1890FF",
    title: "Хүргэлтэнд гарсан",
  },
  inprogress: {
    backgroundColor: "#ECEDF0",
    color: "text.secondary",
    title: "Бэлтгэгдэж байна",
  },
};

type OrderDetailsType = {
  orderID: string | number;
  name: string;
  user: string;
  date: number;
  time: number;
  price: number;
  s: string;
};
type IndexType = {
  index: number;
};

export const OrderDetails = (props: OrderDetailsType & IndexType) => {
  console.log(props);

  const { orderID, user, date, price, time, name, s } = props;

  const [status, setStatus] = useState<keyof typeof statusMap>("delivered");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as keyof typeof statusMap);
  };

  return (
    <Stack
      direction={"row"}
      height={72}
      justifyContent={"center"}
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 5fr 3fr 3fr 3fr 5fr 4fr",
        gap: 1,
        borderBottom: 1,
        borderColor: "divider",
        fontSize: "14px",
        fontWeight: "400",
        color: "text.primary",
      }}
    >
      <Stack justifyContent={"center"} px={3}>
        {orderID}
      </Stack>
      <Stack justifyContent={"center"} height={"100%"}>
        <Typography fontSize={14} fontWeight={600}>
          {name}
        </Typography>
        <Typography fontSize={14} fontWeight={400} color={"text.secondary"}>
          {user}
        </Typography>
      </Stack>
      <Stack justifyContent={"center"}>{date}</Stack>
      <Stack justifyContent={"center"}>{time}</Stack>
      <Stack justifyContent={"center"}>
        {new Intl.NumberFormat().format(price) + "₮"}
      </Stack>
      <Stack justifyContent={"center"} width={"fit-content"}>
        <Select
          value={s}
          onChange={handleChange}
          sx={{
            borderRadius: "50px",
            backgroundColor:
              statusMap[s as keyof typeof statusMap].backgroundColor,
            color: statusMap[s as keyof typeof statusMap].color,
            height: "32px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {Object.keys(statusMap).map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {statusMap[item as keyof typeof statusMap].title}
              </MenuItem>
            );
          })}
        </Select>
      </Stack>

      <Stack justifyContent={"center"} alignItems={"center"}>
        <Link href={"./"}>
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{ color: "text.secondary" }}
          />
        </Link>
      </Stack>
    </Stack>
  );
};
