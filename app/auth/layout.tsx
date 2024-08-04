import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
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
  return children;
}