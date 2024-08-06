import { Box, Link, Stack } from '@mui/material'
import React from 'react'

const socials=
[
  { href:'#', key: 'linkedin', name:'/linkedin1.svg',},
  {href:'#', key: 'instagram', name:'/insta2.svg',},
  {href: '#', key: 'x-app', name:'/twitter2.svg', },
  {href: '#', key: 'Whatsapp', name:'/whatsapp.svg', },
]


const Footer = () => {
  return (
    <Box sx={{ backgroundColor:' #331a03', color:'#ffff' }} 
    padding={'20px'}>
      <Stack direction='column' spacing={3}>
         <Box component='h2'>
           TOYMAN DATA
         </Box>
         <Box component='p'>
          We offer instant recharge of Airtime, Data bundles, CableTV (Dstv, GoTV and Startime), Electricity Bill payments and more...
         </Box>
         <Stack direction='column'
          justifyContent={'center'}
          alignItems={'start'}
          spacing={3}
         >
          <Box>
             <Stack direction={'row'}
              justifyContent={'space-between'}
              spacing={5}
              
             >
                <Stack direction='column'>
                  <Box component='h3'>
                    Useful Links
                  </Box>
                  <Stack direction='column'>
                  <Link href="#" underline="none"  color='#f79333'>
                Home
              </Link>
              <Link href="#" underline="none"  color='#f79333'>
                About Us
              </Link>
              <Link href="#" underline="none"  color='#f79333'>
                Services
              </Link>
              <Link href="#" underline="none"  color='#f79333'>
                Login
              </Link>
              <Link href="#" underline="none"  color='#f79333'>
                Register
              </Link>
                  </Stack>
                </Stack>
                <Stack direction='column'>
                  <Box component='h3'>
                    Socials
                  </Box>
                  <Stack direction='column'>
                  {socials.map((social)=>(
                <Link href={social.href} key={social.key} underline="none"  color='#f79333'>
                  {social.key}
                </Link>
              ))}
                  </Stack>
                </Stack>
             </Stack>
          </Box>
          <Box>
            <Stack direction={'column'}>
              <Box component='h3'>
                Contact Information
              </Box>
              <Stack direction='column'>
                <Box component={'p'}>
                   Address: University Road, Tanke, Ilorin, Kwara State.
                </Box>
                <Box component={'p'}>
                  Phone Number: +2349039242601
                </Box>
                <Box component={'p'}>
                  Email: habeebthedev@gmail.com
                </Box>
              </Stack>
            </Stack>
          </Box>
         </Stack>
         <Box 
           display={'flex'}
           justifyContent={'center'}
           alignItems={'center'}
         >
          &copy; <Box component='span' 
          fontWeight={700} pr='4px'>Toymantech Data Hub.</Box> {/*  */} All rights reserved.
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer