import { Box, Stack, Typography } from '@mui/material'
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
            <Stack direction='row'>
              <Box>image</Box>
              <Typography>

              </Typography>
            </Stack>
           </Box>
        </Stack>
    </Box>
  )
}

export default Features