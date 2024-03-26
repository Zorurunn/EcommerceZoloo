"use client";
import { Avatar, Button, Modal, Stack, TextField } from "@mui/material";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type uploadImgType = {
  open: boolean;
  handleClose: () => void;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  handleDelete: () => void;
  index: number;
};

export default function UploadImg(props: uploadImgType) {
  const { images, setImages, handleDelete, index, open, handleClose } = props;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/daeadzt2k/upload?upload_preset=g8m2bqqj",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        setImgUrl(data.secure_url);
        return data.secure_url;
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (imgUrl) {
      const newImages = images.map((item, ind) => {
        if (ind === index) {
          item = imgUrl;
        }
        return item;
      });
      setImages(newImages);
    }
  }, [imgUrl]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0,0,0, 0.1)",
      }}
    >
      <Stack marginTop={"60px"} marginBottom={"60px"}>
        <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
          <Stack>
            {images[index] ? (
              <Stack>
                <Stack position={"relative"}>
                  <Avatar
                    alt="Remy Sharp"
                    src={images[index]}
                    sx={{ width: "120px", height: "120px" }}
                  />
                </Stack>
              </Stack>
            ) : (
              <TextField
                type="file"
                onChange={handleImageChange}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  height: 400,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  backgroundColor: "primary.dark",
                }}
              />
            )}
            <Button
              onClick={() => {
                handleImageUpload();
              }}
            >
              upload
            </Button>
            <Button
              onClick={() => {
                handleDelete();
              }}
            >
              delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}
