import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const stats = [
  {
    title: "Total Fund",
    amount: "22,000.00",
    img: "/dashboardassets/arrowdown.svg",
    col:"#21AE95"
  },
  {
    title: "Total Spent",
    amount: "10,000.00",
    img: "/dashboardassets/arrowdown.svg",
    col:"#FFAB23"
  },
  {
    title: "Total Referral Earned",
    amount: "120,000.00",
    img: "/dashboardassets/arrowdown.svg",
    col:"#5C23FF"
  },
];

const Features = () => {
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
