"use client";
import { Box, Button, Link, Slide, Stack } from "@mui/material";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{ padding: "10px", backgroundColor: "#ffff", color: "black", 
        position: 'sticky',
        top:0,
        zIndex:5,
      }}
        
      
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ padding: "1px" }}
          alignItems={"center"}
          
        >
          <Link
            href="#"
            underline="none"
            color="black"
            p="5px"
            sx={{
              ":hover": {
                color: "#000000",
              },
            }}
          >
            <Box
                  
                  component={"img"}
                    width='70px'
                    height='35px'
                  src="/logo.svg"
                  sx={
                    {
                      // width: { xs: "50vw", md: "100vw" },
                      // opacity: "0.3",
                    }
                  }
                />
            
          </Link>
          <Box sx={{ fontSize: "13px" }}>
            <Stack
              direction="row"
              spacing={3}
              display={{ md: "flex", xs: "none" }}
              px="3px"
            >
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#000000",
                  },
                }}
              >
                Home
              </Link>
              <Link
                    href="/dashboard"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                      },
                    }}
                  >
                    Dashboard
                  </Link>
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#000000",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#000000",
                  },
                }}
              >
                Our Services
              </Link>
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#000000",
                  },
                }}
              >
                Blog
              </Link>
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#000000",
                  },
                }}
              >
                Contact
              </Link>
            </Stack>
          </Box>
          <Link
            href="/auth/sign-in"
            display={{ md: "flex", xs: "none" }}
            underline="none"
            color="black"
            p="5px"
            sx={{
              ":hover": {
                backgroundColor: "#ababab",
                color: "#000000",
              },
            }}
          >
            Sign-in
          </Link>
          <Button
            type="submit"
            onClick={handleClick}
            sx={{
              display: { md: "none", xs: "flex" },
              // borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "35px",
              padding: "5px",
              justifyContent: "center",
              color: "#2A4F55",
              fontWeight: 700,
              ":hover": {
                backgroundColor: "#ababab",
                color: "#2A4F55",
              },
              backgroundColor: "#ffff",
            }}
            variant="contained"
          >
            {/* <IoCloseSharp /> */}
            {/* <CiMenuFries />  */}
            {toggle ? <IoCloseSharp /> : <HiMenuAlt3 />}
          </Button>
        </Stack>
        {/* toggleeeeeeee */}
        <Slide direction="left" in={toggle} mountOnEnter unmountOnExit>
          {/* {toggle &&  */}
          <Box
            position={"absolute"}
            left={0}
            width={"100vw"}
            height={"100vh"}
            display={"flex"}
            zIndex={5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              color: "#000000",
              backgroundColor: "#ffff",
              scrollbarWidth:"none"
            }}
            onClick={()=>{
              setToggle(false)
            }}
          >
            <Stack
              direction="column"
              justifyContent={"center"}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              fontWeight={700}
              sx={{
                scrollbarWidth:"none"
              }}
            >
              <Box sx={{ fontSize: "25px" }}>
                <Stack direction="column" spacing={3} px="3px">
                  <Link
                    href="/"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      width: "100vw",
                      ":hover": {
                        backgroundColor: "#ababab",
                        color: "#000000",
                      },
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/dashboard"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                      },
                    }}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#000000",
                      },
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#our-services"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#000000",
                      },
                    }}
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/#footer"
                    underline="none"
                    color="#2A4F55"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#000000",
                      },
                    }}
                  >
                    Contact
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Box>
          {/* } */}
        </Slide>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
