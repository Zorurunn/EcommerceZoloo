import { CustomInput } from "@/components";
import { GENERAL_CATEGORIES, SUB_CATEGORIES } from "@/constants";
import { MenuItem, Stack, Typography } from "@mui/material";

const ProductGeneralCategory = () => {
  return (
    <Stack width={"90%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack gap={2}>
        <CustomInput
          label="Ерөнхий ангилал"
          type="select"
          placeHolder="Сонгох"
          value={GENERAL_CATEGORIES[0]}
          select={true}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          {GENERAL_CATEGORIES.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </CustomInput>
        <CustomInput
          label="Дэд ангилал"
          type="select"
          placeHolder="Сонгох"
          value={SUB_CATEGORIES[0]}
          select={true}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          {SUB_CATEGORIES.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </CustomInput>
      </Stack>
    </Stack>
  );
};

export default ProductGeneralCategory;
