"use client";
import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useData } from "../../../../components/provider/DataProvider";
import React, { useState } from "react";
const validationSchema = yup.object({
  rate: yup.number(),
  comment: yup.string(),
});

export type ProductRatingProps = {
  userId?: string;
  productId?: string;
  productRating?: number;
  comment?: string;
};

export const ProductRating = (props: ProductRatingProps) => {
  const { userId, productId, comment, productRating } = props;
  const { addRating } = useData();
  const [rate, setRate] = React.useState<number | null>(2);
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.comment, rate, productId, userId);
    },
  });

  return (
    <Stack>
      <Stack gap={3}>
        <Typography gap={3} color={"#1D3178"} fontSize={18} fontWeight={800}>
          Үнэлгээ нэмэх
        </Typography>
        <Stack
          width={1}
          py={6}
          px={3}
          gap={"41px"}
          borderRadius={"8px"}
          bgcolor={"common.white"}
        >
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <Rating
              name="rating"
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue);
              }}
            />
          </Stack>
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <TextField
              type="text"
              placeholder="Сэтгэгдэл бичих"
              name="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Stack>
          <Stack width={1} alignItems={"end"}>
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              color="success"
              disabled={!rate || !formik.values.comment}
              variant="contained"
              sx={{ width: "fit-content" }}
            >
              <Typography>Үнэлэх</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box display={"flex"} flexDirection={"column"} mt={6}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography mr={2} fontSize={18} fontWeight={800} color={"#1D3178"}>
            Нийт үнэлгээ
          </Typography>
          <Rating value={productRating} readOnly />
          <Typography ml={0.5}>
            {"("}
            {/*  {reviewCount} */}

            {")"}
          </Typography>
        </Stack>
        <Stack
          width={1}
          py={6}
          px={3}
          mt={3}
          gap={"41px"}
          borderRadius={"8px"}
          bgcolor={"common.white"}
        ></Stack>
      </Box>
    </Stack>
  );
};
