"use client";

import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "@/components";
import { CardFormStep3Experience, CardFormStep3Products } from "@/constants";

export function CardFormStep3() {
  return (
    <Stack sx={{ maxWidth: "452px", gap: "8px", padding: "24px" }}>
      <Typography fontSize={32} fontWeight={700} color={"text.primary"}>
        Жоохон танилцья
      </Typography>
      <Typography fontSize={16} fontWeight={400} color={"text.primary"}>
        Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
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
          <Typography fontSize={16} fontWeight={600} color={"text.primary"}>
            Та борлуулалт хийж байсан туршлагатай юу?
          </Typography>
          <CustomInput
            name="market"
            type="text"
            placeHolder="Сонгох"
            value={CardFormStep3Experience[0]}
            select={true}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {CardFormStep3Experience.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </CustomInput>

          <Typography fontSize={16} fontWeight={600} color={"text.primary"}>
            Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
          </Typography>
          <CustomInput
            name="market"
            type="text"
            placeHolder="Сонгох"
            value={CardFormStep3Products[0]}
            select={true}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {CardFormStep3Products.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </CustomInput>
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
