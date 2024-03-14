"use client";

import EastIcon from "@mui/icons-material/East";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ResetFormStep1 = () => {
  const { sendEmail, setUserEmail } = useAuth();
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await sendEmail({ email: values.email });
      setUserEmail(values.email);
    },
  });

  return (
    <Stack
      maxWidth={"450px"}
      width={"100%"}
      padding={4}
      spacing={6}
      sx={{ justifyContent: "center", alignItems: " center" }}
    >
      <Typography fontSize={28} fontWeight={700}>
        Нууц үг сэргээх
      </Typography>

      <Stack gap={6} width={"100%"}>
        <CustomInput
          name="email"
          label="Имэйл "
          placeHolder="Имэйл хаягаа оруулна уу"
          type="text"
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={String(formik.errors.email)}
        />
        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            setOpen(false);
          }}
          disabled={!formik.isValid || open}
          variant="contained"
          sx={{
            justifyContent: "flex-end",
            py: "14.5px",
            background: "#121316",
            color: "white",
            gap: "8px",
            "&:hover": {
              backgroundColor: "#393939",
              color: "common.white",
            },
          }}
        >
          {open && <Stack className="btnLoader"></Stack>}
          <Typography mr={"28%"} fontSize={16} fontWeight={600}>
            Нэвтрэх
          </Typography>
          <ArrowForwardIcon fontSize="medium" />
        </Button>
      </Stack>
    </Stack>
  );
};
