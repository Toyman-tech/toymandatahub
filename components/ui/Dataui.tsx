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

const data = ["MTN", "GLO", "AIRTEL", "9MOBILE"];

const Dataui = () => {
  const [network, setNetwork] = useState("");
  const [data, setData] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNetwork(e.target.value);
  };
  const handleChange1 = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setPlan(e.target.value);
    setAmount("N350");
  };

  return (
    <Box component="div">
      <Stack direction="column" spacing={2}>
        <FormControl>
          <InputLabel id="sel">Network</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={network}
            label="Network"
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
          <InputLabel id="sel">Data type</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={data}
            label="Data"
            onChange={handleChange1}
          >
            <MenuItem value={"SME"}>SME</MenuItem>
            <MenuItem value={"corporate gifting"}>Corprate gifting</MenuItem>
          </Select>
        </FormControl>
        {/* 3 */}
        <FormControl>
          <InputLabel id="sel">Plan</InputLabel>
          <Select
            labelId="select-label"
            id="sel"
            value={plan}
            label="Plan"
            onChange={handleChange2}
          >
            <MenuItem value={"1gb--N300"}>1gb--N 300 </MenuItem>
          </Select>
        </FormControl>
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
          Buy Now
        </Button>
      </Stack>
    </Box>
  );
};

export default Dataui;
