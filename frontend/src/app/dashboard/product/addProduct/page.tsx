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
import { useData } from "@/components/provider/DataProvider";

const validationSchema = yup.object({
  productName: yup.string().required(),
  generalCategory: yup.string().required(),
  subCategory: yup.string().required(),
  serialNumber: yup.string().required(),
  price: yup.number().required(),
  remainQty: yup.number().required(),
  discount: yup.number().required(),
  description: yup.string().required(),
});

export default function Home() {
  console.log("A");

  const { createProduct } = useData();
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState();
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const checkImages = () => {
    if (images.length === 1) {
      if (images[0] === "") return false;
    }
  };
  useEffect(() => {}, [images]);
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      serialNumber: "",
      price: 0,
      discount: 0,
      remainQty: 0,
      generalCategoryId: "",
      subCategoryId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createProduct({
        productName: values.productName,
        description: values.description,
        serialNumber: "aad333",
        // serialNumber: values.serialNumber,
        price: values.price,
        discount: values.discount,
        remainQty: values.remainQty,
        generalCategoryId: values.generalCategoryId,
        subCategoryId: values.subCategoryId,
        images: images,
        productType: {
          productColor: colors,
          productSize: sizes,
        },
        productTag: selected,
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
      <Stack
        onClick={async () => {
          await createProduct({
            productName: "Zoloo boot",
            description: "very nice boot",
            serialNumber: "11223344",
            price: 230000,
            discount: 0,
            remainQty: 30,
            generalCategoryId: "65f7bebbb68ed01626961270",
            subCategoryId: "6603999e947b9df45618ce29",
            images: ["1", "2"],
            productType: {
              productColor: ["#fff", "aaa"],
              productSize: ["s", "x"],
            },
            productTag: ["nice", "boot"],
          });
        }}
      >
        oook
      </Stack>
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
            discountName={"discount"}
            remainQtyName={"remainQty"}
            priceValue={formik.values.price}
            discountValue={formik.values.discount}
            remainQtyValue={formik.values.remainQty}
            priceError={formik.touched.price && Boolean(formik.errors.price)}
            discountError={
              formik.touched.price && Boolean(formik.errors.discount)
            }
            remainQtyError={
              formik.touched.remainQty && Boolean(formik.errors.remainQty)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </Stack>
        <Stack gap={3} width={"50%"}>
          <ProductGeneralCategory
            generalCategoryName={"generalCategoryId"}
            generalCategoryValue={formik.values.generalCategoryId}
            generalCategoryError={
              (formik.touched.generalCategoryId &&
                Boolean(formik.errors.generalCategoryId)) ||
              (formik.touched.generalCategoryId &&
                formik.values.generalCategoryId ==
                  formik.initialValues.generalCategoryId)
            }
            subCategoryName={"subCategoryId"}
            subCategoryValue={formik.values.subCategoryId}
            subCategoryError={
              (formik.touched.subCategoryId &&
                Boolean(formik.errors.subCategoryId)) ||
              (formik.touched.subCategoryId &&
                formik.values.subCategoryId ==
                  formik.initialValues.subCategoryId)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <ProductType
            colors={colors}
            setColors={setColors}
            sizes={sizes}
            setSizes={setSizes}
          />
          <ProductTag selected={selected} setSelected={setSelected} />
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

                // setOpen(true);
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
