"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Couponui = () => {
    const [network, setNetwork] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuant] = useState("1");
    const handleChange=(e)=>{
       e.preventDefault();
       setNetwork(e.target.value)
       
      
    }
    const handleChange1=(e)=>{
      e.preventDefault();
      setName(e.target.value) 
    }
    const handleChange2=(e)=>{
      e.preventDefault();
      setQuant(e.target.value)
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
              <MenuItem value={"1.5GB--N308"}>1.5GB--N308</MenuItem>
              <MenuItem value={"1.0GB--N245"}>1.0GB--N245</MenuItem>
              
          </Select>
          </FormControl>
          {/* 2 */}
          <FormControl>
          <TextField
            id="outlined-basic"
            label="Quantity"
            type='number'
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 600,
            }}
            value={quantity}
           onChange={handleChange2}  
          />
        </FormControl>
          {/* 3 */}
         <FormControl>
          <TextField
            id="outlined-basic"
            label="Name on card"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 600,
            }}
            value={name}
            onChange={handleChange1}
            
          />
           <Box>
           <Typography>Your Company name to show on generated pin</Typography>
         </Box>
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