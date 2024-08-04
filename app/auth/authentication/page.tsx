import React from 'react'
import {Box} from '@mui/material';

const page = () => {
  return (
    <Box
    display='flex'
    textAlign='center'
    fontWeight={900}
     sx={{
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontSize:'20px'

     }}
    >
      An authentication link has been sent to your mail........
    </Box>
  )
}

export default page