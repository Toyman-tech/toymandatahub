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
        sx={{ padding: "15px", backgroundColor: "#fffffff", color: "black" }}
        position={"relative"}
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
                color: "#3f2828",
              },
            }}
          >
            TOYMANDATA
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
                    color: "#3f2828",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                underline="none"
                color="black"
                p="5px"
                sx={{
                  ":hover": {
                    backgroundColor: "#ababab",
                    color: "#3f2828",
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
                    color: "#3f2828",
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
                    color: "#3f2828",
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
                    color: "#3f2828",
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
                color: "#3f2828",
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
              color: "#643406fa",
              fontWeight: 700,
              ":hover": {
                backgroundColor: "#ababab",
                color: "#3f2828",
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
              py: "20px",
              color: "#3f2828",
              backgroundColor: "#ffff",
            }}
          >
            <Stack
              direction="column"
              justifyContent={"center"}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              fontWeight={700}
            >
              <Box sx={{ fontSize: "25px" }}>
                <Stack direction="column" spacing={3} px="3px">
                  <Link
                    href="/"
                    underline="none"
                    color="#643406fa"
                    p="10px"
                    sx={{
                      width: "100vw",
                      ":hover": {
                        backgroundColor: "#ababab",
                        color: "#3f2828",
                      },
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    underline="none"
                    color="#643406fa"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#3f2828",
                      },
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    underline="none"
                    color="#643406fa"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#3f2828",
                      },
                    }}
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/"
                    underline="none"
                    color="#643406fa"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                      },
                    }}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    underline="none"
                    color="#643406fa"
                    p="10px"
                    sx={{
                      ":hover": {
                        width: "100vw",
                        backgroundColor: "#ababab",
                        color: "#3f2828",
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
