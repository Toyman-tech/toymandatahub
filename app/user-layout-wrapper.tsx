import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

const UserLayout = ({ children }: { children: React.ReactNode }) => {  
  return (
    <Box width='100vw'>
  
          <Navbar />
          {children}
          <Footer />
    
    </Box>
  );
};

export default UserLayout;
