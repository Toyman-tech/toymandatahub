import { Box, Stack } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <Box>
        <Stack direction='column'>
           <Box 
             sx={{
                backgroundColor:'#ffff',
                padding:'20px',
                borderRadius:'12px',
             }}
           >
              Hello world
           </Box>
        </Stack>
    </Box>
  )
}

export default Features