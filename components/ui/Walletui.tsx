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
import {MonnifySDK}  from 'monnify-sdk';
import LoadingPage from "../LoadingPage";
import SnackbarComp, { useToast } from "../Toast";
import { useRouter } from "next/navigation";

const Walletui = () => {
  const [isLoading, setIsLoading ] =useState(false)
  const [amount, setAmount] = useState<number>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fee, setFee] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [user, setUser] = useState(null); // State to store user data
  const [paymentStatus, setPaymentStatus] = useState('');
  const [currency, setCurrency] = useState('NGN');
  const router = useRouter()
  const { handleMessage, handleSnack, snackBarOpen, setSnackBarOpen } =
  useToast();

  useEffect(() => {
    // Dynamically load the Monnify SDK script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://sdk.monnify.com/plugin/monnify.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      const session = Cookies.get("session");
      try {
        // const userr = await getUser(session); // Fetch user with session
        const { account } = await createSessionClient(session);
        const userr = await account.get();
        // if (typeof window !== "undefined") {
        //   localStorage.setItem("tee", userr?.$id);
        // }
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
                                                                                                                                                                         
  // paymentt
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("hello world");
    if (window.MonnifySDK) {
     window.MonnifySDK.initialize({
        amount: total,
        currency: 'NGN',
        reference: `${new Date().getTime()}`, // Generates a unique reference
        customerFullName: name,
        customerEmail: "habeebthedev@gmail.com",
        apiKey: "MK_TEST_HDTP6X0F4C",
        contractCode: '7713023602',
        paymentDescription: 'Lahray World',
        metadata: {
          name: name,
          age: 45,
        },
        // incomeSplitConfig: [
        //   {
        //     subAccountCode: 'MFY_SUB_342113621921',
        //     feePercentage: 50,
        //     splitAmount: 1900,
        //     feeBearer: true,
        //   },
        //   {
        //     subAccountCode: 'MFY_SUB_342113621922',
        //     feePercentage: 50,
        //     splitAmount: 2100,
        //     feeBearer: true,
        //   },
        // ],
        onLoadStart: () => {
          console.log('Payment loading started');
        },
        onLoadComplete: () => {
          console.log('Payment SDK is ready');
        },
        onComplete: (response) => {
          console.log('Payment completed successfully:', response);
          handleMessage(
            "success",
            "Payment completed successfully"
          );
          // Handle the payment response (e.g., save transaction, display success)
        },
        onClose: (data) => {
          console.log('Payment modal closed:', data);
          setIsLoading(false)
          // router.reset();
          // Handle the case where the modal is closed
        },
      });
    }else {
      console.error('Monnify SDK not loaded');
      handleMessage("error", 'Error, please check your internet connection and try again')
      setIsLoading(false)
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
      {isLoading && <LoadingPage />} 
          <SnackbarComp
            snackBarOpen={snackBarOpen}
            setSnackBarOpen={setSnackBarOpen}
            alert={handleSnack.alert}
            message={handleSnack.message}
          />
    </Box>
  );
};

export default Walletui;
