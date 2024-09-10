import { Box, Stack } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box 
    // sx={{ backgroundColor: "#f5f5fa" }} 
    padding={"20px"}
    >
      <Stack direction={"column"} >
        <Stack
          direction="column"
          padding={"30px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box component={"h2"}
          fontSize={'32px'}
          sx={{color:"#2A4F55"}}
          >Our Services</Box>
          <Box
            component={"img"}
            // ml={{ xs: "10px", md: "55px" }}
            src="/servsvg.svg"
            
            sx={{
              width: { xs: "50vw", md: "15vw" },
              // opacity: "0.3",
            }}
          />
        </Stack>
        <Stack
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={2}
          // pl='55px'
        >
          {/* second layer */}
          <Stack direction={{ md: "row", xs: "column" }}
          spacing={2}
          >
            {/* third layer */}
            <Stack direction="row"
            spacing={5}
            >
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt2.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Data</Box>
                </Stack>
              </Box>
              {/* box ending */}
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt3.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Airtime</Box>
                </Stack>
              </Box>
              {/* box ending */}
            </Stack>
            <Stack direction="row"
            spacing={5}
            >
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt4.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box>Electricity</Box>
                </Stack>
              </Box>
              {/* box ending */}
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Data Card Printing</Box>
                </Stack>
              </Box>
              {/* box ending */}
            </Stack>
          </Stack>
          {/* 2 second layer */}
          <Stack direction={{ md: "row", xs: "column" }}
          spacing={2}
          >
            {/* third layer */}
            <Stack direction="row"
            spacing={5}
            >
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt5.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Bulk SMS</Box>
                </Stack>
              </Box>
              {/* box ending */}
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt7.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Result Checker</Box>
                </Stack>
              </Box>
              {/* box ending */}
            </Stack>
            <Stack direction="row"
            spacing={5}
            >
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt1.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Other Subscriptions</Box>
                </Stack>
              </Box>
              {/* box ending */}
              {/* Box beginning */}
              <Box
                sx={{
                  boxShadow: "0px 0.5px 2.7px rgb(0 0 0 / 16%)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  height: { md: "220px", xs: "201px" },
                  width: { md: "200px", xs: "180px" },
                  backgroundColor: "#ffff",
                }}
                display="flex"
                alignItems={"center"}
              >
                <Stack
                  direction="column"
                  justifyContent={"space-around"}
                  height="100%"
                  padding="10px"
                >
                  <Box
                    sx={{ backgroundColor: "#f5f5fa" }}
                    padding={"20px"}
                    borderRadius={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"img"}
                      width="100px"
                      height="100px"
                      src="/smt6.svg"
                      sx={
                        {
                          // width: { xs: "50vw", md: "100vw" },
                          // opacity: "0.3",
                        }
                      }
                    />
                  </Box>
                  <Box sx={{}}>Cable Subscriptions</Box>
                </Stack>
              </Box>
              {/* box ending */}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Services;

// <Stack
// direction='column'

// justifyContent={"center"}
// alignItems={"center"}
// textAlign={"center"}
// spacing={1}
// // pl='55px'

// >
// <Stack
// // direction={{ md: "row", xs: "column" }}
// direction={{md:'row', xs:'column'}}
// // sx={{ overflowY:"auto"}}
// justifyContent={"center"}
// alignItems={"center"}
// textAlign={"center"}
// spacing={3}

// >
//

//
// </Stack>
// </Stack>
