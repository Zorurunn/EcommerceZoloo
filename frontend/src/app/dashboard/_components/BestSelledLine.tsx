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
  return (
    <Stack
      direction={"row"}
      height={72}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 6fr 3fr 3fr",
        gap: 1,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        {index}
      </Stack>
      {/* <Stack
        // border="1px solid red"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={1}
        width={"100%"}
      >
        <Stack>
          <Avatar alt={name} src={imgUrl} />
        </Stack>
        <Stack flexGrow={1}>
          <Typography
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow={"ellipsis"}
            width={"calc(100% - 40px)"}
          >
            {name}
          </Typography>
        </Stack>
      </Stack> */}
      <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Stack
          direction={"row"}
          height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            gap: 1,
          }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar alt={name} src={imgUrl} />
          </Stack>
          <Stack position="relative">
            <Stack
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              gap={1}
              justifyContent={"center"}
            >
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow={"ellipsis"}
                fontSize={14}
                fontWeight={600}
              >
                {name}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"text.secondary"}
              >
                {id}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        {soldQuantity}
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        {new Intl.NumberFormat().format(price) + "₮"}
      </Stack>
    </Stack>
  );
};
