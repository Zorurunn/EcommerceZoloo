import { Avatar, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type soldProductType = {
  name: string;
  id: string;
  imgUrl: string;
  price: number;
  soldQuantity: number;
};
type indexType = {
  index: number;
};

export const BestSelledLine = (props: soldProductType & indexType) => {
  const { name, id, imgUrl, price, soldQuantity, index } = props;
  //   console.log(imgUrl);

  return (
    <Stack
      direction={"row"}
      height={54}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 6fr 3fr 3fr",
        gap: 1,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        {index + 1}
      </Stack>
      <Stack border="1px solid red">
        ss
        <Stack></Stack>
      </Stack>
      {/* <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={"row"}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            gap: 1,
          }}
        >
          <Stack
            border={"1px solid red"}
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar alt={name} src={imgUrl} />
          </Stack>
          <Stack border={"1px solid green"} width={"100%"}>
            <Typography>{name}</Typography>
          </Stack>
        </Stack>
      </Stack> */}
      <Stack justifyContent={"center"} alignItems={"center"}>
        Тоо ширхэг
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        Үнэ
      </Stack>
    </Stack>
  );
};
