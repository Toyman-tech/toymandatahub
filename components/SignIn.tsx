"use client";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  CircularProgress,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAdminSigninHook } from "@/lib/signin-hook"; // Adjust the import path as necessary
import SnackbarComp, { useToast } from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";
import GoogleIcon from "@mui/icons-material/Google";
import { redirect, useRouter } from "next/navigation";
// import { account, ID } from "./appwrite";

import { setsession} from "../app/cong/action";
import Cookies from "js-cookie";
import { createUserClient } from "@/appwrite/config";
// import { CreateUserClient } from "@/lib/actions/user.actions";


const SignIn = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(false);
  const [session, setSession] = useState (null);
  
  const { handleMessage, handleSnack, snackBarOpen, setSnackBarOpen } =
  useToast();


useEffect( ()=>{
  const sessionCookie = Cookies.get('session');
  if (sessionCookie){
    setSession(sessionCookie)
  }
}, []);

  const handleLogin = async(e: React.MouseEvent) => {
    e.preventDefault();
    setName(true)
     try {
      const {account} = await createUserClient()
      console.log(account)
      const sesion = await account.createEmailPasswordSession(
        email,
        password
       )
      console.log(sesion)
      console.log(email, password)
      Cookies.set('session', sesion.secret, {
        expires: new Date(sesion.expire),
      });
      setSession(sesion)
      //  if(sesion){
      //   handleMessage(
      //     "success",
      //     "You have sucessfully logged in"
      //   );
      //   return;
      //  }
      handleMessage(
        "success",
        "You have sucessfully logged in"
      );
       router.push('/dashboard');
       setName(false)   
      // return account;
     } catch (error) {
      console.error(error)
      console.log('error')
      setName(false)
      handleMessage(
        "error",
        "Invalid login details or check your network connection"
      );
     }
    
  }
  
  return (
    <>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width='100%'
        
      >
        <Stack
        mt='50px'
          direction="column"
          spacing={{ md: 2, xs: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="form"
          width="100%"
        >
          <Box
            component="p"
            fontWeight={600}
            sx={{ fontSize: { md: "25px", xs: "28px" } }}
          >
            Welcome Back!
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
            // startIcon={
            //   !googleLoading && (
            //     <GoogleIcon sx={{ width: "20px", height: "20px" }} />
            //   )
            // }
            // onClick={handleGoogleSignup}
            // disabled={isLoading || googleLoading}
          >
            {/* {googleLoading ? (
              <CircularProgress size={"20px"} />
            ) : (
              "    Sign in with google"
            )} */}  Sign in with google
          </Button>
          <Divider sx={{ width: "100%", my: "2em" }}>Or</Divider>

          <Stack
            direction="column"
            spacing={3}
            display="flex"
            minHeight={400}
            alignItems="center"
            justifyContent="flex-start"
            width={'100%'}

          >
            <TextField
              id="outlined-basic"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              // disabled={isLoading || googleLoading}
              fullWidth
              sx={{
                height: "100%", // Custom height
                // borderColor:' #5b3a3acc',
                borderRadius: '8px',
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
            <TextField
              // disabled={isLoading || googleLoading}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{
                height: "100%", // Custom height
                color:'black',
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
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <IconButton
              //         onClick={() => {
              //           setPwdVisible(!pwdVisible);
              //         }}
              //       >
              //         {!pwdVisible ? <Visibility /> : <VisibilityOff />}
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
            />
            <Stack
              direction="row"
              spacing={4}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontSize="15px"
              paddingTop="3px"
              paddingBottom="3px"
              width={'100%'}
            >
              <Box component="p" >Remember me</Box>
              <Link
                href="/auth/recover-password"
                color='#457B83'
                underline="none"
              >
                Forgot Password?
              </Link>
            </Stack>
            <Button
              type="submit"
              // disabled={isLoading || googleLoading}
              fullWidth
            
              sx={{
                height: 45.7, // Custom height

                borderRadius: "8px",
                boxShadow: "none",
                textTransform: "initial",
                fontSize: "13px",
                fontWeight: 200,
                backgroundColor: "#2A4F55",
                ":hover":{
                  backgroundColor: "#457B83",
                }
              }}
              variant="contained"
              // onClick={() => login(email, password)}
              // onClick = {()=> 
              //   handleLogin(email, password)
              // }
              onClick = { 
                 handleLogin
              }
            >
              {/* {isLoading ? 'Loading...' : 'Login'} */}
              Login
            </Button>

            <Box component="div" display="flex">
              <Box component="p" sx={{ fontSize: "15px", mt: 1 }}>
                Don&apos;t have an account?
                <Box component="span" p={1}>
                  <Link href="/auth/sign-up" color='#457B83' underline="none">
                    Sign up
                  </Link>
                </Box>
              </Box>
            </Box>
          </Stack>

           {name && <LoadingPage />}
          <SnackbarComp
            snackBarOpen={snackBarOpen}
            setSnackBarOpen={setSnackBarOpen}
            alert={handleSnack.alert}
            message={handleSnack.message}
          /> 
        </Stack>
      </Box>
    </>
  );
};

export default SignIn;
