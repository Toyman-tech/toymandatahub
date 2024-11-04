"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Atm from "./Atm";
import Cookies from "js-cookie";
import { createSessionClient } from "@/appwrite/config";
import {
  getUserWalletDetails,
  getWalletForUser,
} from "@/lib/actions/user.actions";
import { parseStringify } from "@/lib/utils";

const Card = () => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const fetchUser = async () => {
      const session = Cookies.get("session");
      if (!session) {
        console.error("No session found");
        return;
      }
  
      try {
        const { account } = await createSessionClient(session);
        const user = await account.get();
  
        if (user && typeof window !== "undefined") {
          localStorage.setItem("tee", user.$id);
  
          // Fetch wallet details
          const wallet = await getWalletForUser(user.$id);
          if (wallet) {
            // console.log("Wallet data:", wallet);
  
            // Set amount
            const availableAmount = wallet.balance - 9900;
            // setAmount(availableAmount);
  
            // Optional: Store formatted amount in local storage
           
            const aza = localStorage.getItem('acct')
            // If needed, fetch wallet details based on account reference
            if (wallet.account_reference) {
              const walletData = await getUserWalletDetails(wallet.account_reference);
              // console.log("Wallet details data:", walletData);
              const totalAmount = walletData?.totalAmount.toLocaleString();
              setAmount(totalAmount)
              localStorage.setItem("leo", totalAmount);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user or wallet:", error);
      }
    };
  
    fetchUser();
  }, []);
  
  return (
    <Box
      // padding="30px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffff",
        width: "100%",
      }}
    >
      <Stack
        direction={"column"}
        spacing={3}
        width={"100%"}
        alignItems="center"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#457B83",
            width: { xs: "90vw", md: "100%" },
            height: "220px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}
        >
          <Stack
            direction="column"
            display="flex"
            height="100%"
            width={"100%"}
            //  position={'relative'}
            justifyContent={"space-between"}
            alignItems="center"
            spacing={1}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "90vw", md: "100%" },
                backgroundColor: "#ffff",
                color: "#ffff",
              }}
            >
              .
            </Box>

            <Stack
              direction="column"
              display="flex"
              height="100%"
              //  position={'relative'}
              justifyContent={"space-between"}
              // alignItems="center"
              padding={"15px"}
              width={"80%"}
            >
              <Box component="h3" display="flex" justifyContent={"start"}>
                Wallet Balance
              </Box>
              <Typography
                fontSize={"35px"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                ₦ {amount?.toLocaleString()}
              </Typography>
              <Box
                component="h3"
                sx={{ display: "flex", justifyContent: "end" }}
              >
                Refer to Earn
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Atm />
      </Stack>
    </Box>
  );
};

export default Card;
