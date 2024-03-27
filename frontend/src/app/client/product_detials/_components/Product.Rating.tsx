// "use client";
// import { Button, Container, Stack, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import * as React from "react";
// import Rating from "@mui/material/Rating";

// export const AddComment = () => {
//   const [value, setValue] = useState<number | null>(2);

//   return (
//     <Container maxWidth={"lg"}>
//       <Stack width={"100%"} gap={3}>
//         <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
//           {"Үнэлгээ нэмэх"}
//         </Typography>
//         <Stack
//           width={"100%"}
//           bgcolor={"white"}
//           borderRadius={"8px"}
//           px={3}
//           py={6}
//           gap={5}
//         >
//           <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"} padding={2}>
//             {/* <Box
//           // sx={{
//           //   "& > legend": { mt: 2 },
//           // }}
//           >
//             <Rating
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />
//           </Box> */}
//             <Rating
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />
//           </Stack>
//           <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"}>
//             <TextField
//               placeholder="Сэтгэгдэл бичих"
//               type="text"
//               sx={{
//                 "& fieldset": { border: "none" },
//               }}
//             />
//           </Stack>
//           <Stack direction={"row"} justifyContent={"flex-end"}>
//             <Button
//               variant="contained"
//               sx={{
//                 background: "#FB2E86",
//                 width: "fit-content",
//               }}
//             >
//               {"Үнэлэх"}
//             </Button>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// };

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
import { useData } from "@/components/provider/DataProvider";
import { useState } from "react";
const validationSchema = yup.object({
  comment: yup.string(),
});
// type userType = {
//   userName: string;
//   email: string;
//   merchName: string;
//   address: { city: string; district: string; khoroo: string };
//   experience: string;
//   merchType: string;
//   password: string;
//   role: string;
//   createdAt: Date;
//   updatedAt: Date;
// };

// type CommentType = {
//   userId: string;
//   productId: string;
//   comment: string;
//   rate: number;
//   createdAt: object;
//   updatedAt: object;
// };

type ProductRatingProps = {
  userId?: string;
  productId?: string;
  productRating?: number;
  comment?: string;
  // reviewCount?: number;
};

export const ProductRating = (props: ProductRatingProps) => {
  const { userId, productId, comment, productRating } = props;
  const { addRating } = useData();
  const [rate, setRate] = useState(0);
  const formik = useFormik({
    initialValues: {
      comment: yup.string,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addRating(userId || "", productId || "", rate, values.comment);
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
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue || 0);
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
              disabled={!star || !formik.values.comment}
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
            {reviewCount}
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
        >
          {comments?.map((item, index) => (
            <Stack
              key={index}
              borderBottom={2}
              pb={4}
              borderColor={"#BFC6E0"}
              sx={{ borderStyle: "dashed" }}
            >
              <Stack width={1}>
                <Rating name="rating" readOnly value={item.star} size="small" />
              </Stack>
              <Typography
                mt={4}
                mb={1}
                color={"#1D3178"}
                fontSize={18}
                fontWeight={800}
              >
                {Boolean(item.userId) ? item.userId.userName : "Зочин"}
              </Typography>
              <Stack width={1}>
                <Typography color={"#9295AA"} fontSize={17.67} fontWeight={700}>
                  {item.comment}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
