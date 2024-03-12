import { Footer } from "@/components/Footer";
import { CategoryBar } from "@/components/header/Category-Bar";
import SignupForm from "@/app/signup/_components/SignupForm";
import { Container } from "@/constants/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Footer />
      <CategoryBar />
    </div>
  );
}
