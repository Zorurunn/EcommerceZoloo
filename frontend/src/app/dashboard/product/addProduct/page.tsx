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
import UploadImg from "../_components/UploadImg";
import { useData } from "@/components/provider/DataProvider";

const validationSchema = yup.object({
  productName: yup.string().required(),
  generalCategory: yup.string().required(),
  subCategory: yup.string().required(),
  serialNumber: yup.number().required(),
  price: yup.number().required(),
  remainQty: yup.number().required(),
  images: yup.array().required(),
  description: yup.string().required(),
  productType: yup.array().required(),
  productTag: yup.string().required(),
});

export default function Home() {
  const [images, setImages] = useState<string[]>(["", "", ""]);
  const checkImages = () => {
    if (images.length === 1) {
      if (images[0] === "") return false;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // formik.values.imgUrls = images;
  }, [images]);
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const formik = useFormik({
    initialValues: {
      productName: "",
      generalCategory: "defaultValue",
      subCategory: "defaultValue",
      serialNumber: 0,
      price: 0,
      remainQty: 0,
      images: [""],
      description: "",
      productType: {
        productColor: "",
        productSize: "",
      },
      productTag: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createProduct({
        productName: values.productName,
        generalCategory: values.generalCategory,
        subCategory: values.subCategory,
        serialNumber: values.serialNumber,
        price: values.price,
        remainQty: values.remainQty,
        images: values.images,
        description: values.description,
        productType: {
          productColor: colors,
          productSize: sizes,
        },
        tag: values.tag,
      });
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack gap={3} width={"100%"}>
      <BackTabs text="Бүтээгдэхүүн" />
      <Stack direction={"row"} gap={5}>
        <Stack gap={2} width={"50%"}>
          <ProductNameSection
            productName={"productName"}
            serialNumberName={"serialNumber"}
            descriptionName={"description"}
            productValue={formik.values.productName}
            descriptionValue={formik.values.description}
            serialNumberValue={formik.values.serialNumber}
            productError={
              formik.touched.productName && Boolean(formik.errors.productName)
            }
            descriptionError={
              formik.touched.description && Boolean(formik.errors.description)
            }
            serialNumberError={
              formik.touched.serialNumber && Boolean(formik.errors.serialNumber)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <ProductImageSection images={images} setImages={setImages} />
          <ProductTotalPrice
            priceName={"price"}
            remainQtyName={"remainQty"}
            priceValue={formik.values.price}
            remainQtyValue={formik.values.remainQty}
            priceError={formik.touched.price && Boolean(formik.errors.price)}
            remainQtyError={
              formik.touched.remainQty && Boolean(formik.errors.remainQty)
            }
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
          <ProductType
            // productTypeName={"productType"}
            // productTypeValue={formik.values.productType}
            // productTypeError={
            //   formik.touched.productType && Boolean(formik.errors.productType)
            // }
            colors={colors}
            setColors={setColors}
            sizes={sizes}
            setSizes={setSizes}
          />
          <ProductTag
            productTagName={"productTag"}
            productTageValue={formik.values.productTag}
            productTagError={
              formik.touched.productTag && Boolean(formik.values.productTag)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
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
                ":disabled": { color: "gray" },
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
                formik.handleSubmit();
                setOpen(true);
              }}
              disabled={!formik.isValid || !formik.dirty}
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
