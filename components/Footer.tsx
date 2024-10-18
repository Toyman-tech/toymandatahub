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
    <Box sx={{ backgroundColor:'#457b83', color:'#ffff' }} 
    padding={'20px'} id={'#footer'}>
      <Stack direction='column' spacing={2}>
         <Box component='h2' fontSize={"25px"}>
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
              spacing={10}
              px="23px"
             >
                <Stack direction='column' spacing={1}>
                  <Box component='h3'
                  fontSize={'18px'}
                  >
                    Useful Links
                  </Box>
                  <Stack direction='column' 
                  spacing={2}
                  
                  >
                  <Link href="#" underline="always"  color='#ffff'>
                Home
              </Link>
              <Link href="#" underline="always"  color='#ffff'>
                About Us
              </Link>
              <Link href="#" underline="always"  color='#ffff'>
                Services
              </Link>
              <Link href="#" underline="always"  color='#ffff'>
                Login
              </Link>
              <Link href="#" underline="always"  color='#ffff'>
                Register
              </Link>
                  </Stack>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Box component='h3' fontSize={'18px'}>
                    Socials
                  </Box>
                  <Stack direction='column'
                  spacing={2}
                  
                  >
                  {socials.map((social)=>(
                <Link href={social.href} key={social.key} underline="always"  color='#ffff'>
                  {social.key}
                </Link>
              ))}
                  </Stack>
                </Stack>
             </Stack>
          </Box>
          <Box>
            <Stack direction={'column'} spacing={1}>
              <Box component='h3'
              fontSize={'18px'}>
                Contact Information
              </Box>
              <Stack direction='column'
              // fontSize={"10px"}
              px="23px"
              >
                <Box component={'p'}>
                   Address : University Road, Tanke, Ilorin, Kwara State.
                </Box>
                <Box component={'p'}>
                  Phone Number : +2349039242601
                </Box>
                <Box component={'p'}>
                  Email : habeebthedev@gmail.com
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