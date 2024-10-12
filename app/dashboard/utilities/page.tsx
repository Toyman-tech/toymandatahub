import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box 
    display='flex'
    justifyContent={'center'}
    
    width='100%'
    height='100%'
    >
    <Box
      width="100%"
      // display='flex'
      // justifyContent={'center'}
      px="10px"
      pt={{ md: "40px" }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        // alignItems={'center'}
        pt="40px"
        spacing={2}
      >
        <Box
          component="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            //   alignItems:'center'
          }}
        >
          Avaailable Utilities
        </Box>
        <Box component='div'
          display="flex"
          justifyContent={"center"}
          alignItems={'center'}
         
        >
            <Box  width={{ xs: "100%", md: "50%" }}
          sx={{
            backgroundColor: "#ffff",
            padding: "30px",
          }}>
          <Stack direction={{md:'row', sm:'row', xs:"column"}} spacing={2}
          justifyContent={'center'}
          alignItems={'center'}
          >
            <Box
            display={'flex'}

            sx={{
                  height: 45.7, // Custom height
                  textDecoration: "none",
                  color: "#ffff",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "initial",
                  fontSize: "20px",
                  fontWeight: 200,
                  backgroundColor: "#2A4F55",
                  ":hover": {
                    backgroundColor: "#457B83",
                  },
                }}>
              <Link
                href="/dashboard/cable"
               underline="none"
               color='#ffff'
               display={'flex'}
               height='100%'
               justifyContent={'center'}
               alignItems={'center'}
               textAlign={'center'}
               padding={'20px'}
              >
                Cable Subscription
              </Link>
            </Box>
            <Box
            display={'flex'}

            sx={{
                  height: 45.7, // Custom height
                  textDecoration: "none",
                  color: "#ffff",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "initial",
                  fontSize: "20px",
                  fontWeight: 200,
                  backgroundColor: "#2A4F55",
                  ":hover": {
                    backgroundColor: "#457B83",
                  },
                }}>
              <Link
                href="/dashboard/electricity"
               underline="none"
               color='#ffff'
               display={'flex'}
               height='100%'
               width='100%'
               justifyContent={'center'}
               alignItems={'center'}
               textAlign={'center'}
               padding={'20px'}
              >
                Electricity Bill
              </Link>
            </Box>
          </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
    </Box>
  );
}
