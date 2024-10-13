"use client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Atm from "../Atm";

const Walletui = () => {
    const [amount, setAmount] = useState<number>()
    const [fee, setFee] = useState<number>()
    const [total, setTotal] = useState<number>()

  const handleChange = (e) => {
     e.preventDefault()
     setAmount(e.target.value)
     const value = parseFloat(e.target.value)
     const newam : number = (0.015 * value)
     setFee(newam);
     const total = (v1:number, v2:number)=>{
      return v1 + v2
     }

     setTotal(total(value, newam));
  }

  return (
    <Box
      component="div"
      width={{ xs: "100%", md: "50%" }}
      sx={{
        backgroundColor: "#ffff",
        padding: "30px",
      }}
    >
      <Stack direction={"column"} spacing={4}>
        <Stack direction={"column"} spacing={3}>
          <Typography>
            - Fund your account using Monnify(ATM/Bank transfer)
          </Typography>
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
              onChange={handleChange}
              type="number"
            />
          </FormControl>
          <Stack direction="row" justifyContent={'space-between'}>
            <Typography>Transaction Charges</Typography>
            <Typography>₦ {fee >= 0 ? fee : 0}</Typography>
          </Stack>
          <Divider/>
          <Stack direction="row" justifyContent={'space-between'}>
            <Typography>Total Amount</Typography>
            <Typography>₦ {total >= 0 ? total : 0}</Typography>
          </Stack>
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
            fontSize: "20px",
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
          Continue to Funding
        </Button>
        </Stack>
        <Divider/>
        {/* second option */}
        <Stack direction='column' spacing={3}>
        <Typography>
            - Fund your account using Automated Bank transfer( ₦50 charges )
          </Typography>
          <Typography>
            Go to dashboard for your card details
          </Typography>
          <Box
            display={'flex'}

            sx={{
                  height: 45.7, // Custom height
                  textDecoration: "none",
                  color: "#ffff",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "initial",
                  fontSize: "20px",
                  fontWeight: 200,
                  backgroundColor: "#2A4F55",
                  ":hover": {
                    backgroundColor: "#457B83",
                  },
                }}>
              <Link
                href="/dashboard"
               underline="none"
               color='#ffff'
               display={'flex'}
               height='100%'
               justifyContent={'center'}
               alignItems={'center'}
               textAlign={'center'}
               padding={'20px'}
               width='100%'
              >
                GO to Dashboard 
              </Link>
            </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Walletui;
