"use client"
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import {useRef, useState} from 'react';

const Notif = () => {
  

  return (
    <Box
      display="flex"
      mt="30px"
      justifyContent='center'
      
    >
      <Stack direction="column" 
      padding="15px" 
      spacing={1}
      sx={{
        backgroundColor: "#457B83",
        borderRadius: "12px",
        color: "#ffff",
       
      }}
      maxWidth={'400px'}
      justifyContent={'space-around'}
      height='100%'
      >
        <Typography>Notifications:</Typography>
        <Typography>
          Monnify Payment sucessful and your account has been credited with a sum of ₦300
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
                  fontSize: "13px",
                  fontWeight: 200,
                  backgroundColor: "#2A4F55",
                  ":hover": {
                    backgroundColor: "#2A4F55",
                  },
                }}>
              <Link
                href="/dashboard"
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
                All Messages 
              </Link>
            </Box>
      </Stack>
    </Box>
  );
};

export default Notif;
