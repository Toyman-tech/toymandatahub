"use client"; // Error components must be Client Components

import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const handleClick1 = () => {
    router.refresh();
  };
  return (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      spacing={{ sm: 40, xs: 5 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", padding: "35px" }}
    >
      <Box>
        {/* <Image
         src='/frame.svg'
         width={375}      
         alt='about-us'
         height={300}
        /> */}
          <Box
          width={{xs:'275px', }}
           component={"img"}
           display={{ xs: "block", md:"flex" }}
           src='/Frame.svg'
          />
     </Box>
     <Stack
     direction='column'
     width={{xs:'375px', md:'475px' }}
     spacing={{md:3, xs:4}}
     padding={{xs:'15px', md:'5px'}}
     >
       <Button
          sx={{
            marginTop: "5px",
            marginBottom: "-3px",
            height: 25.7, // Custom height
            borderRadius: "50px",
            boxShadow: "none",
            textTransform: "initial",
            fontSize: {md:'15px', xs:'11px'},
            fontWeight: 700,
            display:"flex", 
            alignItems:"left",
            justifyContent:"start",
            width:'30px'
          }}
          variant="outlined"
        >
          Error
        </Button>
        <Box component='h1'>
          Page not found
        </Box>
        <Box component="p" paddingLeft="20px">
          It looks like we couldn&apos;t find the page you were looking for..
        </Box>
        <Stack
          direction="row"
          spacing={{ sm: 10, xs: 5 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingLeft="15px"
        >
           <Button
          sx={{
            marginTop: "5px",
            width:'130%',
            height: 45.7, // Custom height
            borderRadius: "3px",
            boxShadow: "none",
            textTransform: "initial",
            fontSize: {md:'15px', xs:'11px'},
            fontWeight: 600,
            color:'#ffffff',
            backgroundColor: "#0177AB",
          }}
          variant="contained"
          onClick={
            // Attempt to recover by trying to re-render the segment
            //  () =>{ reset()
              ()=>{handleClick()
             }
           }
        >
          Go back to Previous page
        </Button> <Button
          sx={{
            marginTop: "5px",
            width:'100%',
            height: 45.7, // Custom height
            borderRadius: "3px",
            boxShadow: "none",
            textTransform: "initial",
            fontSize: {md:'15px', xs:'13px'},
            fontWeight: 700,
            backgroundColor: "#ffffff",
          }}
            onClick={
               ()=>{handleClick1()}
            }
          >
            Try Again
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

// <Stack
// height={"100dvh"}
// alignItems={"center"}
// gap={"2rem"}
// mx={"auto"}
// maxWidth={500}
// justifyContent={"center"}
// >
// <Typography variant="h5" textAlign={"center"}>
//   Something went wrong!
// </Typography>
// <Button
//   variant="contained"
//   onClick={
//     // Attempt to recover by trying to re-render the segment
//     () => reset()
//   }
// >
//   Try again
// </Button>
// </Stack>
