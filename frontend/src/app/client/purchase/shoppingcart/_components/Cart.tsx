"use client";

import { Button, Stack, Typography } from "@mui/material";
import { CartComponents } from "./CartComponents";

const data = [
  {
    name: "Электрон цаг",
    image: "/bindek/Rectangle34.png",
    color: "Мөнгөлөг",
    price: "750’000₮",
    total: "750’000₮",
    amount: "1",
  },
  {
    name: "Электрон цаг",
    image: "/bindek/Rectangle35.png",
    color: "Хар",
    price: "750’000₮",
    total: "750’000₮",
    amount: "1",
  },
  {
    name: "Электрон цаг",
    image: "/bindek/Rectangle36.png",
    color: "Улаан",
    price: "750’000₮",
    total: "750’000₮",
    amount: "1",
  },
  {
    name: "Электрон цаг",
    image: "/bindek/Rectangle37.png",
    color: "Саарал",
    price: "750’000₮",
    total: "750’000₮",
    amount: "1",
  },
  {
    name: "Электрон цаг",
    image: "/bindek/Rectangle38.png",
    color: "Хар саарал",
    price: "750’000₮",
    total: "750’000₮",
    amount: "1",
  },
];
export const Cart = () => {
  return (
    <Stack width={"100%"} paddingTop={"50px"} gap={5}>
      <Stack width={"100%"} gap={2}>
        {data.map(({ name, image, color, price, total, amount }, index) => {
          return (
            <CartComponents
              key={index}
              name={name}
              image={image}
              color={color}
              price={price}
              total={total}
              amount={amount}
            />
          );
        })}
      </Stack>
      <Stack width={"100%"} alignItems={"self-end"}>
        <Button
          fullWidth
          sx={{
            width: "173px",
            fontSize: "16px",
            fontWeight: "800",
            color: "#fff",
            backgroundColor: "#FB2E86",
          }}
        >
          Карт цэвэрлэх
        </Button>
      </Stack>
    </Stack>
  );
};
