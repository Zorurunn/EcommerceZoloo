import { Stack, Typography } from "@mui/material";
import SignInForm from "./_components/SignInForm";
import Image from "next/image";

export default function SignIn() {
  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
      paddingY={2}
    >
      <Stack position={"relative"} px={"6%"} py={"2%"} alignSelf={"flex-start"}>
        <Image src="/Pinecone Logo.svg" alt="" fill />
      </Stack>
      <SignInForm />
      <Stack marginTop={8}>
        <Typography color={"#94A3B1"}>© 2023 Pinecone</Typography>
      </Stack>
    </Stack>
  );
}
