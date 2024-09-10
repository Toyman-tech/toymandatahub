import { Box, Stack } from '@mui/material'
import React from 'react'
import Atm from './Atm'

const Card = () => {
  return (
    <Box 
    padding='30px'
    sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#ffff',
        // width:"100vw"
     }}>
        <Stack direction={'column'}
        spacing={7}
        >
    <Box
     sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#457B83',
        width:{xs:'80vw', md:'50vw'},
        height:'225px',
        borderBottomRightRadius:'30px',
        borderBottomLeftRadius:'30px',
        
     }}
    >
        <Stack direction='column'
        display='flex'
        
         justifyContent={'center'}
         alignItems='center'
         spacing={5}
        >
            <Box component='h1'
            display='flex'
            justifyContent={'start'}
            >
                Wallet Balance
            </Box>
            <Box component='h1'
             fontSize={'50px'}
            >
                N 50,000
            </Box>
            <Box component='h3'>
                Refer to Earn
            </Box>
        </Stack>
    </Box>
    <Atm/>
    </Stack>
    </Box>
  )
}

export default Card