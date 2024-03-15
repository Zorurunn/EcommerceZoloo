"use client";

import EastIcon from "@mui/icons-material/East";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";

export const ResetFormStep1 = ({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const { checkResetEmail, setUserEmail } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

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
    onSubmit: (values) => {
      checkResetEmail({ email: values.email });
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
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={String(formik.errors.email)}
          label="Имэйл "
          placeHolder="Имэйл хаягаа оруулна уу"
          type="text"
        />

        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            setIsClicked(true);
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
