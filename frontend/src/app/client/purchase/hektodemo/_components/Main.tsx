"use client";
// to do: contact information ii inputiin design iig uurchiluh
// mapalj baraanuudaa uruh
import { Container, Stack } from "@mui/material";
import { ContactInfo } from "./ContactInfo";
import { ProductList } from "./ProductList";
import { OrderPrice } from "./OrderPrice";

const Main = () => {
  return (
    <Stack bgcolor={"#fff"}>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"} width={"100%"} py={10} gap={3}>
          <ContactInfo />
          <Stack width={"35%"} gap={4}>
            <ProductList />
            <OrderPrice price="750’000₮" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Main;
