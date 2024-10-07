
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Couponui from './ui/Couponui'

const Coupon = () => {
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
    
        spacing={2}
        >
          <Box component='h3'
          sx={{display:'flex',
          justifyContent:'center',
        //   alignItems:'center'
        }}
          >GENERATE MTN DATA E-PINS</Box>
          <Stack direction={{xs:'column', md:'row-reverse'}}justifyContent={'space-between'}
          spacing={2}
          sx={{
            backgroundColor:'#ffff',
            padding:'10px',
          }}
          >
           <Typography
          width={{xs:'100%', md:'45%'}}
           >MTN Data EPINS allow you to load data directly into your phones just like conventional airtime recharge cards!
           </Typography>
            {/* second stack */}
            <Stack direction={'column'} width={{xs:'100%', md:'50%'}}>
                <Couponui/>
            </Stack>
          </Stack>
          </Stack>
        </Box>
      )
}

export default Coupon