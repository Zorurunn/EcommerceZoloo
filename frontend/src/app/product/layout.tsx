"use client";
import { LeftSideBar } from "@/components/LeftSideBar";
import { BlackHeader } from "@/components/header/BlackHeader";
import { Stack } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack>
      <BlackHeader />

      <Stack>
        <Stack
          direction={"row"}
          gap={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 5fr",
            backgroundColor: "#ECEDF0",
          }}
        >
          <Stack
            paddingTop={3}
            sx={{ backgroundColor: "#fff" }}
            height={"100vh"}
          >
            <LeftSideBar />
          </Stack>
          <Stack paddingTop={3}>{children}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
