"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useAuth } from "@/components/provider/AuthProvider";

export const SignUpForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { signUp } = useAuth();

  const validationSchema = yup.object({
    userName: yup.string().required("Нэрээ оруулна уу"),
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    phoneNumber: yup
      .string()
      .matches(/^(?=.*\d)[0-9]{8,8}$/)
      .required("Утасны дугаар оруулна уу"),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
      // )
      .required("Нууц үгээ оруулна уу"),
    rePassword: yup
      .string()
      .required("Нууц үгээ давтаж оруулна уу")
      .oneOf([yup.ref("password")]),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signUp({
        userName: values.userName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      });
    },
  });
  return (
    <Stack padding={3} maxWidth={"400px"} width={"100%"}>
      <Stack gap={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Бүртгүүлэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          name="userName"
          label="Нэр"
          placeHolder="Нэр оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.userName}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={String(formik.errors.userName)}
          onBlur={formik.handleBlur}
          type="text"
        />
        <CustomInput
          name="email"
          label="Имэйл"
          placeHolder="Имэйл оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={String(formik.errors.email)}
          type="text"
        />
        <CustomInput
          name="phoneNumber"
          label="Утасны дугаар"
          placeHolder="Утасны дугаар оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={String(formik.errors.phoneNumber)}
          onBlur={formik.handleBlur}
          type="tel"
        />
        <CustomInput
          name="password"
          label="Нууц үг"
          placeHolder="Нууц үгээ оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={String(formik.errors.password)}
          onBlur={formik.handleBlur}
          type="password"
        />
        <CustomInput
          name="rePassword"
          label="Нууц үг давтах"
          placeHolder="Нууц үгээ давтаж оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.rePassword}
          error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
          helperText={String(formik.errors.rePassword)}
          onBlur={formik.handleBlur}
          type="password"
        />
        <Stack>
          <Button
            fullWidth
            onClick={() => {
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
        <Stack border={1} borderColor="#ECEDF0"></Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлтэй юу?</Typography>
          <Link href={"/signin"}>
            <Typography borderBottom={1}>Нэвтрэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
