"use client";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const MoreDetial = () => {
  return (
    <Stack width={"100%"} bgcolor={"#F9F8FE"}>
      <Container maxWidth={"lg"}>
        <Stack width={"100%"} flexGrow={1} border={1} gap={4} direction={"row"}>
          <Stack border={1}></Stack>
          <Stack>
            <Stack border={1}>
              <Typography>sofa</Typography>
              <Typography>750000</Typography>
              <Stack></Stack>
              <Typography>
                dlfwjbknlm,l Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Voluptatum obcaecati magni inventore veniam amet natus
                cumque quas quo facilis repellat ipsum alias, pariatur
                voluptatibus ullam voluptatem atque sunt est consectetur!
              </Typography>
            </Stack>
            <Stack color={"#151875"} fontSize={16} fontWeight={800}>
              <Typography>add To Cart</Typography>
              <FavoriteBorderOutlined />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
