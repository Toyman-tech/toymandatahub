"use client";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Link,
  Grid,
  Divider,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SnackbarComp from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/user.actions";
// import { account, ID } from "./appwrite";


const SignUp = () => {
  const [googleLoading, setgoogleLoading] = useState(false)
  const [pwdVisible, setPwdVisible] = useState(false);
  const [pwdVisible2, setPwdVisible2] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading ] =useState(false)
  const router = useRouter()

  const login = async (email, password) => {
    // const session = await account.createEmailPasswordSession(email, password);
    // setLoggedInUser(await account.get());
  };
  // Function to handle form submission
  const register = async (e) => {
    e.preventDefault 
   
    if (password !== confirmPassword) {
      // Show alert if passwords don't match
      alert("Passwords do not match!");
      //handleMessage("Passwords do not match!");
      return; // Stop form submission
    } else{
    // await account.create(ID.unique(), email, password, name);
    // login(email, password);
    try {
      setIsLoading(true)
      const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
      };
       console.log(email, password)
      const newUser = await createUser(user);
        console.log("hi", newUser)
      if (newUser) {
        router.push(`/dashboard`);
      }
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
    setIsLoading(false)
  };

  return (
    <>

      <Box
        // component="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction="column"
          spacing={{ md: 2, xs: 4 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="p"
            fontWeight={600}
            sx={{ fontSize: { md: "25px", xs: "28px" } }}
          >
            Create Account!
          </Box>
          
          
          <Button
            fullWidth
            size="large"
            sx={{
              background: "none",
              textTransform: "inherit",
              fontSize: "18px",
              "&:hover": { background: "none" },
              border: "1px solid #d3d3d3",
              borderRadius: "10px",
              color: "#000929",
            }}
            startIcon={
              !googleLoading && (
                <GoogleIcon sx={{ width: "20px", height: "20px" }} />
              )
            }
            // onClick={handleGoogleSignup}
            // disabled={isLoading || googleLoading}
          >
            {googleLoading ? (
              <CircularProgress size={"20px"} />
            ) : (
              "    Sign up with google"
            )}
          </Button>
          <Divider sx={{ width: "100%", my: "2em" }}>Or</Divider>
          <Grid
            container
            spacing={1}
            component={"form"}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField 
                id="outlined-basic"
                type="username"
                label="Username"
                variant="outlined"
                // disabled={isLoading || googleLoading}
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                // {...register("firstname", {
                //   required: "Firstname is required",
                // })}
                // error={errors?.email ? true : false}
                // helperText={
                //   errors?.email ? (
                //     <Typography variant="body2" color={"red"} fontSize={"10px"}>
                //       {errors?.email?.message}
                //     </Typography>
                //   ) : (
                //     <></>
                //   )
                // }
              />
            </Grid>
            {/* <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                // disabled={isLoading || googleLoading}
                id="outlined-basic"
                type="name"
                label="Lastname"
                variant="outlined"
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                // {...register("lastname", {
                //   required: "Lastname is required",
                // })}
                // error={errors?.email ? true : false}
                // helperText={
                //   errors?.email ? (
                //     <Typography variant="body2" color={"red"} fontSize={"10px"}>
                //       {errors?.email?.message}
                //     </Typography>
                //   ) : (
                //     <></>
                //   )
                // }
              />
            </Grid> */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                // disabled={isLoading || googleLoading}
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
                // {...register("email", {
                //   required: "Email is required",
                // })}
                // error={errors?.email ? true : false}
                // helperText={
                //   errors?.email ? (
                //     <Typography variant="body2" color={"red"} fontSize={"10px"}>
                //       {errors?.email?.message}
                //     </Typography>
                //   ) : (
                //     <></>
                //   )
                // }
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                // disabled={isLoading || googleLoading}
                id="outlined-basic"
                label="Phone number"
                type="tel"
                variant="outlined"
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // {...register("phoneNumber", {
                //   required: "Phone number is required",
                // })}
                // error={errors?.phoneNumber ? true : false}
                // helperText={
                //   errors?.phoneNumber ? (
                //     <Typography variant="body2" color={"red"} fontSize={"10px"}>
                //       {errors?.phoneNumber?.message}
                //     </Typography>
                //   ) : (
                //     <></>
                //   )
                // }
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                // disabled={isLoading || googleLoading}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                type={!pwdVisible ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // {...register("password", {
                //   required: "Password is required",
                //   minLength: {
                //     message: "Password must be minimum of 8 characters.",
                //     value: 8,
                //   },
                // })}
                // error={errors?.password ? true : false}
                // helperText={
                //   errors?.password ? (
                //     <Typography variant="body2" color={"red"} fontSize={"10px"}>
                //       {errors?.password?.message}
                //     </Typography>
                //   ) : (
                //     <></>
                //   )
                // }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setPwdVisible(!pwdVisible);
                        }}
                      >
                        {!pwdVisible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                // disabled={isLoading || googleLoading}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
                type={!pwdVisible2 ? "password" : "text"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setPwdVisible2(!pwdVisible2);
                        }}
                      >
                        {!pwdVisible2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

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
            onClick={register}
          >
            {/* {isLoading ? <CircularProgress size={"20px"} /> : "Sign up"} */}
            Sign up
          </Button>
          <Box component="div">
            <Box component="p" sx={{ fontSize: "13px", mt: 1}}>
              Already have an account?
              <Box component="span" p={1}>
                <Link href="/auth/sign-in" color='#457B83' underline="none">
                  Login
                </Link>
              </Box>
            </Box>
          </Box>
          {isLoading && <LoadingPage />} 
          {/* {/* <SnackbarComp
            snackBarOpen={snackBarOpen}
            setSnackBarOpen={setSnackBarOpen}
            alert={handleSnack.alert}
            message={handleSnack.message}
          /> */}
        </Stack>
      </Box>
    </>
  );
};

export default SignUp;
