"use client";

import { Container, Stack, Typography } from "@mui/material";

export const Head = () => {
  return (
    <Stack bgcolor={"#F6F5FF"}>
      <Container maxWidth={"xl"}>
        <Stack
          height={"100px"}
          direction={"row"}
          width={"100%"}
          alignItems={"center"}
          gap={1}
        >
          <Typography fontSize={16} fontWeight={500} color="#000000">
            Home .
          </Typography>
          <Typography fontSize={16} fontWeight={500} color="#FB2E86">
            Shop Left Sidebar
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};
