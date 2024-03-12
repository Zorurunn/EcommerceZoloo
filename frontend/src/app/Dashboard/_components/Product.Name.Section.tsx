import { CustomInput } from "@/components";
import { Stack } from "@mui/material";

const ProductNameSection = () => {
  return (
    <Stack
      maxWidth={"563px"}
      padding={3}
      borderRadius={"12px"}
      bgcolor={"gray"}
    >
      <Stack gap={2}>
        <CustomInput
          label="Бүтээгдэхүүний нэр"
          type="text"
          placeHolder="Сонгох"
        />
        <CustomInput
          label="Нэмэлт мэдээлэл"
          type="text"
          size="small"
          multiLine={true}
          placeHolder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
        />
        <CustomInput label="Барааны код" type="text" placeHolder="#12345678" />
      </Stack>
    </Stack>
  );
};

export default ProductNameSection;
