import { CustomInput } from "@/components";
import { MenuItem, Stack, Typography } from "@mui/material";

const arr = [
  { select: "1" },
  { select: "2" },
  { select: "3" },
  { select: "4" },
  { select: "5" },
];

export const CardFormStep2 = () => {
  return (
    <Stack maxWidth={"452px"} width={"100%"} direction={"row"} p={3}>
      <Stack gap={2} width={"100%"}>
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
    </Stack>
  );
};
