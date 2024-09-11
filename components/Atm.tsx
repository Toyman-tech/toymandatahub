import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Atm = () => {
  return (
    <Box sx={{ color: "#ffff" }}>
      <Stack direction="row">
        <Box
        width='100%'
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
            spacing={5}
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
      </Stack>
    </Box>
  );
};

export default Atm;
