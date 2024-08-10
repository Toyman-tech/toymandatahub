import { Box, Stack } from "@mui/material";
import React from "react";

const WhyUs = () => {
  return (
    <Box
     id='#about-us'
      sx={{
        backgroundColor: "#664526",
        color: "#ffffff",
      }}
      display={"flex"}
      justifyContent={"center"}
    >
      <Stack direction="column" padding={"30px"}
       justifyContent={'center'}
       alignItems={'center'}
      >
        <Box component="h2" pb="30px">
          Why Our Service ?
        </Box>
        <Stack
        spacing={{md:15}}
          direction={{ md: "row-reverse", xs: "column" }}
          justifyContent={{xs:"center", md:'space-between'}}
          alignItems={{xs:"center", }}
        >
          <Box padding="10px" justifyContent={"center"} 
            alignItems={"center"}
            >
            <Box
              component={"img"}
              width={{md:"280px", xs:'180px'}}
              height={{md:"280px", xs:'180px'}}
              src="/pana.svg"
              sx={
                {
                  // width: { xs: "50vw", md: "100vw" },
                  // opacity: "0.3",
                }
              }
            />
          </Box>
          <Box>
            <Stack direction={"column"} spacing={3}>
              <Box component="p"
               justifyContent={{xs:'center', md:'space-between'}}
               alignItems={'center'}
               textAlign={{xs:'center', md:'start'}}
               padding={'10px'}
               maxWidth={{md:'390px'}}
              >
                We offer instant recharge of Airtime, Data bundles, CableTV (Dstv, GoTV and Startime), Electricity Bill,
                Payments and more...
              </Box>
              <Box
               display='flex'    
              >
                <Stack direction="column"
                justifyContent={'left'}
                //  alignItems={'center'}
                 spacing={2}
                >
                  <Stack direction="row"
                    alignItems={'center'}
                    display='flex'
                    spacing={2}
                  >
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                      We are fast
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                        Automated Services
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                        
                    </Box>100% Secured
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                        We are Reliable
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                        Always Online
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={"img"}
                    //   width="180px"
                    //   height="180px"
                      src="/check.svg"
                    />
                    <Box component={'p'}>
                        24/7 Customer Support
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WhyUs;
