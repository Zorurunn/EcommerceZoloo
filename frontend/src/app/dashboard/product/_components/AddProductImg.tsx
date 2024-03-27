"use client";

import { useData } from "@/components/provider/DataProvider";
import {
  Button,
  Container,
  Stack,
  TextField,
  Modal,
  selectClasses,
} from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AddProductImgProps = {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  index: number;
  open: boolean;
  handleClose: () => void;
  setShowPicture: Dispatch<SetStateAction<boolean>>;
};

export const AddProductImg = (props: AddProductImgProps) => {
  const { setShowPicture, open, handleClose, index, images, setImages } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { selectedIndex } = useData();
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

        console.log(images, "images");

        let array = images;

        console.log(array, "array");

        array.splice(selectedIndex, 1, data.secure_url);

        console.log(array, "arrayCahnged");

        setImages(array);
        return data.secure.url;
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  // useEffect(() => {
  //   if (imgUrl) {
  //     const newImages = images.map((item, ind) => {
  //       if (ind === index) {
  //         item = imgUrl;
  //       }
  //       return item;
  //     });
  //     setImages(newImages);
  //   }
  // }, [imgUrl]);

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

              {images && (
                <Stack width="100%" position="relative">
                  <img
                    src={`${images[index]}`}
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
