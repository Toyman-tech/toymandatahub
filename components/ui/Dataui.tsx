"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";

const data = ["MTN", "GLO", "AIRTEL", "9MOBILE"];

const Dataui = () => {
  const [network, setNetwork] = useState("");
  const handleChange=(e)=>{
     e.preventDefault();
     setNetwork(e.target.value)
  }

  return (
    
      <Box component='div'>
        
        <Stack direction="column" spacing={2}>
        <FormControl>
          <InputLabel id='sel'>Network</InputLabel>
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
          <InputLabel id='sel'>Data type</InputLabel>
          <Select
          labelId="select-label"
          id="sel"
          value={network}
          label='Network'
          onChange={handleChange}
        >
            <MenuItem value={"SME"}>SME</MenuItem>
            <MenuItem value={"corporate gifting"}>Corprate gifting</MenuItem>
        </Select>
        </FormControl>
        {/* 3 */}
        <FormControl>
          <InputLabel id='sel'>Plan</InputLabel>
          <Select
          labelId="select-label"
          id="sel"
          value={network}
          label='Network'
          onChange={handleChange}
        >
            <MenuItem value={"1gb"}>1gb </MenuItem>
        </Select>
        </FormControl>
        <FormControl>
          <InputLabel id='sel'>Amount</InputLabel>
          <Select
          labelId="select-label"
          id="sel"
          value={network}
          label='Network'
          onChange={handleChange}
        >
            <MenuItem value={"N200"}>N 200</MenuItem>
        </Select>
        </FormControl>
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
            Buy Now
          </Button>
        
        </Stack>
        
      </Box>
    
  );
};

export default Dataui;
