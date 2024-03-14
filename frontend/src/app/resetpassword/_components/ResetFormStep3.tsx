"use client";

import EastIcon from "@mui/icons-material/East";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export const ResetFormStep3 = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const { resetPassword, userEmail, userOtb } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  const validationSchema = yup.object({
    newPassword: yup.string().required(""),
    reNewPassword: yup
      .string()
      .required("")
      .oneOf([yup.ref("newPassword")]),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      resetPassword({
        email: userEmail,
        code: userOtb,
        newPassword: values.newPassword,
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
            name="newPassword"
            label="Нууц үг "
            placeHolder="Нууц үгээ оруулна уу"
            type="password"
            adornment="end"
            handleChange={formik.handleChange}
            value={formik.values.newPassword}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.newPassword)}
          />

          <CustomInput
            name="reNewPassword"
            label="Нууц үг давтах "
            placeHolder="Нууц үгээ оруулна уу"
            type="password"
            adornment="end"
            handleChange={formik.handleChange}
            value={formik.values.reNewPassword}
            error={
              formik.touched.reNewPassword &&
              Boolean(formik.errors.reNewPassword)
            }
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.reNewPassword)}
          />
        </Stack>

        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            // setIsClicked(true);
            if (index == 2) {
              router.push("/signin");
            }
            setIndex(0);
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
              color: "common.white",
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
