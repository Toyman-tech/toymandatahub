import React from 'react'
import {Box, Stack} from '@mui/material';
import Card from '@/components/Card';
import Features from '@/components/Features';


export default function Home() {
  return (
    <main>
      <Box sx={{
        width:"100vw",
        // paddingTop:'30px',
        backgroundColor:'#E3E3E3',
        padding:'10px'
      }}>
      <Box component='h2'
      color="#457B83"
       sx={{marginTop:'30px',}}
      >
        Welcome Habeeb
      </Box>
      <Card/>
      <Features/>
      </Box>
    </main>
  );
}