"use client"
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import {useRef, useState} from 'react';

const Faqs = () => {
  

  return (
    <Box
      display="flex"
      mt="30px"
      justifyContent='center'
      
    >
      <Stack direction="column" 
      padding="15px" 
      spacing={1}
      maxWidth={'400px'}
      sx={{
        backgroundColor: "#457B83",
        borderRadius: "12px",
        color: "#ffff",
       
      }}
      height={'100%'}
      justifyContent={'space-around'}
      >
        <Typography>FAQS:</Typography>
        <Typography>
          Please go through them to have a better knowledge of this platform
        </Typography>
        <Box
            display={'flex'}

            sx={{
                  height: 45.7, // Custom height
                  textDecoration: "none",
                  color: "#ffff",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "initial",
                  fontSize: "17px",
                  fontWeight: 200,
                  backgroundColor: "#2A4F55",
                  ":hover": {
                    backgroundColor: "#2A4F55",
                  },
                }}>
              <Link
                href="/dashboard/faqs"
               underline="none"
               color='#ffff'
               display={'flex'}
               height='100%'
               justifyContent={'center'}
               alignItems={'center'}
               textAlign={'center'}
               padding={'20px'}
               width='100%'
              >
                ? FAQs 
              </Link>
            </Box>
      </Stack>
    </Box>
  );
};

export default Faqs;
