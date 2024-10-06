import { Box, Button, Link, Stack } from '@mui/material'
import React from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";


const MobileTopbar = () => {
  return (
    <React.Fragment>
        <Box 
        // sx={{
        //   py:'20px',
        //   backgroundColor:'#457B83',
        //   color:'#ffff', 
        //   alignItems:'center',
        //   // width:'100vw',
        //   // height:'30px',
        //   position: 'sticky',
        // top:0,
        // zIndex:5,
        // }}
        component="header"
        display='flex'
        width={'100%'}
        sx={{
          // py:'60px',
          backgroundColor: "#457B83",
          position: "sticky",
          top: 0,
          zIndex: 20,
          py: {md:3, xs:2},
          borderBottom: "1px solid #c5c5c5",
        }}
        >
         <Stack 
          direction={'row'} 
          alignItems={'center'}
          justifyContent={'space-between'}
          width='100%'
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
                backgroundColor: "transparent",
                color: "#000000",
                boxShadow:'none'
              },
              // backgroundColor: '#000000',
            }}
            variant="contained"
          >
           <CiMenuKebab />
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
                color: "#000000",
                boxShadow:'none',
              },
              backgroundColor: '#457B83',
            }}
            variant="contained"
          >
                      <HiOutlineMenuAlt1 /> 
          </Button>
         </Stack>
      </Box>
    </React.Fragment>
  )
}

export default MobileTopbar