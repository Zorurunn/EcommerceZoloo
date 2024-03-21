import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AuthProvider } from "@/components/provider/AuthProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { theme } from "@/theme";
import { DataProvider } from "@/components/provider/DataProvider";
import Navbar from "./_components/header&footer/Navbar";
import { Footer } from "./_components/header&footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Commerce",
  description: "Welcome to my web",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <DataProvider>
                <Navbar />
                {children}
              </DataProvider>
              <Footer />
            </AuthProvider>
            <ToastContainer />
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
