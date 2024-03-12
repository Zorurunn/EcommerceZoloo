"use client";
import { BlackHeader } from "@/components/header/BlackHeader";
import { sideBarLines } from "@/constants";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedOption, setSelectedOption] =
    useState<string>("Хяналтын самбар");
  return (
    <Stack>
      <BlackHeader />

      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          gap={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 5fr",
            backgroundColor: "#ECEDF0",
          }}
        >
          <Stack paddingTop={3} sx={{ backgroundColor: "#fff" }}>
            <Stack gap={3}>
              {sideBarLines.map((item) => (
                <Button
                  sx={{
                    ":hover": { backgroundColor: "none" },
                    textTransform: "none",
                    justifyContent: "start",
                    color: "text.primary",
                    backgroundColor:
                      selectedOption === item.name ? "#D6D8DB" : null,
                    borderRadius: 0,
                  }}
                  onClick={() => {
                    setSelectedOption(item.name);
                  }}
                >
                  <Stack key={item.name} direction={"row"} gap={1}>
                    <item.icon className="w-8 h-8" />
                    <Typography>{item.name}</Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Stack>
          <Stack paddingTop={3}>{children}</Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
