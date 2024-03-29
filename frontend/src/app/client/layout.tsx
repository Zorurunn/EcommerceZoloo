"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AuthProvider } from "@/components/provider/AuthProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { theme } from "@/theme";
import { DataProvider } from "@/components/provider/DataProvider";
import { Footer } from "./_components/header&footer/Footer";
import Header from "./_components/header&footer/Header";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E Commerce",
//   description: "Welcome to my web",
// };
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
