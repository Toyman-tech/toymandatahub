import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Box, Container } from "@mui/material";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TOYMANDATAHUB",
    default: "Toyman DataHub - Buy Airtime, Data, Pay Bills, Cable Subscription, and more..",
  },
  description: "Toyman DataHub offers affordable VTU services for buying airtime, data for all networks, paying electricity bills, cable subscriptions, and scratch cards online. Fast, reliable, and secure.",
  keywords: [
    'Toyman data hub',
    'Toyman datahub',
    'datahub',
    'vtu',
    'Buy Airtime online',
    'Data subscription for all networks',
    'Pay Electricity Bills Online',
    'Cable Subscription Payment',
    'Scratch Card Purchase',
    'Cheap Airtime VTU',
    'Reliable VTU Service'
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph : {
    type: "website",
    title:'Toyman DataHub - Buy Airtime, Data, Pay Bills, Cable Subscription, and more..',
    description: 'Get fast and secure VTU services at Toyman DataHub. Buy airtime, data, pay bills, and more!',
    url: 'https://www.toymandatahub.com',
    siteName: 'Toyman DataHub',
    locale: 'en_us'
    // images: [
    //   {
    //     url: ''
    //   }
    // ]
  }
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}