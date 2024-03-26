"use client";

import { Stack } from "@mui/material";
import { ProductForm } from "./ProductForm";

const data = [
  {
    name: "Үүргэвч",
    color: "Саарал",
    image: "",
    price: "750’000₮",
  },

  {
    name: "Электрон цаг",
    color: "Brown",
    image: "",
    price: "750’000₮",
  },
  {
    name: "Арьсан оосортой цаг",
    color: "Бор",
    image: "",
    price: "750’000₮",
  },
  {
    name: "Подолк",
    color: "Саарал",
    image: "",
    price: "750’000₮",
  },
  {
    name: "Загварлаг цаг",
    color: "Бор",
    image: "",
    price: "750’000₮",
  },
];

export const ProductList = () => {
  return (
    <Stack width={"100%"} gap={3}>
      {data.map(({ name, image, color, price }, index) => {
        return (
          <ProductForm
            key={index}
            name={name}
            color={color}
            image={image}
            price={price}
          />
        );
      })}
    </Stack>
  );
};
