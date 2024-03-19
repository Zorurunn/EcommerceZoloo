import { IconButton, Stack, Typography } from "@mui/material";
import { ProductImgField } from "./ProductImgField";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function ProductImageSection() {
  const [imgQty, setImgQty] = useState(3);
  const [urls, setUrls] = useState<string[]>([]);
  console.log(urls);

  return (
    <Stack
      width={"100%"}
      py={4}
      pr={2}
      pl={4}
      borderRadius={"12px"}
      bgcolor={"#FFFFFF"}
      gap={4}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: "#000000",
          lineHeight: "24px",
        }}
      >
        Бүтээгдэхүүний зураг
      </Typography>
      <Stack direction={"row"}>
        <Stack
          direction={"row"}
          overflow={"scroll"}
          width={"100%"}
          maxWidth={410}
        >
          <Stack gap={2} direction={"row"}>
            {new Array(imgQty).fill(0).map((_, index) => (
              <ProductImgField
                urls={urls}
                setUrls={setUrls}
                setImgQty={setImgQty}
              />
            ))}
          </Stack>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={125}
          height={125}
        >
          <IconButton
            size="small"
            aria-label="adds"
            onClick={() => {
              setImgQty((prev) => prev + 1);
            }}
          >
            <Stack borderRadius={"50%"} padding={1} bgcolor={"#ECEDF0"}>
              <AddIcon />
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
