import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Electricityui from './ui/Electricityui'

const Electricity = () => {
    return (
        <Box
        width='100%'
        // display='flex'
        // justifyContent={'center'}
        px='10px'
        pt={{md:'40px'}}
        >
        <Stack direction={'column'}
        justifyContent={'center'}
        // alignItems={'center'}
        pt='40px'
        spacing={2}
        >
          <Box component='h3'
          sx={{display:'flex',
          justifyContent:'center',
        //   alignItems:'center'
        }}
          >Electricity Bill Payment</Box>
          <Box
          display='flex'
          justifyContent={'center'}
         
         
          >
            <Electricityui/>
          </Box>
          </Stack>
        </Box>
      )
}

export default Electricity