"use client";

import { Button, Container, Stack, TextField, Modal } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type AddProductImgProps = {
  open: boolean;
  handleClose: () => void;
  imgUrl: string | undefined;
  setImgUrl: Dispatch<SetStateAction<string | undefined>>;
  setShowPicture: Dispatch<SetStateAction<boolean>>;
};

export const AddProductImg = (props: AddProductImgProps) => {
  const { imgUrl, setImgUrl, setShowPicture, open, handleClose } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/daeadzt2k/upload?upload_preset=g8m2bqqj",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImgUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Stack bgcolor={"#fff"}>
        <Container>
          <Stack py={8} alignItems="center">
            <Stack gap={3} width={400}>
              <TextField
                type="file"
                onChange={handleImageChange}
                variant="outlined"
              />

              <Button
                onClick={async () => {
                  await handleImageUpload();
                  setShowPicture(true);
                  console.log(imgUrl);
                }}
                variant="contained"
                sx={{
                  color: "#fff",
                  bgcolor: "#000",
                  "&:hover": {
                    backgroundColor: "#2f2f2f",
                  },
                }}
              >
                Upload
              </Button>

              {imgUrl && (
                <Stack width="100%" position="relative">
                  <img
                    src={imgUrl ?? ""}
                    alt="Uploaded"
                    width={"100%"}
                    height={"100%"}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Modal>
  );
};
