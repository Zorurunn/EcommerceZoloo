"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export const SignUpForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Stack padding={3} maxWidth={"400px"} width={"100%"}>
      <Stack gap={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Бүртгүүлэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          label="Нэр"
          placeHolder="Нэр оруулна уу"
          name="name"
          type="text"
        />
        <CustomInput
          label="Имэйл"
          name="email"
          placeHolder="Имэйл оруулна уу"
          type="text"
        />
        <CustomInput
          label="Утасны дугаар"
          name="email"
          placeHolder="Имэйл оруулна уу"
          type="text"
        />
        <CustomInput
          label="Имэйл"
          name="email"
          placeHolder="Имэйл оруулна уу"
          type="text"
        />
        <Stack
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
        >
          <Button
            fullWidth
            sx={{
              position: "relative",
              py: "14.5px",
              background: "#121316",
              color: "white",
            }}
          >
            дарааx
            <EastIcon sx={{ position: "absolute", right: "10%" }} />
          </Button>
        </Stack>
        <Stack width={"100%"} pt={2} gap={2}>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Google Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Google-ээр нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Microsoft Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Microsoft-оор нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Apple Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Apple-аар нэвтрэх
            </Typography>
          </Button>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлтэй юу?</Typography>
          <Link href={"/signin"}>
            <Typography borderBottom={1}>Нэвтрэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
