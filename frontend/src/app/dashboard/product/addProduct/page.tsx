"use client";
import { Button, Stack } from "@mui/material";
import ProductNameSection from "../_components/Product.Name.Section";
import ProductImageSection from "../_components/Product.Image.Section";
import { ProductTotalPrice } from "../_components/Product.Total.Price";
import ProductGeneralCategory from "../_components/Product.General.Category";
import { ProductType } from "../_components/Product.Type";
import { ProductTag } from "../_components/Product.Tag";
import { useFormik } from "formik";
import * as yup from "yup";
import { BackTabs } from "@/components/Back.Tabs";
import { useEffect, useState } from "react";
import { AlertModal } from "../_components/Alert.Modal";

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
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const [open, setOpen] = useState(false);
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
    <Stack gap={3} width={"100%"}>
      <BackTabs href="/dashboard/product" text="Бүтээгдэхүүн" />
      <Stack direction={"row"} gap={5}>
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
        <Stack gap={3} width={"50%"}>
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
          <Stack alignSelf={"end"} direction={"row"} gap={1}>
            <Button
              sx={{
                borderRadius: "8px",
                border: "1px solid #D6D8DB",
                fontSize: "18px",
                fontWeight: "600",
                color: "#121316",
                bgcolor: "#FFFFFF",
                px: "20px",
                py: "10px",
              }}
            >
              Ноорог
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#FFFFFF",
                bgcolor: "#121316",
                px: "20px",
                py: "10px",
                ":hover": { bgcolor: "#393939" },
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Нийтлэх
            </Button>
            {open && (
              <AlertModal
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
