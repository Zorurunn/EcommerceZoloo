"use client";

import EastIcon from "@mui/icons-material/East";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";

export const ResetFormStep2 = ({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const { userEmail, setUserOtb } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  const validationSchema = yup.object({
    code: yup.string().required("").min(4),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserOtb(values.code);
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
        <Stack gap={2}>
          <Typography>
            Таны
            <Typography ml={1} color={"primary.main"} component={"span"}>
              {userEmail}
            </Typography>
            -руу сэргээх код илгээх болно.
          </Typography>

          <CustomInput
            name="code"
            label="Нууц үг сэргээх код "
            placeHolder="Нууц үг сэргээх кодоо оруулна уу"
            type="text"
            handleChange={formik.handleChange}
            value={formik.values.code}
            error={formik.touched.code && Boolean(formik.errors.code)}
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.code)}
          />
        </Stack>

        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            // setIsClicked(true);
            setIndex((prev) => prev + 1);
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
