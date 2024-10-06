import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const transacts = [
  { title: "My Orders", img: "/dashboardassets/shopping.svg", link: "/dashboard/orders" },
  { title: "Payments", img: "/dashboardassets/list.svg", link: "/dashboard/payments" },
  { title: "Wallet Summary", img: "/dashboardassets/list.svg", link: "/dashboard/summary" },
];

const Trasactions = () => {
  return (
    <Box 
     mt="30px" 
    >
      <Stack direction={"column"}
      spacing={2}
      >
        <Box component={"h2"} fontSize={"25px"} sx={{ color: "#2A4F55" }}>
           Transactions
        </Box>
        <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
          {transacts.map((transact) => (
            <Box key={transact.title}>
              <Link href={transact.link}>
              <Box
                sx={{
                  backgroundColor: "#ffff",
                  // padding:'20px',
                  borderRadius: "6px",
                //   boxShadow:'black'
                 //   boxShadow:'black'
                 ":hover":{
                  backgroundColor: "#457B83c4",
                  color:'#ffff',
                  boxShadow:'black'
                 }
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={"start"}
                  alignItems={"center"}
                  p="10px"
                >
                  <Box
                    sx={{
                      backgroundColor: "#2A4F55",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    borderRadius={"50px"}
                  >
                    <Box
                      component={"img"}
                      // ml={{ xs: "10px", md: "55px" }}
                      display={'flex'}
                      justifyContent={'center'}
                      src={transact.img}
                      padding={"7px"}
                    />
                  </Box>
                  <Typography color="#2A4F55">{transact.title}
                  </Typography>
                </Stack>
              </Box>
              </Link>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Trasactions;
