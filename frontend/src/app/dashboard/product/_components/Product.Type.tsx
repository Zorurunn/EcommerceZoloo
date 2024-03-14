import { CustomInput } from "@/components";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export const ProductType = () => {
  return (
    <Stack
      width={"90%"}
      padding={3}
      borderRadius={"12px"}
      bgcolor={"#FFFFFF"}
      gap={3}
    >
      <Typography fontSize={18} fontWeight={600} color={"text.primary"}>
        Төрөл
      </Typography>
      <Stack gap={1}>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Typography fontSize={14} fontWeight={400} color={"text.primary"}>
            Өнгө
          </Typography>
          <Stack alignItems={"center"} justifyContent={"center"} padding={1}>
            <IconButton size="small" aria-label="adds">
              <Stack borderRadius={"50%"} bgcolor={"#ECEDF0"}>
                <AddIcon />
              </Stack>
            </IconButton>
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
