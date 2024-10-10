"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Resultui = () => {
  const [network, setNetwork] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [quantity, setQuant] = useState("1");
  const handleChange = (e) => {
    e.preventDefault();
    setNetwork(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setQuant(e.target.value);
    setAmountToPay("N 5000");
  };

  return (
    <Box component="div"
    width={{xs:'100%', md:'50%'}}
    sx={{
      backgroundColor:'#ffff',
      padding:'30px',
    }}>
      <Stack direction="column" spacing={2}>
        <FormControl>
          <InputLabel id="sel">Exam name</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={network}
            label="Network"
            onChange={handleChange}
          >
            <MenuItem value={"WAEC"}>WAEC</MenuItem>
            <MenuItem value={"NECO"}>NECO</MenuItem>
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
            label="Amount to pay"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 600,
            }}
            value={amountToPay}
            disabled
            
          />
        </FormControl>
        <Button
          // disabled={isLoading || googleLoading}
          sx={{
            height: 45.7, // Custom height
            width: "100%",
            justifyContent: "center",
            display: "flex",
            borderRadius: "8px",
            boxShadow: "none",
            textTransform: "initial",
            fontSize: "13px",
            fontWeight: 200,
            backgroundColor: "#2A4F55",
            ":hover": {
              backgroundColor: "#457b83",
            },
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
};

export default Resultui;
