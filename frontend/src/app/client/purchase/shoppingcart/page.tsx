"use client";
import { Container, Stack } from "@mui/material";
import { Head } from "../_components/Head";
import { Title } from "./_components/Title";
import { Cart } from "./_components/Cart";
import { PaymnetCard } from "./_components/PaymentCard";

const ShoppingCart = () => {
  return (
    <Stack bgcolor={"#fff"}>
      <Head />
      <Container maxWidth={"lg"}>
        <Stack width={"100%"} direction={"row"} gap={5} py={"100px"}>
          <Stack width="70%">
            <Title />
            <Cart />
          </Stack>
          <Stack width={"30%"}>
            <PaymnetCard price="750’000₮" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ShoppingCart;
