"use client";

import { Container, Stack, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";
import Image from "next/image";

export const BlackHeader = () => {
  return (
    <>
      <Stack bgcolor={"#121316"}>
        <Stack px={4}>
          <Stack
            direction={"row"}
            gap={16}
            alignItems={"center"}
            width={"100%"}
            // px={"24px"}
            py={"8px"}
            justifyContent={"space-between"}
          >
            <Image src="/Logo.png" alt="" width={24} height={20.54} />

            <Stack direction={"row"} gap={"16px"} justifyContent={"center"}>
              <Link href={"./"}>
                <NotificationsNoneIcon
                  fontSize="small"
                  sx={{ color: "#fff" }}
                ></NotificationsNoneIcon>
              </Link>
              <Link href={"./"}>
                <Stack direction={"row"} gap={"16px"} justifyContent={"center"}>
                  <PermIdentityIcon
                    fontSize="small"
                    sx={{ color: "#fff" }}
                  ></PermIdentityIcon>
                  <Typography fontSize={14} fontWeight={400} color={"#fff"}>
                    Username
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
