import { Box, Button, Stack, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export const IncomeTable = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"#FFFFFF"}
      border={"1px solid #ECEDF0"}
      borderRadius={1.5}
    >
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #ECEDF0"}
        py={2.5}
        px={3}
      >
        <Typography fontSize={20} fontWeight={700} color={"#121316"}>
          Орлого
        </Typography>
        <Button
          sx={{
            borderRadius: "8px",
            bgcolor: "#1C20240A",
            color: "#121316",
            gap: "4px",
            display: "flex",
            alignItems: "center",
            padding: "8px, 12px, 8px, 12px",
          }}
        >
          <FileDownloadOutlinedIcon />
          <Typography>Хуулга татах</Typography>
        </Button>
      </Stack>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        py={2.5}
        px={3}
      >
        <Typography fontSize={20} fontWeight={700} color={"#121316"}>
          235,000₮
        </Typography>
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
              color: "#121316",
              border: "1px solid #ECEDF0",
              padding: "8px, 12px, 8px, 12px",
            }}
          >
            <Typography>7 хоног</Typography>
          </Button>
          <Button
            sx={{
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
      </Stack>
    </Stack>
  );
};
