import { BlackHeader } from "@/components/header/BlackHeader";
import { Container, Stack } from "@mui/material";
import { SideBarDashboard } from "./_components/SideBarDashboard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack>
      <BlackHeader />

      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          gap={2}
          sx={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}
          px={"24px"}
        >
          <Stack border={"1px solid red"}>
            <SideBarDashboard />
          </Stack>
          <Stack border={"1px solid red"}>{children}</Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
