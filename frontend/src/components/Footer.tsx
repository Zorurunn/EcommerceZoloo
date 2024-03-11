"use client"

import { Stack, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
    const pathname = usePathname();

    return (


        <Stack
            sx={{
                bgcolor: "#12A795",
                py: "114px"
            }}
        >
            <Stack
                gap="40px"
                sx={{
                    alignItems: "center"
                }}
            >
                <Stack
                    direction="row"
                    justifyContent={"center"}
                    alignContent="center"
                    gap="18px">
                    <img src="/Logo.png" alt="" />
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "30px"
                        }} >
                        Ecommerce
                    </Typography>
                </Stack>
                <Stack direction="row"
                    alignItems="center"
                    width="1200px"
                    justifyContent={"space-between"}
                    color={"#fff"}
                    style={{
                        fontWeight: 590,
                        fontSize: 16,
                        textDecorationLine: "underline",
                        textUnderlinePosition: "under"
                    }}
                >
                    <Link href="/"
                    >
                        Холбоо барих
                    </Link>
                    <Link href="/">
                        Үйлчилгээний нөхцөл
                    </Link>
                    <Link href="/">
                        Хүргэлтийн бүс
                    </Link>
                    <Link href="/" >
                        Нууцлалын бодлого
                    </Link>

                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width="1200px"
                    borderBottom={1} borderColor="#fff"
                >
                </Stack>
                <Stack direction="row"
                    gap="18px">
                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/twitter.png" alt="" />
                </Stack>
                <Stack
                    color="#fff"
                    gap="8px"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                    alignItems={"center"}
                >
                    <Typography>© 2024 Pinecone Ecommmerce LLC </Typography>
                    <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>


                </Stack>
            </Stack>
        </Stack>


    );
}
