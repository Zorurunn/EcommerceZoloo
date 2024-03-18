import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function Home() {
  return (
    <Stack py={4} px={3} gap={2} maxWidth={730} width={"100%"}>
      <Typography fontSize={18} fontWeight={600}>
        Дэлгүүрийн профайл үүсгэх
      </Typography>
      <Stack gap={1}>
        <Stack justifyContent={"space-between"} p={2}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <CheckIcon />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
        <Stack justifyContent={"space-between"} p={2}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <CheckIcon />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
        <Stack justifyContent={"space-between"} p={2}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <RadioButtonUncheckedIcon />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
