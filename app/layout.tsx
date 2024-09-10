import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Wrapper from "@/client/wrapper";
import { Box, Container } from "@mui/material";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TOYMANDATAHUB",
    default: "TOYMAN DATAHUB",
  },
  description: "TOYMAN DATAHUB IS A VTU PLATFORM FOR ALL NETWORKS",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className} suppressHydrationWarning={true}>
        <Wrapper>
         {children}
          </Wrapper>
      </body>
    </html>
  );
}
