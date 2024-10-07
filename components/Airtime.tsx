
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Airtimeui from './ui/Airtimeui'

const Airtime = () => {
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
          >Airtime TopUp</Box>
          <Box
          display='flex'
          justifyContent={'center'}
         
         
          >
            <Airtimeui/>
          </Box>
          </Stack>
        </Box>
      )
}

export default Airtime