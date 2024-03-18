"use client";

import EastIcon from "@mui/icons-material/East";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const ResetFormStep3 = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const { checkResetOtb, userEmail, userOtb } = useAuth();

  const validationSchema = yup.object({
    password: yup.string().required(""),
    rePassword: yup
      .string()
      .required("")
      .oneOf([yup.ref("password")]),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkResetOtb({
        email: userEmail,
        code: userOtb,
        password: values.password,
      });
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
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={6} width={"100%"}>
        <Stack>
          <CustomInput
            name="password"
            handleChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.password)}
            label="Нууц үг "
            placeHolder="Нууц үгээ оруулна уу"
            type="password"
          />

          <CustomInput
            name="rePassword"
            handleChange={formik.handleChange}
            value={formik.values.rePassword}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.rePassword)}
            label="Нууц үг давтах "
            placeHolder="Нууц үгээ оруулна уу"
            type="password"
          />
        </Stack>

        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            setIndex((prev) => prev + 1);
            if (index === 2) {
              router.push("/singin");
              setIndex(0);
            }
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
          variant="contained"
          sx={{
            position: "relative",
            py: "14.5px",
            background: "#121316",
            color: "white",
            "&:hover": {
              backgroundColor: "#393939",
            },
          }}
        >
          дарааx
          <EastIcon sx={{ position: "absolute", right: "10%" }} />
        </Button>
      </Stack>
    </Stack>
  );
};
