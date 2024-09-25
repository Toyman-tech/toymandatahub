import React from 'react'
import {Box, Stack} from '@mui/material';
import Card from '@/components/Card';
import Features from '@/components/Features';
import AfiiliateCard from '@/components/AfiiliateCard';
import Serv from '@/components/Serv';
import Transactions from '@/components/Transactions';


export default function Home() {
  return (
    <main>
      <Box sx={{
        width:"100%",
        // paddingTop:'30px',
        backgroundColor:'#E3E3E3',
        pl:{md:'35px'},
        padding:'10px',
      }}
      display='flex'
      justifyContent={'center'}
      alignItems='center'
      >
      <Stack direction='column'
      display={'flex'}
      spacing={2}
      width={"100"}
      >
      <Box component='h2'
      color="#457B83"
       sx={{marginTop:'30px',}}
      >
        Welcome Habeeb
      </Box>
      <Card/>
      <Features/>
      <Box
        
      sx={{
       justifyContent:'center',
       alignItems:'center'
      }}>
      <AfiiliateCard/>
      </Box>
      <Serv/>
      <Transactions/>
      </Stack>
      </Box>
    </main>
  );
}
