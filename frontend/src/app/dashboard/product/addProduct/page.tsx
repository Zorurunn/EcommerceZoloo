"use client";
import { Stack } from "@mui/material";
import ProductNameSection from "../_components/Product.Name.Section";
import ProductImageSection from "../_components/Product.Image.Section";
import { ProductTotalPrice } from "../_components/Product.Total.Price";
import ProductGeneralCategory from "../_components/Product.General.Category";
import { ProductType } from "../_components/Product.Type";
import { ProductTag } from "../_components/Product.Tag";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomInput } from "@/components";

const validationSchema = yup.object({
  generalCategory: yup.string().required(),
  subCategory: yup.string().required(),
  price: yup.number().required(),
});

export default function Home() {
  const formik = useFormik({
    initialValues: {
      generalCategory: "defaultValue",
      subCategory: "defaultValue",
      price: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // BAck holbolt todo
    },
  });
  return (
    <Stack direction={"row"}>
      <Stack gap={1}>
        <ProductNameSection />
        <ProductImageSection />
        <ProductTotalPrice
          priceName={"price"}
          priceValue={formik.values.price}
          priceError={formik.touched.price && Boolean(formik.errors.price)}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </Stack>
      <Stack gap={1}>
        <ProductGeneralCategory
          generalCategoryName={"generalCategory"}
          generalCategoryValue={formik.values.generalCategory}
          generalCategoryError={
            (formik.touched.generalCategory &&
              Boolean(formik.errors.generalCategory)) ||
            (formik.touched.generalCategory &&
              formik.values.generalCategory ==
                formik.initialValues.generalCategory)
          }
          subCategoryName={"subCategory"}
          subCategoryValue={formik.values.subCategory}
          subCategoryError={
            (formik.touched.subCategory &&
              Boolean(formik.errors.subCategory)) ||
            (formik.touched.subCategory &&
              formik.values.subCategory == formik.initialValues.subCategory)
          }
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <ProductType />
        <ProductTag />
      </Stack>
    </Stack>
  );
}
