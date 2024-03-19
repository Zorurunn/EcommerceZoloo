"use client";
import { Container } from "@mui/material";
import { Head } from "./_components/Head";
import { Mainpage } from "./_components/Mainpage";
export default function Home() {
  return (
    <Container maxWidth={"xl"}>
      <Head />
      <Mainpage />
    </Container>
  );
}
