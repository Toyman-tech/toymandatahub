import { Box, Button, Link, Stack } from "@mui/material";
import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import MobileTopbar from "./MobileTopbar";
import MainTopbar from "./MainTopbar";
const Topbar = () => {
  return (
    <React.Fragment>
      <Box
        display={{
          md: "none",
          xs: "flex",
        }}
        width="100vw"
      >
        <MobileTopbar/>
      </Box>
      <Box
        display={{
          md: "flex",
          xs: "none",
        }}
        // width="100vw"
      >
        <MainTopbar/>
      </Box>
    </React.Fragment>
  );
};

export default Topbar;
