"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../../components";
import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

export function CardFormStep1({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const validationSchema = yup.object({
    storeName: yup.string().required("Нэрээ оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      storeName: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // await signup({
      //   email: values.email,
      //   name: values.name,
      //   password: values.password,
      //   address: values.address,
      // });
      console.log(formik.values);
    },
  });
  return (
    <Stack width={452} p={3} gap={3}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "700",
          color: "text.primary",
        }}
      >
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Stack
        sx={{
          gap: "16px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            gap: "8px",
          }}
        >
          <CustomInput
            name="storeName"
            label=" Танай дэлгүүрийн нэр юу вэ?"
            placeHolder="Дэлгүүрийн нэр"
            type="text"
            handleChange={formik.handleChange}
            value={formik.values.storeName}
            error={formik.touched.storeName && Boolean(formik.errors.storeName)}
            helperText={String(formik.errors.storeName)}
            onBlur={formik.handleBlur}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            pt: "40px",
          }}
        >
          <Stack
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#1C20240A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon fontSize="medium" sx={{ color: "text.primary" }} />
          </Stack>
          <Button
            sx={{
              width: "127px",
              height: "48px",
              borderRadius: "8px",
              background: "#121316",
              color: "white",
              "&:hover": {
                backgroundColor: "#393939",
                color: "common.white",
              },
              gap: "8px",
            }}
            variant="contained"
            fullWidth
            disabled={!formik.isValid}
            onClick={() => {
              setStep((prev) => prev + 1);
              formik.handleSubmit();
            }}
          >
            Дараах
            <ArrowForwardIcon
              fontSize="medium"
              sx={{ color: "common.white" }}
            />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
