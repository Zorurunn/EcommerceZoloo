"use client";

import { Stack, Typography, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// server implement hiisnii daraa Props oor img path bolon une, category, ner busad medeellee awna
// TODO: props iin type zaaj uguh

export const GeneralCard = () => {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/model.jpg"
          alt="Guess jacket"
          sx={{ objectFit: "fit" }}
        />
        <CardContent>
          <Typography fontSize={20} fontWeight={700}>
            Guess салхин хүрэм
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"text.secondary"}>
            Савхин хүрэм куртка
          </Typography>
          <Stack direction={"row"} width={"100%"} justifyContent={"flex-end"}>
            <Typography fontSize={24} fontWeight={700}>
              619,000 ₮
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
