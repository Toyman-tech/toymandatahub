"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Couponui = () => {
    const [network, setNetwork] = useState("");
    const handleChange=(e)=>{
       e.preventDefault();
       setNetwork(e.target.value)
    }
  
    return (
      
        <Box component='div'>
          
          <Stack direction="column" spacing={2}>
          <FormControl>
            <InputLabel id='sel'>Data plan</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={network}
            label='Network'
            onChange={handleChange}
          >
              <MenuItem value={"MTN"}>MTN</MenuItem>
              <MenuItem value={"Airtel"}>Airtel</MenuItem>
              <MenuItem value={"9mobile"}>9mobile</MenuItem>
              <MenuItem value={"Glo"}>Glo</MenuItem>
          </Select>
          </FormControl>
          {/* 2 */}
          <FormControl>
            <InputLabel id='sel'>Quantity</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={network}
            label='Network'
            onChange={handleChange}
          >
          </Select>
          </FormControl>
          {/* 3 */}
          <FormControl>
            <InputLabel id='sel'>Name on card</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={network}
            label='Network'
            onChange={handleChange}
          >
              <MenuItem value={"1gb"}>1gb </MenuItem>
          </Select>
          <Typography>Your Company name to show on generated pin</Typography>
          </FormControl>
         <Box>
         <Typography>HOW TO LOAD PIN</Typography>
          <Typography>*460*6*1#</Typography>
         </Box>
          <Button
              // disabled={isLoading || googleLoading}
              sx={{
                height: 45.7, // Custom height
                width: "100%",
                justifyContent:'center',
                display:'flex',
                borderRadius: "8px",
                boxShadow: "none",
                textTransform: "initial",
                fontSize: "13px",
                fontWeight: 200,
                backgroundColor: "#2A4F55",
                ":hover":{
                  backgroundColor: "#457b83",
                }
  
              }}
              variant="contained"
              type="submit"
              // onClick={() => login(email, password)}
            >
              {/* {isLoading ? <CircularProgress size={"20px"} /> : "Sign up"} */}
              Generate
            </Button>
          
          </Stack>
          
        </Box>
      
    );
}

export default Couponui