"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Airtimeui = () => {
    const [network, setNetwork] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [amountToPay, setAmountToPay] = useState("");
   
    const handleChange=(e)=>{
       e.preventDefault();
       setNetwork(e.target.value)
    }
    const handleChange1=(e)=>{
      e.preventDefault();
      setPhoneNumber(e.target.value)
   }
   const handleChange2=(e)=>{
    e.preventDefault();
    setAmount(e.target.value)
    setAmountToPay("N 200")
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
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 200,
            }}
            value={phoneNumber}
            onChange={handleChange1}
            type='tel'
          />
        </FormControl>
          {/* 3 */}
         <FormControl>
          <TextField
            id="outlined-basic"
            label="Amount"
          
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 200,
            }}
            value={amount}
            onChange={handleChange2}
            type="number"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            // type='number'
            label="Amount to pay"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 600,
            }}
            value={amountToPay}
            // disabled
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
              Buy Airtime 
            </Button>
          
          </Stack>
          
        </Box>
      
    );
}

export default Airtimeui