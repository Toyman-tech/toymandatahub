"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Electricityui = () => {
    const [network, setNetwork] = useState("");
    const [amount, setAmount] = useState("");
    const [meter, setMeter] = useState("");
    const [type, setType] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange=(e)=>{
       e.preventDefault();
       setNetwork(e.target.value)
    }
    
    const handleChange1=(e)=>{
      e.preventDefault();
      setMeter(e.target.value)
   }
   const handleChange2=(e)=>{
    e.preventDefault();
    setPhone(e.target.value)
 }
 const handleChange3=(e)=>{
  e.preventDefault();
  setType(e.target.value)
  setAmount('N 10000')
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
          <TextField
            id="outlined-basic"
            label="Meter number"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 200,
            }}
            value={meter}
            onChange={handleChange1}
          />
        </FormControl>
          {/* extra */}
          <FormControl>
          <TextField
            id="outlined-basic"
            label="Customer Phone Number"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 200,
            }}
            value={phone}
            type='tel'
            onChange={handleChange2}
          />
        </FormControl>
          {/* 3 */}
          <FormControl>
            <InputLabel id='sel'>Meter Type</InputLabel>
            <Select
            labelId="select-label"
            id="sel"
            value={type}
            label='type'
            onChange={handleChange3}
          >
              <MenuItem value={"Post Paid"}>Post Paid </MenuItem>
          </Select>
          </FormControl>
          <FormControl>
          <TextField
            id="outlined-basic"
            label="Amount to pay"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 200,
            }}
            disabled
            value={amount}
            onChange={handleChange3}
          />
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