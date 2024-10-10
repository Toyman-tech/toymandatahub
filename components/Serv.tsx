import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const availables = [
  { title: "Data", img: "/dashboardassets/wifi.svg", link: "/dashboard/data" },
  { title: "Airtime", img: "/dashboardassets/phone.svg", link: "/dashboard/airtime" },
  { title: "Result Checker", img: "/dashboardassets/lucidecheck-big.svg", link: "/dashboard/result-checker" },
  { title: "Cable", img: "/dashboardassets/lucidetv.svg", link: "/dashboard/cable" },
  { title: "Electricity", img: "/dashboardassets/lucidebulb.svg", link: "/dashboard/electricity" },
  { title: "Data Card Printing", img: "/dashboardassets/creditcard.svg", link: "/dashboard/coupon" },
  // { title: "Bulk SMS", img: "/dashboardassets/messagetext.svg", link: "/dashboard/bulk-sms" },
];

const Serv = () => {
  return (
    <Box 
     mt="30px" 
    >
      <Stack direction={"column"}
      spacing={2}
      >
        <Box component={"h2"} fontSize={"25px"} sx={{ color: "#2A4F55" }}>
          Our Services
        </Box>
        <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
          {availables.map((available) => (
            <Box key={available.title} 
            >
              <Link href={available.link}>
              <Box
                sx={{
                  backgroundColor: "#ffff",
                  // padding:'20px',
                  borderRadius: "6px",
                //   boxShadow:'black'
                 ":hover":{
                  backgroundColor: "#457B83c4",
                  color:'#ffff',
                  boxShadow:'black'
                },
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
                      src={available.img}
                      padding={"7px"}
                    />
                  </Box>
                  <Typography color="#2A4F55">{available.title}
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

export default Serv;
