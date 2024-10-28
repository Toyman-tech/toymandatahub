"use client";
import { WhatsApp } from "@mui/icons-material";
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import { useRef, useState } from "react";

const Support = () => {
  return (
    <Box display="flex" mt="30px" justifyContent="center"
    // maxWidth={'30px'}
    >
      <Stack
        direction="column"
        padding="15px"
        spacing={1}
        sx={{
          backgroundColor: "#457B83",
          borderRadius: "12px",
          color: "#ffff",
        }}
        maxWidth={'400px'}
      >
        <Typography>Support Team:</Typography>
        <Typography>
          Have anything to say to us? Please contact our Support Team on
          Whatsapp
        </Typography>
        <Box
          display={"flex"}
          sx={{
            width:"60%",
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
          }}
        >
          <Link
            target="_blank" 
            href="https://wa.me/2349039242601"
            underline="none"
            color="#ffff"
            display={"flex"}
            height="100%"
            justifyContent={"start"}
            alignItems={"center"}
            textAlign={"center"}
            padding={"20px"}
            width="100%"
          >
            <Stack direction="row"
            justifyContent={'center'}
            alignItems='center'
            spacing={2}
            >
              <WhatsApp
                className="icon"
                sx={{
                  fontSize: { xs: 20, md: 30 },
                  color: "white",
                  ":hover": {
                    color: "#25D366 !important",
                  },
                }}
              />
              <Typography>Whatsapp us</Typography>
            </Stack>
          </Link>
        </Box>
        <Box
          display={"flex"}
          sx={{
            width:'85%',
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
          }}
        >
          <Link
            target="_blank" 
            href="https://wa.me/2349039242601"
            underline="none"
            color="#ffff"
            display={"flex"}
            height="100%"
            justifyContent={"start"}
            alignItems={"center"}
            textAlign={"center"}
            padding={"20px"}
            width="100%"
          >
          <Stack direction="row"
            justifyContent={'center'}
            alignItems='center'
            spacing={1}
            >
              <WhatsApp
                className="icon"
                sx={{
                  fontSize: { xs: 20, md: 30 },
                  color: "white",
                  ":hover": {
                    color: "#25D366 !important",
                  },
                }}
              />
              <Typography>Join Our Whastaap group</Typography>
            </Stack>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Support;
