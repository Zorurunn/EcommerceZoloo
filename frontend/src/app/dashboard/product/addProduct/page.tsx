import { Stack } from "@mui/material";
import ProductNameSection from "../_components/Product.Name.Section";
import ProductImageSection from "../_components/Product.Image.Section";
import { ProductTotalPrice } from "../_components/Product.Total.Price";
import ProductGeneralCategory from "../_components/Product.General.Category";
import { ProductType } from "../_components/Product.Type";
import { ProductTag } from "../_components/Product.Tag";

export default function Home() {
  return (
    <Stack direction={"row"}>
      <Stack gap={2}>
        <ProductNameSection />
        <ProductImageSection />
        <ProductTotalPrice />
      </Stack>
      <Stack gap={2}>
        <ProductGeneralCategory />
        <ProductType />
        <ProductTag />
      </Stack>
    </Stack>
  );
}
