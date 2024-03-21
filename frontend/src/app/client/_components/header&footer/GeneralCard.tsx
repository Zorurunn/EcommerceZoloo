"use client";

import { Stack, Typography, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";

// server implement hiisnii daraa Props oor img path bolon une, category, ner busad medeellee awna
// TODO: props iin type zaaj uguh
export const GeneralCard = () => {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <Stack position={"relative"} width={"100%"} height={240}>
          <Image
            src={"/zoru/model.jpg"}
            alt="Product Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
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

{
  /* <Card
imgPath="/temporary/morning.jpg"
name="Өглөөний хоол"
price="4,800"
discountPrice="4,800"
discount="20"
/> */
}
