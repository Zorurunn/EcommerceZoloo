import { CustomInput } from "@/components";
import { Modal } from "@mui/material";
import { Stack } from "@mui/system";

export const ProductColor = () => {
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
      <Stack>
        <CustomInput type="color" />
      </Stack>
    </Modal>
  );
};
