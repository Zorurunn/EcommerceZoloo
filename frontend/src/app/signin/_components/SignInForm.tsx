"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import Image from "next/image";
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
          <Typography>Бүртгэлгүй юу?</Typography>
          <Link href={"/signup"}>
            <Typography borderBottom={1}>Бүртгүүлэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
