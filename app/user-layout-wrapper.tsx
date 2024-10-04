import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import WhatsappChat from "@/components/Whatsapp";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100vw">
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <WhatsappChat />
      </Box>

      <Footer />
    </Box>
  );
};

export default UserLayout;
