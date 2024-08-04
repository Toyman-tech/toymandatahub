"use client";

import React from "react";
import img from "@/public/img.png";
import { Box, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import ForgotPasswordStepper from "./Stepper";

export default function ForgotPasswordPage() {
  // const theme = useTheme();
  return (
    <Stack direction="row" display={"flex"} >
      <Box
        display={{md:'flex', xs:'none'}}
        component="div"
        ml={30}
        sx={{
          display: { xs: "none", md: "flex" },
          width: "45vw",
          height: "100vh",
          position: "relative",
          mx: "0px",
        }}
      >
        <Image
          src="/image.png"
          layout="fill"
          objectFit="cover"
          alt="image"
          // sx={{z: '-1', position: 'absolute', left: '20' }}
        />
        <Box
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          sx={{
            width: "45vw",
            height: "100vh",
            position: "relative",
            color: "white",
            background: "linear-gradient(to top, #222, #222222a1)",
          }}
        >
          <Stack
            direction="column"
            spacing={1}
            display="flex"
            alignItems="center"
            p={3}
            justifyContent="center"
            sx={{ marginTop: "-36px" }}
          >
            <Image src={img} height={17} objectFit="contain" alt="Vaad Logo" />
            <Box component="div" display="flex">
              <Box component="h1" sx={{ fontSize: "25px" }}>
                Rent your advert spaces
              </Box>
            </Box>

            <Box component="div" display="flex">
              <Box
                component="p"
                mt={1.2}
                sx={{ fontSize: "15px", fontWeight: 200 }}
              >
                A great platform to rent your advert spaces <br />
                <Box
                  component="span"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  without any hassle or insecurity
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <ForgotPasswordStepper />
    </Stack>
  );
}

{
  /* <Stack direction="row"
display="flex" 
// margin= "0px"
// paddding= "0px"
>
<Box component='div' 
ml={30}
sx={{ display: { xs: "none", md: "flex" }, width: '45vw', height: '100vh', position: 'relative', mx: '0px'}}>
<Image 
src='/image.png'
layout='fill'
objectFit='cover'
alt="image"
// sx={{z: '-1', position: 'absolute', left: '20' }}
/>
<Box component="div" 
display="flex"
alignItems="center"
justifyContent="center"
gap={4}

sx={{ width: '45vw', height: '100vh', position: 'relative', color: 'white',  
background: 'linear-gradient(to top, #222, #222222a1)'}} 
>
<Stack direction="column" spacing={1}        display="flex" alignItems="center" p={3}
justifyContent="center" 
sx={{ marginTop: '-36px', }}
>

<Image 
src={img} 
height={17} 
objectFit='contain' 
alt="Vaad Logo"
/>
<Box component="div" 
display="flex"  
>
<Box component='h1'
sx={{ fontSize: "25px" }}
>
  Rent your advert spaces
</Box>
</Box>

<Box component="div" 
display="flex"
>
<Box component='p'
mt={1.2}
sx={{ fontSize: "15px", fontWeight: 200, }}
>
  A great platform to rent your advert spaces <br/><Box component='span'   display="flex"
  alignItems="center"
  justifyContent="center">without any hassle or insecurity</Box>
</Box>
</Box>
</Stack> 
</Box>
</Box>
<Box
component="div" 
display="flex"
alignItems="center"
justifyContent="center"
sx={{ width: {md:'60vw', xs:'100vw'}, height: '100vh'}} 
>
<RecoverPassword/>
</Box>
</Stack>



 <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "none",
          position: "fixed",
          right: "0",
        }}
      >
        <Image
          src={"/img.png"}
          alt="rightpane-banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Box>
*/
}
