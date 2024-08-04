import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Stack direction="column" display="flex" spacing={0}>
        <Box
          component="div"
          sx={{
            display: "flex",
            // width: "100vw",
            height: "70vh",
            position: "relative",
            mx: "0px",
          }}
        >
          <Image
            src="/landingpage.png"
            layout="fill"
            objectFit="cover"
            alt="image"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Stack
            direction={"column"}
            spacing={2}
            
            sx={{ background: "linear-gradient(to top, #2222229c, #222222c9)" 
          }}
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
            zIndex={2}
          >
            <Box 
            justifyContent={"center"} 
            alignItems={"center"}
            >
              <Stack
                direction="column"
                justifyContent={"center"} 
                alignItems={"center"}
                spacing={1}
                width={"100vw"}
                // padding={"30px"}
                display={"flex"}
              >
                <Box component='h4' sx={{ color: "#edf2f7" }}
                justifyContent={'start'}
                alignItems={'start'}
                
                >
                  Welcome To
                </Box>
                <Box component="h1" sx={{ color: "#ffffff" }}>
                  TOYMAN DATA HUB
                </Box>
                <Box
                px='20px'
                  component="h4"
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={{ md: "flex", xs: "none" }}
                  textAlign={"center"}
                  sx={{ color: "#ffffff" }}
                  maxWidth={"558px"}
                >
                  Welcome to a technology platform that provides instant and
                  smooth services at the best possible price without
                  compromisung quality.
                </Box>
                <Box
                  component="h5"
                  display={{ md: "none", xs: "flex" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                  sx={{ color: "#ffffff" }}
                  maxWidth={"558px"}
                >
                  Welcome to a technology platform that provides instant and
                  smooth services at the best possible price without
                  compromisung quality.
                </Box>
              </Stack>
            </Box>
            <Stack direction={'row'} spacing={5}>
            <Button
              type="submit"
              sx={{
                width: {xs:"40vw", md:'20vw'},
                height: 45.7, // Custom height
                borderRadius: "8px",
                boxShadow: "none",
                textTransform: "initial",
                color:'#643406fa',
                fontSize: "13px",
                fontWeight: 700,
                backgroundColor: "#ababab",
              }}
              variant="contained"
            >
              Sign-In
            </Button>
            <Button
              type="submit"
              sx={{
                width: {xs:"40vw", md:'20vw'},
                height: 45.7, // Custom height
                borderRadius: "8px",
                boxShadow: "none",
                textTransform: "initial",
                fontSize: "15px",
                color:'#643406fa',
                fontWeight: 700,
                backgroundColor: "#ababab",
              }}
              variant="contained"
            >
              Register
            </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default LandingPage;
