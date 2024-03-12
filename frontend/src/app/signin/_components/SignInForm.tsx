"use client";
import { Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { CustomInput } from "@/components";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";

export default function SignInForm() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
      // )
      .required("Нууц үгээ оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
    <Stack padding={3} maxWidth={"400px"} width={"100%"}>
      <Stack gap={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Нэвтрэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          name="email"
          label="Имэйл"
          placeHolder="Имэйл оруулна уу"
          type="text"
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={String(formik.errors.email)}
          onBlur={formik.handleBlur}
        />
        <CustomInput
          name="password"
          label="Нууц үг"
          placeHolder="Нууц үг оруулна уу"
          type="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={String(formik.errors.password)}
          onBlur={formik.handleBlur}
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
            Нэвтрэх
          </Button>
        </Stack>
        <Stack width={"100%"} pt={2} gap={2}>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Google Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Google-ээр нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Microsoft Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Microsoft-оор нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Apple Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Apple-аар нэвтрэх
            </Typography>
          </Button>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлгүй юу?</Typography>
          <Link href={"/signup"}>
            <Typography borderBottom={1}>Бүртгүүлэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
