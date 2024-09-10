import { Box, Stack } from "@mui/material";
import React from "react";

const Atm = () => {
  return (
    <Box color="black" 
    sx={{color:'#ffff'}}>
      <Stack direction='row'>
         <Box sx={{
            width:'80vw',
            height:'250px',
            backgroundColor:'#08084b',
            padding:'30px',
            borderRadius:'18px'
         }}>
            <Stack direction='column'
            justifyContent={'space-between'}
            spacing={5}
            >
            <Box component='h1'>
            MONIEPOINT
            </Box>
            <Box component='h1'
            fontSize={'30px'}
            sx={{
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'
            }}
            >
                9031 9242 6018 2733
            </Box>
            <Box component='h3'
            sx={{
                justifyContent:'end',
                alignItems:'end',
                textAlign:'end'
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
