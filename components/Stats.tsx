import { Box, Stack } from '@mui/material'
import React from 'react'

const Stats = () => {
  return (
    <Box
    // mt='5p'
     sx={{
        backgroundColor:"#f5f5fa"}}
        color='#2f4546'
    >
        <Stack direction={{md:'row', xs:'column'}}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        spacing={5}
        padding='30px'
        >
        <Stack 
        direction='row'
        spacing={7}
        >
          <Stack direction='column'
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box component='h3' >218K</Box>
            <Box>Registered Users</Box>
          </Stack>
          <Stack direction='column'
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box component='h3'>18K</Box>
            <Box>Happy Clients</Box>
          </Stack>
        </Stack>
        <Stack 
        direction='row'
        spacing={7}
        >
          <Stack direction='column'
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box component='h3'>218K</Box>
            <Box>Registered Users</Box>
          </Stack>
          <Stack direction='column'
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box component='h3'>18K</Box>
            <Box>Happy Clients</Box>
          </Stack>
        </Stack>
        </Stack>
    </Box>
  )
}

export default Stats