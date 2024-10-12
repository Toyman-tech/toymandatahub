"use client"
import { Box, Stack, Typography, Button } from "@mui/material";
import {useRef, useState} from 'react';

const AfiiliateCard = () => {
  // const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) =>{
    e.preventDefault()
    // 
    navigator.clipboard.writeText('toymandatahub.vercel.app')
    setCopied(true)
    if(copied){
      alert('link copied successfully')
    }
    }

  return (
    <Box
      display="flex"
      mt="30px"
      justifyContent='center'
      
    >
      <Stack direction="column" 
      padding="15px" 
      spacing={1}
      sx={{
        backgroundColor: "#457B83",
        borderRadius: "12px",
        color: "#ffff",
       
      }}
      >
        <Typography>Affiliate link</Typography>
        <Typography>
          Earn a 5% commission on the first service purchased by friends you
          refer!
        </Typography>
        <Box sx={{ backgroundColor: "#ffff", borderRadius: "6px" }}
        display='flex'
        justifyContent={'center'}
        alignItems={'center'}
        >
          <Stack direction={"row"}
          justifyContent={'space-between'}
          alignItems={'center'}
          width='90%'
          >
            <Typography color="black">
              https://toymandatahub.vercel.app
            </Typography>
            {/* <button onClick={handleCopy} > */}
            <Button
            sx={{
              // height: 45.7, // Custom height
              // width: "100%",
              justifyContent: "center",
              display: "flex",
              borderRadius: "none",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "15px",
              backgroundColor: "#ffff",
              fontWeight: 200,
              color: "#2A4F55",
              
              ":hover": {
                backgroundColor: "transparent",
                fontWeight: 500,
                color: "#2A4F55",
                borderRadius: "none",
              boxShadow: "none",
              },
            }}
            variant="contained"
            type="submit"
            onClick={handleCopy}
          >
            <Box
              component={"img"}
              // ml={{ xs: "10px", md: "55px" }}
              src="/dashboardassets/copy.svg"
              padding={"7px"}
            />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AfiiliateCard;
