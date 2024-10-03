import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Atm = () => {
  return (
    <Box sx={{ color: "#ffff" }}
      width={'100%'}
    >
      <Stack direction={{md:'row', sm:'row', xs:'column'}}
       justifyContent={{md:'space-between', xs:'center'}}
       alignItems={'center'}
       spacing={2}
       width={{md:'100%', xs:'100%'}}
      >
        <Box
        width='95%'
        position={'relative'}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          
           <Image
            src="/dashboardassets/moniepoint.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
            
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{sm:1, xs:5, md:5}}
            zIndex={2}
            position={'relative'}
         >
            <Box component="h3">MONIEPOINT</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              9031 9242 6018 2733
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              Abubakar Habeeb Akolawole
            </Box>
          </Stack>
        </Box>
        {/* second atm */}
        <Box
        width='95%'
        position={'relative'}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          
           <Image
            src="/dashboardassets/wema.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
            
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{sm:1, xs:5, md:5}}
            zIndex={2}
            position={'relative'}
         >
            <Box component="h3">WEMA</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              9031 9242 6018 2733
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              Abubakar Habeeb Akolawole
            </Box>
          </Stack>
        </Box>
        {/* third */}
        <Box
        width='95%'
        position={'relative'}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          
           <Image
            src="/dashboardassets/zenith.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
            
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{sm:1, xs:5, md:5}}
            zIndex={2}
            position={'relative'}
         >
            <Box component="h3">ZENITH</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              9031 9242 6018 2733
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              Abubakar Habeeb Akolawole
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Atm;
