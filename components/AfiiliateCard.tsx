"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";


const AffiliateCard = () => {
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState(null); // State to store user data

  
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("https://www.toymandatahub.com");
    setCopied(true);
    if (copied) {
      alert("Link copied successfully");
    }
  };

  return (
    <Box display="flex" mt="30px" justifyContent="center">
      <Stack
        direction="column"
        padding="15px"
        spacing={1}
        sx={{
          backgroundColor: "#457B83",
          borderRadius: "12px",
          color: "#fff",
        }}
      >
        <Typography>Affiliate link</Typography>
        <Typography>
          Earn a 5% commission on the first service purchased by friends you
          refer!
        </Typography>
        <Box
          sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="90%"
          >
            <Typography color="black">
              https://www.toymandatahub.com
            </Typography>
            <Button
              sx={{
                justifyContent: "center",
                display: "flex",
                borderRadius: "none",
                boxShadow: "none",
                textTransform: "initial",
                fontSize: "15px",
                backgroundColor: "#fff",
                fontWeight: 200,
                color: "#2A4F55",
                ":hover": {
                  backgroundColor: "transparent",
                  fontWeight: 500,
                  color: "#2A4F55",
                  boxShadow: "none",
                },
              }}
              variant="contained"
              type="submit"
              onClick={handleCopy}
            >
              <Box
                component={"img"}
                src="/dashboardassets/copy.svg"
                padding={"7px"}
              />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AffiliateCard;
