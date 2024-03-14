"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AddIcon from "@mui/icons-material/Add";

// test

export default function ProductImageSection() {
  return (
    <Stack
      width={"90%"}
      py={4}
      pr={2}
      pl={4}
      borderRadius={"12px"}
      bgcolor={"#FFFFFF"}
      gap={4}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: "#000000",
          lineHeight: "24px",
        }}
      >
        Бүтээгдэхүүний зураг
      </Typography>

      <Stack position={"relative"}>
        <Stack direction={"row"} overflow={"scroll"} width={"80%"}>
          <Stack direction={"row"} gap={2}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
            </Stack>
          </Stack>
        </Stack>
        {/* <Stack
          position={"absolute"}
          top={0}
          right={0}
          alignItems={"center"}
          justifyContent={"center"}
          width={125}
          height={125}
        >
          <Stack borderRadius={"50%"} padding={0.5} bgcolor={"#ECEDF0"}>
            <AddIcon />
          </Stack>
        </Stack> */}
        <Stack
          position={"absolute"}
          top={0}
          right={0}
          alignItems={"center"}
          justifyContent={"center"}
          width={125}
          height={125}
        >
          <IconButton size="small" aria-label="adds">
            <Stack borderRadius={"50%"} padding={1} bgcolor={"#ECEDF0"}>
              <AddIcon />
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
