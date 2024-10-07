
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cablesubui from './ui/Cablesubui'

const Cablesub = () => {
    return (
        <Box
        width='100%'
        // display='flex'
        // justifyContent={'center'}
        px='10px'
        pt={{md:'40px', xs:'30px'}}
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
          >Cables Subscription</Box>
          <Stack direction={{xs:'column', md:'row-reverse'}}justifyContent={'space-between'}
          spacing={2}
          sx={{
            backgroundColor:'#ffff',
            padding:'10px',
          }}
          
          >
            <Stack direction={'column'} spacing={1}
             width={{xs:'100%', md:'45%'}}
            >
              <Typography>You can contact DSTV/GOtv's customers care unit on 01-2703232/08039003788 or the toll free lines: 08149860333, 07080630333, and 09090630333 for assistance, STARTIMES's customers care unit on (094618888, 014618888)</Typography>
            </Stack>
            {/* second stack */}
            <Stack direction={'column'}
             width={{xs:'100%', md:'50%'}}
            >
                <Cablesubui/>
            </Stack>
          </Stack>
          </Stack>
        </Box>
      )
}

export default Cablesub