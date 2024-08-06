import { Box, Link, Stack } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <Box component="header"
       sx={{padding:'10px', backgroundColor:'#fffffff', color:'black' }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ padding: "10px" }}
        >
          <Link href="#" underline="none" color='black' p='5px'
           sx={{ ":hover":{
            color:'#3f2828'
          },     }}
          >
            TOYMANDATA
          </Link>
          <Box sx={{fontSize:'13px'}}>
            <Stack direction="row" spacing={3} display={{md:"flex", xs:'none'}} px="3px" 
            >
              <Link href="#" underline="none"  color='black' p='5px' sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}>
                Home
              </Link>
              <Link href="#" underline="none" color='black' p='5px'
               sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}
              >
                About Us
              </Link>
              <Link href="#" underline="none" color='black' p='5px'
               sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}
              >
                Our Services
              </Link>
              <Link href="#" underline="none" color='black' p='5px'
               sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}
              >
                Blog
              </Link>
              <Link href="#" underline="none" color='black' p='5px'
               sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}
              >
                Contact
              </Link>
            </Stack>
          </Box>
          <Link href="/auth/sign-in" underline="none" color='black'
          sx={{ ":hover":{
            backgroundColor: "#ababab",
            color:'#3f2828'
          },     }}
          >
            Sign-in
          </Link>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
