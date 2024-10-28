"use client"
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


const Features = () => {
  const [amount, setAmount] = useState('0')
  useEffect(() => {
    const fetchUser = async ()=>{
      // Ensure the code runs on the client-side
    if (typeof window !== "undefined") {
      const storedUserId2 = localStorage.getItem("leo");
      // console.log('fired')
      if(storedUserId2){
        setAmount(storedUserId2)
      }
    }
    }
    fetchUser();
  }, []); // Empty array ensures this runs only once, when the component is mounted
  const stats = [
    {
      title: "Total Fund",
      amount: `${amount}`,
      img: "/dashboardassets/arrowdown.svg",
      col:"#21AE95"
    },
    {
      title: "Total Spent",
      amount: "0.00",
      img: "/dashboardassets/arrowdown.svg",
      col:"#FFAB23"
    },
    {
      title: "Total Referral Earned",
      amount: "25.00",
      img: "/dashboardassets/arrowdown.svg",
      col:"#5C23FF"
    },
  ];
  
  return (
    <Box
     width='100%'
    >
      <Stack direction={{ md: "row", xs: "column" }}
      justifyContent={'space-between'}
      // alignItems={'center'}
      // width={'550px'}
      spacing={2}>
        {stats.map((stat) => (
          <Box key={stat.title}>
            <Box
            width={{md:'300px', xs:'100%'}}
              sx={{
                backgroundColor: "#ffff",
                // padding:'20px',
                borderRadius: "6px",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent={"start"}
                alignItems={"center"}
                py="10px"
              >
                <Box
               
                  sx={{
                    backgroundColor:`${stat.col}`,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  borderRadius={"6px"}
                >
                  <Box
                    component={"img"}
                    // ml={{ xs: "10px", md: "55px" }}
                    src={stat.img}
                    padding={"7px"}
                  />
                </Box>
                <Stack direction={"column"}>
                  <Typography>{stat.title}</Typography>
                  <Typography>₦ {stat.amount}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Features;
