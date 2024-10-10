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
} from "@mui/material";
import React, { useState } from "react";

const Cablesubui = () => {
  const [cable, setCable] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [plan, setPlan] = useState("");
  const [amountToPay, setAmountToPay] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCable(e.target.value);
  };
  const handleChange1 = (e) => {
    e.preventDefault();
    setCardNumber(e.target.value);
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setPlan(e.target.value);
    setAmountToPay("N 3000");
  };

  return (
    <Box
      component="div"
      width={{ xs: "100%", md: "50%" }}
      sx={{
        backgroundColor: "#ffff",
        padding: "30px",
      }}
    >
      <Stack direction="column" spacing={2}>
        <FormControl>
          <InputLabel id="sel">Cablename</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={cable}
            label="Cable"
            onChange={handleChange}
          >
            <MenuItem value={"GOTV"}>GOTV</MenuItem>
            <MenuItem value={"DSTV"}>DSTV</MenuItem>
            <MenuItem value={"Startimes"}>Startimes</MenuItem>
          </Select>
        </FormControl>
        {/* 2 */}
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Smart Card number / IUC number"
            variant="outlined"
            sx={{
              height: "100%", // Custom height
              width: "100%",
              fontSize: "13px",
              fontWeight: 600,
            }}
            value={cardNumber}
            type='number'
            onChange={handleChange1}
          />
        </FormControl>
        {/* 3 */}
        <FormControl>
          <InputLabel id="sel">Cable plan</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={plan}
            label="Plan"
            onChange={handleChange2}
          >
            <MenuItem value={"1gb"}>1gb </MenuItem>
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
          Validate
        </Button>
      </Stack>
    </Box>
  );
};

export default Cablesubui;
