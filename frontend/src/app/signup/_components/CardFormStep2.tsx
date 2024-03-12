import { CustomInput } from "@/components";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const arr = [
  { select: "1" },
  { select: "2" },
  { select: "3" },
  { select: "4" },
  { select: "5" },
];

export const CardFormStep2 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Stack maxWidth={"452px"} width={"100%"} p={3}>
      <Stack gap={3} width={"100%"}>
        <Typography fontSize={32} fontWeight={700}>
          Бүс нутгийн мэдээлэл
        </Typography>
        <CustomInput
          label="Хот/Аймаг"
          type="text"
          placeHolder="Сонгох"
          select={true}
        >
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item.select}>
              {item.select}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          label="Сум/Дүүрэг"
          type="text"
          placeHolder="Сонгох"
          select={true}
        >
          {" "}
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item.select}>
              {item.select}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          label="Хороо"
          type="text"
          placeHolder="Сонгох"
          select={true}
        >
          {" "}
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item.select}>
              {item.select}
            </MenuItem>
          ))}
        </CustomInput>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          pt: "40px",
        }}
      >
        <Stack
          onClick={() => {
            setStep((prev) => prev - 1);
          }}
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "#1C20240A",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon fontSize="medium" sx={{ color: "text.primary" }} />
        </Stack>
        <Button
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
          variant="contained"
          sx={{
            width: "127px",
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#D6D8DB",
            textTransform: "none",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              color: "text.secondary",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <Typography>Дараах</Typography>
            <ArrowForwardIcon
              fontSize="medium"
              sx={{ color: "text.secondary" }}
            />
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};
