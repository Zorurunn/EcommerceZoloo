import { CustomInput } from "@/components";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { ProductColor } from "./ProductColor";

export const ProductType = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  return (
    <Stack padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"} gap={3}>
      <Typography fontSize={18} fontWeight={600} color={"text.primary"}>
        Төрөл
      </Typography>
      <Stack gap={1}>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Typography fontSize={14} fontWeight={400} color={"text.primary"}>
            Өнгө
          </Typography>

          {colors.map((item, index) => (
            <Stack
              width={25}
              height={25}
              borderRadius={"50%"}
              bgcolor={item}
              border={1}
            />
          ))}
          <Stack alignItems={"center"} justifyContent={"center"} padding={1}>
            <IconButton
              onClick={() => {
                setOpenColor(true);
              }}
              size="small"
              aria-label="adds"
            >
              <Stack borderRadius={"50%"} bgcolor={"#ECEDF0"}>
                <AddIcon />
              </Stack>
            </IconButton>
            {openColor && (
              <ProductColor
                setColors={setColors}
                openColor={openColor}
                handleCloseColor={() => {
                  setOpenColor(false);
                }}
              />
            )}
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Typography
            fontSize={14}
            fontWeight={400}
            color={"text.primary"}
            lineHeight={"20px"}
          >
            Хэмжээ
          </Typography>
          <Stack alignItems={"center"} justifyContent={"center"} padding={1}>
            <IconButton size="small" aria-label="adds">
              <Stack borderRadius={"50%"} bgcolor={"#ECEDF0"}>
                <AddIcon />
              </Stack>
            </IconButton>
          </Stack>
        </Stack>
        <Stack width={150}>
          <Button
            fullWidth
            sx={{
              border: "1px solid #D6D8DB",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              padding: "8px",
              color: "#000",
            }}
          >
            <Typography fontSize={14} fontWeight={600}>
              Төрөл нэмэх
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
