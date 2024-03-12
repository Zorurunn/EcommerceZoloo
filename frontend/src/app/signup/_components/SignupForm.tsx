"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction } from "react";

export default function SignUpForm({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
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
          label="Имэйл"
          name="email"
          placeholder="Имэйл"
          type="text
          "
        />
        <CustomInput
          label="Нэр"
          placeholder="Нэр"
          name="username"
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
            }}
          >
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
            }}
          >
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
            }}
          >
            <Typography fontSize={12} fontWeight={200}>
              Apple-аар нэвтрэх
            </Typography>
          </Button>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлтэй юу?</Typography>
          <Link href={"/signin"}>
            <Typography>Нэвтрэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
