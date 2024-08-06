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

const SignUp = () => {
  const [googleLoading, setgoogleLoading] = useState(false)
  const [pwdVisible, setPwdVisible] = useState(false);
  const [pwdVisible2, setPwdVisible2] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  // const {
  //   handleSnack,
  //   snackBarOpen,
  //   setSnackBarOpen,
  //   register,
  //   errors,
  //   isLoading,
  //   handleSubmit,
  //   onSubmit,
  //   googleLoading,
  //   handleGoogleSignup,
  // } = useUserSignupHook();
  const handleSubmit =() =>{

  }
  // Function to handle form submission
  const handleFormSubmit = (data) => {
    // Check if password and confirm password match
    if (data.password !== confirmPassword) {
      // Show alert if passwords don't match
      alert("Passwords do not match!");
      //handleMessage("Passwords do not match!");
      return; // Stop form submission
    }
    // Proceed with form submission if passwords match
  };

  return (
    <>

      <Box
        component="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                type="firstname"
                label="Firstname"
                variant="outlined"
                // disabled={isLoading || googleLoading}
                sx={{
                  height: "100%", // Custom height
                  width: "100%",
                  fontSize: "13px",
                  fontWeight: 200,
                }}
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
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
            </Grid>
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
                //value={confirmPassword}
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
              backgroundColor: "#5b3a3acc",
              ":hover":{
                backgroundColor: "#5b3a3a",
              }

            }}
            variant="contained"
            type="submit"
          >
            {/* {isLoading ? <CircularProgress size={"20px"} /> : "Sign up"} */}
            Sign up
          </Button>
          <Box component="div">
            <Box component="p" sx={{ fontSize: "13px", mt: 1}}>
              Already have an account?
              <Box component="span" p={1}>
                <Link href="/auth/sign-in" color='#5b3a3acc' underline="none">
                  Login
                </Link>
              </Box>
            </Box>
          </Box>
          {/* {isLoading && <LoadingPage />} */}
          {/* <SnackbarComp
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
