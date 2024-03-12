<<<<<<< HEAD
import { CustomInput } from "@/components";
import { Stack, Typography } from "@mui/material";
=======
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
>>>>>>> 8b3d34e (custominput)

export const CardFormStep2 = () => {
  return (
    <Stack maxWidth={"452px"} width={"100%"} direction={"row"} p={2}>
      <Stack>
        <Typography fontSize={32} fontWeight={700}>
          Бүс нутгийн мэдээлэл
        </Typography>
        <CustomInput label="qwerty" type="text" placeHolder="q" select={true} />
      </Stack>
    </Stack>
  );
};
