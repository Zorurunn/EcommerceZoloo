"use client";
import Rating from "@mui/material/Rating";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type ProductdetialProps = {
  userId?: string;
  productId?: string;
};

export const Productdetial = () => {
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
                  src={"/product2.jpg"}
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
                  src={"/product2.jpg"}
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
                  src={"/product2.jpg"}
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
                src={"/bg.jpg"}
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
              sofa
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography color={"#5A5C7E"} fontSize={15}>
                (32{/* sanal ugsn too */})
              </Typography>
            </Stack>
            <Typography color={"#111C85"} fontSize={36} fontWeight={400}>
              750000
            </Typography>
            <Stack></Stack>
            <Typography color={"#9295AA"} fontSize={17} fontWeight={400}>
              dlfwjbknlm,l Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Voluptatum obcaecati magni inventore veniam amet natus
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
