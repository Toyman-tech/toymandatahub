"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "@/lib/actions/user.actions";
import { createSessionClient } from "@/appwrite/config";

const AffiliateCard = () => {
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUser = async () => {
      const session = Cookies.get("session");
      try {
        // const userr = await getUser(session); // Fetch user with session
        const { account } = await createSessionClient(
          session
        );
       const userr = await account.get();
        setUser(userr); // Store user in state
        if (typeof window !== "undefined") {
          localStorage.setItem("tee", userr?.$id); // Save to localStorage
        }
        console.log("User data:", userr);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser(); // Fetch user data on component mount
  }, []); // Empty dependency array to ensure it runs once on mount

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("https://toymandatahub.vercel.app");
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
              https://toymandatahub.vercel.app
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
