import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const style = {
  maxWidth: "551px",
  width: "100%",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#ffff",
  borderRadius: 6,
  boxShadow: 24,
  p: 6,
};

export const AlertModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack justifyContent={"center"} alignItems={"center"} gap={4}>
              <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
                <Image
                  width={100}
                  height={100}
                  src={"/FeaturedIcon.png"}
                  alt="alert logo"
                />
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color={"#121316"}
                  id="transition-modal-description"
                >
                  Бүтээгдэхүүн амжилттай нэмэгдлээ.
                </Typography>
              </Stack>
              <Button
                sx={{
                  bgcolor: "#121316",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  px: "20px",
                  py: "10px",
                  gap: "4px",
                }}
              >
                <Typography>Тохиргоог үргэлжлүүлэх</Typography>
                <ArrowForwardIcon />
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
