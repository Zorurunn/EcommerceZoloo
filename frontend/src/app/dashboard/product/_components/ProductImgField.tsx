"use client";
import { Badge, Stack } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AddProductImg } from "./AddProductImg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

export const ProductImgField = ({
  image,
  setImages,
  handleDelete,
}: {
  image: string;
  setImages: Dispatch<SetStateAction<string[]>>;
  handleDelete: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  // useEffect(() => {
  //   if (urls && imgUrl) {
  //     setUrls((prev) => [...prev, imgUrl]);
  //   } else {
  //     if (imgUrl) {
  //       setImgUrl(imgUrl);
  //     }
  //   }
  // }, [imgUrl]);

  return (
    <Stack direction={"row"}>
      <Stack direction={"row"} gap={2}>
        {open && (
          <AddProductImg
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
            setShowPicture={setShowPicture}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
          />
        )}
        {!image && (
          <Stack>
            <Stack
              onClick={() => {
                setOpen(true);
              }}
              position={"relative"}
              alignItems={"center"}
              justifyContent={"center"}
              width={125}
              height={125}
              border={"dashed #D6D8DB 1px"}
              borderRadius={2}
            >
              <ImageOutlinedIcon />
              <Stack
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                position={"absolute"}
                top={5}
                right={5}
                zIndex={10}
                bgcolor={"#000"}
                borderRadius={"50%"}
                p={0.2}
              >
                <CloseIcon
                  sx={{
                    fill: "#fff",
                    fontSize: "12px",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        )}

        {image && (
          <Stack direction={"row"} gap={2}>
            <Stack
              position={"relative"}
              overflow={"hidden"}
              width={125}
              height={125}
              borderRadius={2}
            >
              <Stack
                // onClick={(e) => {
                //   const newUrls = urls.filter((item) => {
                //     return item != imgUrl;
                //   });
                //   setUrls(newUrls);
                //   setImgQty((prev) => prev - 1);
                //   e.stopPropagation();
                // }}
                position={"absolute"}
                top={5}
                right={5}
                zIndex={10}
                bgcolor={"#fff"}
                borderRadius={"50%"}
              >
                <CloseIcon
                  sx={{
                    fontSize: "18px",
                  }}
                />
              </Stack>
              <Image src={image} alt="" fill objectFit="cover" />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
