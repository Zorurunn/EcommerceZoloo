"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../../components";
import { Dispatch, SetStateAction } from "react";

export function CardFormStep1({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Stack width={452} p={3} gap={3}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "700",
          color: "text.primary",
        }}
      >
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Stack
        sx={{
          gap: "16px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              color: "text.primary",
            }}
          >
            Танай дэлгүүрийн нэр юу вэ?
          </Typography>

          <CustomInput
            placeHolder="Дэлгүүрийн нэр"
            type="text"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            pt: "40px",
          }}
        >
          <Stack
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#1C20240A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon fontSize="medium" sx={{ color: "text.primary" }} />
          </Stack>
          <Button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            variant="contained"
            sx={{
              width: "127px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#D6D8DB",
              textTransform: "none",
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                color: "text.secondary",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              <Typography>Дараах</Typography>
              <ArrowForwardIcon
                fontSize="medium"
                sx={{ color: "text.secondary" }}
              />
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
