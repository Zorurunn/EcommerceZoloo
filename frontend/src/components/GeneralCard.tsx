import { Backdrop, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { saleItemType } from "@/common/types";

export const GeneralCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Stack gap={1.7} width={"100%"} sx={{ cursor: "pointer" }}>
      <Stack
        position={"relative"}
        paddingTop={"65%"}
        border={"1px solid transparent"}
        borderRadius={5}
        overflow={"hidden"}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          setIsHover(false);
        }}
      >
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          open={isHover}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundColor: "#fff", borderRadius: 2 }}
            paddingX={2}
          >
            <Typography color={"text.primary"}></Typography>
          </Stack>
        </Backdrop>
        <Stack position={"absolute"} top={0} left={0}>
          <img
            src={"/facebook.png"}
            alt="Breakfast"
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Stack>
        <Stack
          position={"absolute"}
          zIndex={2}
          width={"20%"}
          height={"20%"}
          top={"10%"}
          right={"10%"}
          sx={{
            backgroundColor: "primary.main",
            border: "2px solid white",
            borderRadius: 10,
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontSize={20} fontWeight={600} color={"white"}>
            00
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography fontSize={20} fontWeight={600} color="text.primary">
          aaaa
        </Typography>

        <Stack direction={"row"} gap={2}>
          <Typography
            fontSize={18}
            fontWeight={800}
            color="primary.main"
          ></Typography>
          <Typography fontSize={18} fontWeight={800} sx={{}}>
            ss
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

{
  /* <Card
imgPath="/temporary/morning.jpg"
name="Өглөөний хоол"
price="4,800"
discountPrice="4,800"
discount="20"
/> */
}
