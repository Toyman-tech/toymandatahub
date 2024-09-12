import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const availables = [
  { title: "Data", img: "/dashboardassets/wifi.svg" },
  { title: "Airtime", img: "/dashboardassets/phone.svg" },
  { title: "Result Checker", img: "/dashboardassets/lucidecheck-big.svg" },
  { title: "Cable", img: "/dashboardassets/lucidetv.svg" },
  { title: "Electricity", img: "/dashboardassets/lucidebulb.svg" },
  { title: "Data Card Printing", img: "/dashboardassets/creditcard.svg" },
  { title: "Bulk SMS", img: "/dashboardassets/messagetext.svg" },
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
            <Box key={available.title}>
              <Box
                sx={{
                  backgroundColor: "#ffff",
                  // padding:'20px',
                  borderRadius: "6px",
                //   boxShadow:'black'
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
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Serv;
