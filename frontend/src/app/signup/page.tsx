"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CardFormStep2 } from "./_components/CardFormStep2";
import { CardFormStep3 } from "./_components/CardFormStep3";
import { CardFormStep1 } from "./_components/CardFormStep1";
import { SignUpForm } from "./_components/SignUpForm";
import ProgressStep from "./_components/ProgressStep";
import { useAuth } from "@/components/provider/AuthProvider";

export default function SignUp() {
  const { step, setStep } = useAuth();

  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
      paddingY={2}
      width={"100vw"}
    >
      <Stack position={"relative"} px={"6%"} py={"2%"} alignSelf={"flex-start"}>
        <Image src="/Pinecone Logo.svg" alt="" fill />
      </Stack>
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {step === 1 && <SignUpForm setStep={setStep} />}
        {step === 2 && (
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            gap={25}
            mt={5}
          >
            <ProgressStep step={step} />
            <CardFormStep1 setStep={setStep} />
          </Stack>
        )}
        {step === 3 && (
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            gap={25}
            mt={5}
          >
            <ProgressStep step={step} />
            <CardFormStep2 setStep={setStep} />
          </Stack>
        )}
        {step === 4 && (
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            gap={25}
            mt={5}
          >
            <ProgressStep step={step} />
            <CardFormStep3 setStep={setStep} step={step} />
          </Stack>
        )}
      </Stack>
      <Stack marginTop={8}>
        <Typography color={"#94A3B1"}>© 2023 Pinecone</Typography>
      </Stack>
    </Stack>
  );
}
