'use client'
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Atm from "./Atm";
import Cookies from "js-cookie";
import { createSessionClient } from "@/appwrite/config";
import { getWalletForUser } from "@/lib/actions/user.actions";
import { parseStringify } from "@/lib/utils";

const Card = () => {
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    
    const fetchUser = async () => {
      const session = Cookies.get("session");
      try {
        // const userr = await getUser(session); // Fetch user with session
        const { account } = await createSessionClient(session);
        const userr = await account.get();
        if (typeof window !== "undefined") {
            localStorage.setItem("tee", userr?.$id);
        }
        //  get wallet details
        const wallet = await getWalletForUser(userr?.$id)
        console.log("data", wallet)
        setAmount(wallet?.balance - 9900)
        if (typeof window !== "undefined") {
          const newTot = wallet?.balance - 9900
          const newtotStr = newTot.toLocaleString()
          const storedUserId = localStorage.setItem("leo", newtotStr); // Retrieve the value from localStorage
        }
        //  Update state with the stored user ID
       
        // setUser(userr); // Store user in state
        // setName(user?.name);
        // setEmail(user?.email)
        // console.log("User data:", userr);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser(); // Fetch user data on component mount
  }, []); // Empty dependency array to ensure it runs once on  
  return (
    <Box
      // padding="30px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffff",
        width:"100%"
      }}
    >
      <Stack direction={"column"} spacing={3}
      width={'100%'}
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
            width={'100%'}
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
              padding={'15px'}
              width={'80%'}
            >
              <Box component="h3" display="flex" justifyContent={"start"}>
                Wallet Balance
              </Box>
              <Typography  fontSize={"35px"}
              sx={{display:'flex', 
              justifyContent:"center",
            }}
              >
                ₦ {amount.toLocaleString()}
              </Typography>
              <Box component="h3"
                sx={{display:'flex', 
                justifyContent:"end",
                
              }}
              >Refer to Earn</Box>
            </Stack>
          </Stack>
        </Box>
        <Atm />
      </Stack>
    </Box>
  );
};

export default Card;
