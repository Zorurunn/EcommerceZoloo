"use client";

import { useAuth } from "@/components/provider/AuthProvider";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ResetFormStep1 } from "./_components/ResetFormStep1";
import { ResetFormStep2 } from "./_components/ResetFormStep2";
import { ResetFormStep3 } from "./_components/ResetFormStep3";
import { useState } from "react";

export default function ResetPassword() {
  const { index, setIndex } = useAuth();

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
      {index === 0 && <ResetFormStep1 />}
      {index === 1 && <ResetFormStep2 setIndex={setIndex} />}
      {index === 2 && <ResetFormStep3 index={index} setIndex={setIndex} />}
      <Stack marginTop={8}>
        <Typography color={"#94A3B1"}>© 2023 Pinecone</Typography>
      </Stack>
    </Stack>
  );
}
