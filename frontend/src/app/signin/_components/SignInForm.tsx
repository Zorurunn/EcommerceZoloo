"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction } from "react";

export default function SignInForm() {
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
          Нэвтрэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          label="Имэйл"
          name="email"
          placeholder="Имэйл оруулна уу"
          type="text
          "
        />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг оруулна уу"
          name=""
          type="password"
        />
        <Stack>
          <Button
            fullWidth
            sx={{
              py: "14.5px",
              background: "#121316",
              color: "white",
            }}
          >
            Нэвтрэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
