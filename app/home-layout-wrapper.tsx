import React from "react";

// import { Footer } from "@/components/Footer/Footer";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={dm_sans.className} style={{overflowX: 'hidden'}}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
