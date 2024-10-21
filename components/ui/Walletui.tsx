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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { createSessionClient } from "@/appwrite/config";

const Walletui = () => {
  const [amount, setAmount] = useState<number>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fee, setFee] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUser = async () => {
      const session = Cookies.get("session");
      try {
        // const userr = await getUser(session); // Fetch user with session
        const { account } = await createSessionClient(session);
        const userr = await account.get();
        setUser(userr); // Store user in state
        setName(user?.name);
        setEmail(user?.email)
        console.log("User data:", userr);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser(); // Fetch user data on component mount
  }, []); // Empty dependency array to ensure it runs once on mount

  const handleChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    const value = parseFloat(e.target.value);
    const newam: number = 0.015 * value;
    setFee(newam);
    const total = (v1: number, v2: number) => {
      return v1 + v2;
    };

    setTotal(total(value, newam));
  };
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const paymentReference = `MON-${Math.random()
      .toString(36)
      .substring(7)
      .toUpperCase()}`;

    try {
      const response = await axios.post("/api/monnify/initializePayment", {
        amount: total,
        customerEmail: email,
        customerName: name,
        paymentReference,
      });

      const { checkoutUrl } = response.data.responseBody;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Payment failed:", error.response?.data || error.message);
    }
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
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography>Transaction Charges</Typography>
            <Typography>₦ {fee >= 0 ? fee : 0}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent={"space-between"}>
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
            onClick={handlePayment}
          >
            {/* {isLoading ? <CircularProgress size={"20px"} /> : "Sign up"} */}
            Continue to Funding
          </Button>
        </Stack>
        <Divider />
        {/* second option */}
        <Stack direction="column" spacing={3}>
          <Typography>
            - Fund your account using Automated Bank transfer( ₦50 charges )
          </Typography>
          <Typography>Go to dashboard for your card details</Typography>
          <Box
            display={"flex"}
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
            }}
          >
            <Link
              href="/dashboard"
              underline="none"
              color="#ffff"
              display={"flex"}
              height="100%"
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              padding={"20px"}
              width="100%"
            >
              Go to Dashboard
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Walletui;
