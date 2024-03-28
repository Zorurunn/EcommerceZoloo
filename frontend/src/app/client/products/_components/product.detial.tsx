"use client";
import Rating from "@mui/material/Rating";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProductParams, useData } from "@/components/provider/DataProvider";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export const Productdetial = (props: ProductParams) => {
  const { addCart, setAddCart } = useData();
  const {
    images,
    productName,
    price,
    productType,
    description,
    rating,
    discount,
    merchantId,
    quantity,
  } = props;
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
              >
                <Image
                  src={images[0]}
                  alt="zl"
                  fill
                  objectFit="cover"
                  style={{ borderRadius: "3px" }}
                />
              </Stack>
              <Stack
                borderRadius={1}
                width={"100%"}
                height={"100%"}
                position={"relative"}
                flexBasis={"33.3%"}
                flexGrow={1}
              >
                <Image
                  src={images[1]}
                  alt="zl"
                  fill
                  objectFit="cover"
                  style={{ borderRadius: "3px" }}
                />
              </Stack>
              <Stack
                width={"100%"}
                height={"100%"}
                position={"relative"}
                flexBasis={"33.3%"}
                flexGrow={1}
              >
                <Image
                  src={images[2]}
                  alt="zl"
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
                src={images[3]}
                alt="zl"
                fill
                objectFit="cover"
                style={{ borderRadius: "3px" }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"50%"} gap={6} alignItems={"flex-start"}>
          <Stack gap={1.5}>
            <Typography color={"#111C85"} fontSize={36} fontWeight={800}>
              {productName}
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating
                name="half-rating"
                defaultValue={rating?.starAverage}
                precision={0.5}
              />
              <Typography color={"#5A5C7E"} fontSize={15}>
                {rating?.ratedQty}
              </Typography>
            </Stack>
            <Typography color={"#111C85"} fontSize={36} fontWeight={400}>
              {new Intl.NumberFormat().format(price ?? 0) + "₮"}
            </Typography>
            <Stack></Stack>
            <Typography color={"#9295AA"} fontSize={17} fontWeight={400}>
              {description}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Button
              sx={{ bgcolor: "none" }}
              onClick={() => {
                if (addCart.length) {
                  setAddCart([
                    ...addCart,
                    {
                      productId: props._id ?? "",
                      name: productName,
                      price: price ?? 0,
                      discount: discount ?? 0,
                      quantity: quantity ?? 1,
                      thumbnailUrl: images[0],
                      color: productType.productColor[0],
                      merchantId: merchantId ?? "",
                    },
                  ]);
                } else {
                  setAddCart([
                    {
                      productId: props._id ?? "",
                      name: productName,
                      price: price ?? 0,
                      discount: discount ?? 0,
                      quantity: quantity ?? 1,
                      thumbnailUrl: images[0],
                      color: productType.productColor[0],
                      merchantId: merchantId ?? "",
                    },
                  ]);
                }
              }}
            >
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
