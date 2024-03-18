import { ProductInfos } from "@/constants";
import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const ProductScroll = () => {
  return (
    <Stack px={4} width={"100%"} height={"65%"}>
      <Stack
        borderRadius={2}
        bgcolor={"#fff"}
        overflow={"scroll"}
        height={"100%"}
      >
        <Stack>
          <Grid container height={55} alignItems={"center"}>
            <Grid xs={0.8} item></Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Бүтээгдэхүүн</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Ангилал</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Үнэ</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Үлдэгдэл</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Зарагдсан</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}> Нэмсэн огноо</Typography>
            </Grid>

            <Grid xs={1} item></Grid>
          </Grid>
          <Grid container>
            {ProductInfos.map((item, index) => (
              <Grid
                key={index}
                container
                borderTop={1}
                alignItems={"center"}
                justifyContent={"center"}
                height={80}
              >
                <Grid xs={0.8} item>
                  <Stack justifyContent="center" alignItems="center">
                    <TextField
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                      type="checkbox"
                    />
                  </Stack>
                </Grid>

                <Grid xs={1.7} item>
                  <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Stack
                      borderRadius={"50%"}
                      overflow={"hidden"}
                      position={"relative"}
                      width={50}
                      height={50}
                    >
                      <Image src={item.img} alt="" fill objectFit="cover" />
                    </Stack>
                    <Stack>
                      <Typography fontSize={18} fontWeight={800}>
                        {item.name}
                      </Typography>
                      <Typography>{item.code}</Typography>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.category}</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.price}₮</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.remainder}</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.soldOut}</Typography>
                </Grid>

                <Grid xs={1.9} item>
                  <Typography>{item.createdAt}</Typography>
                </Grid>

                <Grid xs={0.4} item>
                  <IconButton>
                    <DeleteOutlineOutlinedIcon style={{ fill: "#d6d6d6" }} />
                  </IconButton>
                </Grid>
                <Grid xs={0.4} item>
                  <IconButton>
                    <EditOutlinedIcon style={{ fill: "#d6d6d6" }} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
