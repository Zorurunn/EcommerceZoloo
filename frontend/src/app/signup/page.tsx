import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Signup() {
  return (
    <Stack
      height={"95vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
      paddingY={2}
    >
      <Stack position={"relative"} px={"6%"} py={"2%"} alignSelf={"flex-start"}>
        <Image src="/Pinecone Logo.svg" alt="" fill />
      </Stack>
      {/* signup components end orj irne */}
      <Stack>
        <Typography color={"#94A3B1"}>© 2023 Pinecone</Typography>
      </Stack>
    </Stack>
  );
}
