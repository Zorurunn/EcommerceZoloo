"use client";
import Rating from "@mui/material/Rating";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProductParams } from "@/components/provider/DataProvider";

export const Productdetial = (props: ProductParams) => {
  const { images, productName, price, description, productType, rating } =
    props;
  const ratedQty = rating?.ratedQty;
  const startAverage = rating?.startAverage;
  const colors = productType.productColor;

  return (
    <Container>
      <Stack
        width={"100%"}
        height={487}
        gap={4}
        direction={"row"}
        pt={6}
        pb={4}
      >
        <Stack height={"100%"} width={"50%"}>
          {images &&
            images.map((item) => {
              if (item.length >= 2) {
                return (
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    direction={"row"}
                    gap={3}
                  >
                    <Stack
                      width={"100%"}
                      height={"100%"}
                      gap={2}
                      flexGrow={1}
                      flexBasis={0}
                    >
                      <Stack
                        borderRadius={1}
                        width={"100%"}
                        height={"100%"}
                        position={"relative"}
                        flexBasis={"33.3%"}
                        flexGrow={1}
                        bgcolor={"#FFFFFF"}
                      >
                        <Image
                          src={item || "/backgroundnull.png"}
                          alt="zurag bhgu bn"
                          fill
                          objectFit="cover"
                          style={{ borderRadius: "3px" }}
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      width={"100%"}
                      height={"100%"}
                      position={"relative"}
                      flexGrow={1}
                      flexBasis={0}
                    >
                      <Image
                        src={images[0]}
                        alt="zurag bhgu bn"
                        fill
                        objectFit="cover"
                        style={{ borderRadius: "3px" }}
                      />
                    </Stack>
                  </Stack>
                );
              }
              return (
                <Stack width={"100%"} height={"100%"} direction={"row"} gap={3}>
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    gap={2}
                    flexGrow={1}
                    flexBasis={0}
                  >
                    <Stack
                      borderRadius={1}
                      width={"100%"}
                      height={"100%"}
                      position={"relative"}
                      flexBasis={"33.3%"}
                      flexGrow={1}
                      bgcolor={"#FFFFFF"}
                    >
                      <Image
                        src={item || "/backgroundnull.png"}
                        alt="zurag bhgu bn"
                        fill
                        objectFit="cover"
                        style={{ borderRadius: "3px" }}
                      />
                    </Stack>
                  </Stack>
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    position={"relative"}
                    flexGrow={3}
                    flexBasis={0}
                  >
                    <Image
                      src={images[0]}
                      alt="zurag bhgu bn"
                      fill
                      objectFit="cover"
                      style={{ borderRadius: "3px" }}
                    />
                  </Stack>
                </Stack>
              );
            })}
        </Stack>
        <Stack width={"50%"} gap={6} alignItems={"flex-start"}>
          <Stack gap={1.5}>
            <Typography color={"#111C85"} fontSize={36} fontWeight={800}>
              {productName}
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating
                name="half-rating"
                defaultValue={ratedQty}
                precision={0.5}
              />
              <Typography color={"#5A5C7E"} fontSize={15}>
                ({startAverage})
              </Typography>
            </Stack>
            <Typography color={"#111C85"} fontSize={36} fontWeight={400}>
              {new Intl.NumberFormat().format(price ?? 0) + "₮"}
            </Typography>
            <Stack direction={"row"} gap={1.5} alignItems={"center"}>
              {colors &&
                colors.map((item) => {
                  return (
                    <Stack
                      width={20}
                      height={20}
                      borderRadius={"50%"}
                      sx={{ backgroundColor: item }}
                    ></Stack>
                  );
                })}
            </Stack>

            <Typography color={"#9295AA"} fontSize={17} fontWeight={400}>
              {description}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Button sx={{ bgcolor: "none" }}>
              <Typography color={"#151875"} fontSize={16} fontWeight={800}>
                add To Cart
              </Typography>
            </Button>
            <FavoriteBorderOutlined
              sx={{ color: "#151875", fontSize: "18px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
