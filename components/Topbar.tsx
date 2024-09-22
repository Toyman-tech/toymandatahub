import { Box, Button, Link, Stack } from '@mui/material'
import React from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
const Topbar = () => {
  return (
    <React.Fragment>
        <Box sx={{display:'flex',
          py:'20px',
          backgroundColor:'#457B83',
          color:'#ffff', 
          alignItems:'center',
          // width:'100vw'
          position: 'sticky',
        top:0,
        zIndex:5,
        }}>
         <Stack 
          direction={'row'} 
          alignItems={'center'}
          justifyContent={'space-between'}
          width='100vw'
         >
          <Box sx={{display:'flex'}}>
          <Button
            type="submit"
            // onClick={handleClick}
            sx={{
              display: { md: "none", xs: "flex" },
              // borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "35px",
              padding: "5px",
              justifyContent: "center",
              color: "#ffff",
              fontWeight: 700,
              ":hover": {
                backgroundColor: "#457B83",
                color: "#3f2828",
              },
              backgroundColor: '#457B83',
            }}
            variant="contained"
          >
            <HiOutlineMenuAlt1 />
            {/* {toggle ? <IoCloseSharp /> : <HiMenuAlt3 />} */}
          </Button>
          </Box>
           <Box 
           fontWeight={700}
           sx={{display:'flex',
           fontSize:'22px',
          }}>
            <Link href='/' underline='none' color={'#ffff'}>
              TOYMANDATAHUB
            </Link>
           </Box>
           <Button
            type="submit"
            // onClick={handleClick}
            sx={{
              display: { md: "none", xs: "flex" },
              // borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "35px",
              padding: "5px",
              justifyContent: "center",
              color: "#ffff",
              fontWeight: 700,
              ":hover": {
                // backgroundColor: "#ababab",
                color: "#3f2828",
              },
              backgroundColor: '#457B83',
            }}
            variant="contained"
          >
           <CiMenuKebab />
          </Button>
         </Stack>
      </Box>
    </React.Fragment>
  )
}

export default Topbar