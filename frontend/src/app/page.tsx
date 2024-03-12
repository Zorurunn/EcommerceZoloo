import { Footer } from "@/components/Footer";
import { CategoryBar } from "@/components/header/Category-Bar";
import Navbar from "@/components/header/Navbar";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { CardFormStep2 } from "./signup/_components/CardFormStep2";

export default function Home() {
  return (
    <Stack>
      <Navbar />
      <Container maxWidth="xl">
        <CategoryBar />
        <CardFormStep2 />
      </Container>
      <Footer />
    </Stack>
  );
}
