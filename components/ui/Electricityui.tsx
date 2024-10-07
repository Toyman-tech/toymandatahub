"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";

const Electricityui = () => {
    const [network, setNetwork] = useState("");
    const handleChange=(e)=>{
       e.preventDefault();
       setNetwork(e.target.value)
    }
  
    return (
      
        <Box component='div'
        width={{xs:'100%', md:'50%'}}
        sx={{
          backgroundColor:'#ffff',
          padding:'30px',
        }}
        >
          
          <Stack direction="column" spacing={2}>
          <FormControl>
            <InputLabel id='sel'>Disco name</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={network}
            label='Network'
            onChange={handleChange}
          >
              <MenuItem value={"Ikeja Electric"}>Ikeja Electric</MenuItem>
              <MenuItem value={"Ibadan Electric"}>Ibadan Electric</MenuItem>
              <MenuItem value={"Abuja Electric"}>Abuja Electric</MenuItem>
          </Select>
          </FormControl>
          {/* 2 */}
          <FormControl>
            <InputLabel id='sel'>Meter number</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={network}
            label='Network'
            onChange={handleChange}
          >
          </Select>
          </FormControl>
          {/* extra */}
          <FormControl>
            <InputLabel id='sel'>Customer Phone Number</InputLabel>
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
            <InputLabel id='sel'>Meter Type</InputLabel>
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
            <InputLabel id='sel'>Amount to pay</InputLabel>
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
              Validate
            </Button>
          
          </Stack>
          
        </Box>
      
    );
}

export default Electricityui