"use client";
import { Button, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { CustomInput } from "@/components";

export const Filter = () => {
  return (
    <Stack
      width={"100%"}
      py={"34px"}
      direction={"row"}
      justifyContent="space-between"
    >
      <Stack direction={"row"} gap={2}>
        <Button
          sx={{
            borderRadius: "8px",
            bgcolor: "#18BA51",
            color: "#ECEDF0",
            gap: "4px",
            padding: "8px, 12px, 8px, 12px",
          }}
        >
          <Typography>Өнөөдөр</Typography>
        </Button>
        <Button
          sx={{
            borderRadius: "8px",
            bgcolor: "#FFFFFF",
            color: "#121316",
            border: "1px solid #ECEDF0",
            padding: "8px, 12px, 8px, 12px",
          }}
        >
          <Typography>7 хоног</Typography>
        </Button>
        <Button
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            color: "#121316",
            border: "1px solid #ECEDF0",
            gap: "4px",
            display: "flex",
            alignItems: "center",
            padding: "8px, 12px, 8px, 12px",
          }}
        >
          <CalendarTodayOutlinedIcon />
          <Typography>Сараар</Typography>
        </Button>
      </Stack>
      <Stack width={"302px"} direction={"row"} justifyContent={"center"}>
        <CustomInput
          borderRadius="8px"
          // to do: widthee yanzlah
          adornment="start"
          placeHolder="Дугаар, Имэйл"
          size="medium"
          bgcolor="#fff"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "text.secondary",
          }}
          type="text"
        />
      </Stack>
    </Stack>
  );
};
