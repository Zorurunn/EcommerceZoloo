"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const [open, setOpen] = useState(false);

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
    onSubmit: async (values) => {
      setOpen(true);
      await resetPassword({
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
            if (index == 2) {
              router.push("/signin");
            }
            setIndex(0);
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
