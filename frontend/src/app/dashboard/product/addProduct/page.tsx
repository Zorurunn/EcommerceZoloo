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
import { info } from "console";

const validationSchema = yup.object({
  generalCategory: yup.string().required(),
  subCategory: yup.string().required(),
  price: yup.number().required(),
  total: yup.number().required(),
  product: yup.string().required(),
  info: yup.string().required(),
  serialNumber: yup.number().required(),
});

export default function Home() {
  const formik = useFormik({
    initialValues: {
      generalCategory: "defaultValue",
      subCategory: "defaultValue",
      price: "defaultValue",
      total: "defaultValue",
      product: "",
      info: "",
      serialNumber: "#",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // BAck holbolt todo
    },
  });
  return (
    <Stack direction={"row"} gap={5} width={"100%"}>
      <Stack gap={2} width={"50%"}>
        <ProductNameSection
          productName={"product"}
          serialNumberName={"serialNumber"}
          infoName={"info"}
          productValue={formik.values.product}
          infoValue={formik.values.info}
          serialNumberValue={formik.values.serialNumber}
          productError={
            formik.touched.product && Boolean(formik.errors.product)
          }
          infoError={formik.touched.info && Boolean(formik.errors.info)}
          serialNumberError={
            formik.touched.serialNumber && Boolean(formik.errors.serialNumber)
          }
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <ProductImageSection />
        <ProductTotalPrice
          priceName={"price"}
          totalName={"total"}
          priceValue={formik.values.price}
          totalValue={formik.values.total}
          priceError={formik.touched.price && Boolean(formik.errors.price)}
          totalError={formik.touched.total && Boolean(formik.errors.total)}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </Stack>
      <Stack gap={2} width={"50%"}>
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
