import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
import { Box, Container, Stack } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TOYMANDATAHUB",
    default: "TOYMAN DATAHUB",
  },
  description: "TOYMAN DATAHUB IS A VTU PLATFORM FOR ALL NETWORKS",
  icons: "/next.svg",
};

export default function layout({ children }: { children: ReactNode }) {
    return (
    <html lang='en'>
        <body className={dmSans.className}
        suppressHydrationWarning={true}
        >
          <Topbar />
          <Stack direction={'row'}>
            <Sidebar />
            <section >
              <Box sx={{
             backgroundColor:'#E3E3E3'
            }}>{children }</Box>
            </section>
          </Stack>
          <Bottombar />
        </body>
      </html>
  )
}