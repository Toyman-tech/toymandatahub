"use client";

import { WhatsApp } from "@mui/icons-material";
import { Button, Stack, Tooltip } from "@mui/material";
import React from "react";

export default function WhatsappChat() {
  return (
    <a target="_blank" href="https://wa.me/2349039242601">
      <Tooltip title="Chat with us on whatsapp">
        <Stack
          component={Button}
          position={"fixed"}
          bottom={"12%"}
          right={"2%"}
          bgcolor={"#25D366"}
          p={1}
          zIndex={50}
          minWidth={{ xs: 45, md: 50 }}
          width={{ xs: 45, md: 50 }}
          height={{ xs: 45, md: 50 }}
          borderRadius={"50%"}
          sx={{
            ":hover": {
              border: "1px solid #25D366 !important",
              color: "#25D366 !important",
            },
            ".icon :hover": {
              color: "#25D366 !important",
            },
            animation: "scroll-down 4s infinite ease-out",
          }}
        >
          <WhatsApp
            className="icon"
            sx={{
              fontSize: { xs: 30, md: 40 },
              color: "white",
              ":hover": {
                color: "#25D366 !important",
              },
            }}
          />
        </Stack>
      </Tooltip>
    </a>
  );
}
