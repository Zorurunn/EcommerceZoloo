"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../../components";

export function CardFormStep1() {
  return (
    <Stack sx={{ width: "452px", gap: "8px", padding: "24px" }}>
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
            variant="contained" // to do: change backgroundcolor to "#D6D8DB"
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
