"use client";
import { Badge, IconButton, Stack } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AddProductImg } from "./AddProductImg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useData } from "@/components/provider/DataProvider";

export const ProductImgField = ({
  index,
  images,
  setImages,
  removeImage,
}: {
  index: number;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  removeImage: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const { selectedIndex, setIndex } = useData();

  return (
    <Stack direction={"row"}>
      <Stack direction={"row"} gap={2}>
        {open && (
          <AddProductImg
            index={index}
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
            images={images}
            setImages={setImages}
            setShowPicture={setShowPicture}
          />
        )}
        {/* {!showPicture && (
          <Stack
            onClick={() => {
              setIndex(index);
            }}
            sx={{
              "&:hover .deleteImgBtn": {
                display: "flex",
              },
            }}
          >
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

              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className="deleteImgBtn"
                sx={{
                  display: "none",
                  bgcolor: "#000",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: 10,
                  height: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    bgcolor: "#121316",
                  },
                }}
              >
                <ClearOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        )} */}

        <Stack
          direction={"row"}
          gap={2}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Stack
            sx={{
              "&:hover .deleteImgBtn": {
                display: "flex",
              },
            }}
            position={"relative"}
            overflow={"hidden"}
            width={125}
            height={125}
            borderRadius={2}
          >
            <Image src={`${images[index]}`} alt="" fill objectFit="cover" />

            <IconButton
              onClick={() => {
                removeImage();
              }}
              className="deleteImgBtn"
              sx={{
                display: "none",
                bgcolor: "#000",
                position: "absolute",
                top: "0",
                right: "0",
                width: 10,
                height: 10,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#121316",
                },
              }}
            >
              <ClearOutlinedIcon
                sx={{
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
