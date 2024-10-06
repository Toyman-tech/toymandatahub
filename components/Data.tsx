
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Dataui from './ui/Dataui'

const Data = () => {
  return (
    <Box
    width='100%'
    // display='flex'
    // justifyContent={'center'}
    px='10px'
    py='30px'
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
      >Buy Data Plan</Box>
      <Stack direction={{xs:'column', md:'row-reverse'}}justifyContent={'space-between'}
      spacing={2}
      sx={{
        backgroundColor:'#ffff',
        padding:'10px',
      }}
      >
        <Stack direction={'column'} spacing={1}
        
        >
           <Typography 
            sx={{display:'flex',
            justifyContent:'center',
          //   alignItems:'center'
          }}
          >Codes for Data Balances:</Typography>
           <Stack direction={'column'} spacing={'1px'} >
           <Typography sx={{color:'#856404', backgroundColor:'#ffeeba'}} p="5px">
             MTN [SME] *461*4#          
           </Typography>
           <Typography sx={{color:'#856404', backgroundColor:'#ffeeba'}} p="5px">
             MTN [Gifting] *131*4# or *460*260#          
           </Typography>
           {/* 3 */}
           <Typography sx={{color:'#1b1e21', backgroundColor:'#c6c8ca'}} p="5px">
            9mobile [Gifting] *228#        
           </Typography>
           {/* 4 */}
           <Typography sx={{color:'#721c24', backgroundColor:'#f5c6cb'}} p="5px">
             Airtel *140# 
           </Typography>
           {/* 5 */}
           <Typography sx={{color:'#155724', backgroundColor:'#c3e6cb'}} p="5px">
             Glo *127*0#       
           </Typography>
           </Stack>
        </Stack>
        {/* second stack */}
        <Stack direction={'column'}>
            <Dataui/>
        </Stack>
      </Stack>
      </Stack>
    </Box>
  )
}

export default Data