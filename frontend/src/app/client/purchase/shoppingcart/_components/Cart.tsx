"use client";

import { Button, Stack, Typography } from "@mui/material";
import { CartComponents } from "./CartComponents";

const data = [
  {
    name: "Электрон цаг",
    image: "",
    color: "Мөнгөлөг",
    price: "750’000₮",
    total: "750’000₮",
  },
  {
    name: "Электрон цаг",
    image: "",
    color: "Хар",
    price: "750’000₮",
    total: "750’000₮",
  },
  {
    name: "Электрон цаг",
    image: "",
    color: "Улаан",
    price: "750’000₮",
    total: "750’000₮",
  },
  {
    name: "Электрон цаг",
    image: "",
    color: "Саарал",
    price: "750’000₮",
    total: "750’000₮",
  },
  {
    name: "Электрон цаг",
    image: "",
    color: "Хар саарал",
    price: "750’000₮",
    total: "750’000₮",
  },
];
export const Cart = () => {
  return (
    <Stack width={"100%"} paddingTop={"50px"} gap={5}>
      <Stack width={"100%"} gap={2}>
        {data.map(({ name, image, color, price, total }, index) => {
          return (
            <CartComponents
              key={index}
              name={name}
              image={image}
              color={color}
              price={price}
              total={total}
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
