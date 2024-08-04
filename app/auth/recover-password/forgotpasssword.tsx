"use client";
import { Box, Button, Stack, TextField, Typography, Link } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StepIndicator } from "./StepIndicator";
import { useSendForgetPwdLink } from "@/lib/useForgetPwd";
import React, { useEffect, useState } from "react";
import SnackbarComp, { useToast } from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";


export interface ForgotPassProps {
  handleNext: () => void;
  steps: number;
  step: number;
  handleMessage: (indicator: any, mssg: string) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Input {
  email: string;
}

export const ForgotPasssword: React.FC<ForgotPassProps> = ({
  handleNext,
  steps,
  step,
  handleMessage,
  setIsLoading,
}) => {
  
  const {
    // handleSnack,
    // snackBarOpen,
    // setSnackBarOpen,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Input>();
  
  const {  handleSnack, snackBarOpen, setSnackBarOpen } =
  useToast();
  const { submit, isLoading } = useSendForgetPwdLink();
  const [pwdVisible, setPwdVisible] = useState(false);

  const onSubmit: SubmitHandler<Input> = async (data) => {
    console.log(data); // Log form data
    // Handle form submission here
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("forgot-pwd-email", data.email);
      try {
        await submit({ ...data });
        handleMessage("success", `OTP has been sent to ${data.email}`);
        handleNext();
      } catch (error) {
        handleMessage("error", String(error));
      }
    }
  };
   useEffect(()=>{
    setIsLoading(isLoading);
   }, [isLoading, setIsLoading]);

  

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          minHeight: "100vh",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={2}
        px={3}
        position="relative"
      >
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box position="absolute" top={35} right={40}>
            <Typography component="span">
              <Link href="/auth/sign-up" color="inherit">
                Create an account
              </Link>
            </Typography>
          </Box>
          <Stack
            direction="column"
            spacing={{ md: 3, xs: 2 }}
            alignItems="center"
            justifyContent="center"
          >
            <Box component="p" fontWeight={600} sx={{ fontSize: "25px" }}>
              Recover Password?
            </Box>
            <Box
              component="p"
              alignItems="center"
              justifyContent="center"
              fontWeight={200}
              paddingBottom="5px"
              sx={{ fontSize: "15px" }}
            >
              Let us help you retrieve it, all you need is to input your Email
              address.
            </Box>
            <Box sx={{ width: { xs: "100%", md: "80%" } }}>
              <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Box>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Enter email address"
                    variant="outlined"
                    required
                    sx={{
                      height: '100%', // Custom height
                      width: '100%',
                      fontSize: "13px",
                      fontWeight: 200,
                    }}
                    {...register("email", { required: "Email is required" })}
                    error={errors?.email ? true : false}
                    helperText={errors?.email?.message}
                  />
                </Box>
                <Box
                  mt={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      height: 45.7,
                      width: "99%",
                      borderRadius: "8px",
                      boxShadow: "none",
                      textTransform: "initial",
                      fontSize: "13px",
                      fontWeight: 200,
                      backgroundColor: "#0177AB",
                    }}
                  >
                    Reset Password
                  </Button>
                </Box>
                <Button
                  variant="text"
                  href="/auth/sign-in"
                  sx={{
                    textTransform: "capitalize",
                    width: "100%",
                  }}
                >
                  <ArrowBackIcon /> Back to log in
                </Button>
              </Stack>
              <Box mt={7}>
                <StepIndicator steps={steps} step={step} />
              </Box>
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
    </>
  );
};

// "use client";
// import {
//   Box,
//   Button,
//   Stack,
//   TextField,
//   Typography,
//   IconButton,
//   InputAdornment,
//   useTheme,
// } from "@mui/material";
// import { SubmitHandler, useForm } from "react-hook-form";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import React, { useEffect, useState } from "react";
// //import CustomButton from "../../components/Button";
// //import { InputField } from "../../components/InputField";
// import Link from "next/link";
// import { StepIndicator } from "./StepIndicator";
// import SnackbarComp from "@/components/Toast";
// import { useSendForgetPwdLink } from "@/lib/useForgetPwd";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAdminSigninHook } from "@/app/admin/signin/signin-hook";
// //import Loading from "@/client/Loading";
// //import { alertType } from "@/lib/hooks/useToast";

// export interface ForgotPassProps {
//   handleNext: () => void;
//   steps: number;
//   step: number;
//   handleMessage: (indicator: any, mssg: string) => void;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export interface Input {
//   email: string;
// }

// export const ForgotPasssword: React.FC<ForgotPassProps> = ({
//   handleNext,
//   steps,
//   step,
//   handleMessage,
//   setIsLoading,
// }) => {
//   const theme = useTheme();

//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//      setInputValue(event.target.value);
//     //setError(false); // Reset error when the user types
//   };
//   // const {
//   //   handleSnack,
//   //   snackBarOpen,
//   //   setSnackBarOpen,
//   //   register,
//   //   errors,
//   //   //isLoading,
//   //   handleSubmit,
//   // // onSubmit,
//   // } = useAdminSigninHook();
//   const {
//     // handleSnack,
//     // snackBarOpen,
//     // setSnackBarOpen,
//     register = inputValue,
//     // errors,
//     // isLoading,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Input>();

//   // const {
//   //   register,
//   //   formState: { errors },
//   //   handleSubmit,
//   // } = useForm<Input>();

//   const { submit, isLoading } = useSendForgetPwdLink();

//   const [pwdVisible, setPwdVisible] = useState(false);

//   const onSubmit: SubmitHandler<Input> = async (data) => {
//     console.log(`${data} you got`)
//     // try {
//     //   sessionStorage.setItem("forgot-pwd-email", data.email);
//     //   await submit({ ...data, accountType: "Business" });
//     //   handleMessage("success", `OTP has been sent to ${data.email}`);
//     //   handleNext();
//     // } catch (error) {
//     //   handleMessage("error", String(error));
//     // }
//   };

//   console.log(onSubmit);

//   useEffect(() => {
//     setIsLoading(isLoading);
//   }, [isLoading, setIsLoading]);

//   return (
//     <>
//       <Box
//         sx={{
//            width: { xs: "100%", sm: "70%" },
//           minHeight: "100vh",
//          //width: "30vw",
//         }}
//         display='flex'
//         justifyContent={'center'}
//         alignItems='center'
//         py={2}
//         px={3}
//         position={"relative"}
//       >
//         <Stack
//           display={"flex"}
//           flexDirection={"column"}
//           alignItems={"center"}
//           justifyContent={"center"}
//           height="100vh"
//         >
//           <Box position={"absolute"} top={35} right={40}>
//             <Typography
//               component={"span"}
//               sx={{
//                 textDecoration: "underline",
//                 color: theme.palette.secondary.main,
//               }}
//             >
//               <Link href="/auth/sign-up" color="black">
//                 Create an account
//               </Link>
//             </Typography>
//           </Box>
//           <Stack

//             direction="column"
//             spacing={{ md: 3, xs: 2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Box component="p" fontWeight={600} sx={{ fontSize: "25px" }}>
//               Recover Password?
//             </Box>
//             <Box
//    <Box sx={{ width: { xs: "100%", md: "80%" } }}>
//               <Stack
//                 spacing={3}
//                 component={"form"}
//                 onSubmit={handleSubmit(onSubmit)}
//               >
//                 <Box component="div">
//                   <TextField
//                     id="outlined-basic"
//                     type="email"
//                     label="Enter email address"
//                     variant="outlined"
//                     required
//                     // : "Please enter your email address",
//                     sx={{
//                       height: '100%', // Custom height
//                       width: '350px',
//                       fontSize: "13px",
//                       fontWeight: 200,
//                       padding: '7px',
//                     }}
//                     // {...register("email", {
//                     //   required: "Email is required",
//                     // })}
//                     // value={register("email", {

//                     // })}
//                     value={inputValue}
//           onChange={handleChange}
//                     error={errors?.email ? true : false}
//                     helperText={
//                       errors?.email ? (
//                         <Typography variant="body2" color={"red"}>
//                           {errors?.email?.message}
//                         </Typography>
//                       ) : (
//                         <></>
//                       )
//                     }
//                   />
//                   {errors?.email && (
//                     <Typography sx={{ color: "red" }}>
//                       {errors.email?.message}
//                     </Typography>
//                   )}
//                 </Box>
//                 <Box
//                   mt={2}
//                   display={"flex"}
//                   justifyContent={"center"}
//                   alignItems={"center"}
//                 >
//                   <Button
//                      sx={{
//                       height: 45.7, // Custom height
//                       width: '99%',
//                       borderRadius: "8px",
//                       boxShadow: "none",
//                       textTransform: "initial",
//                       fontSize: "13px",
//                       fontWeight: 200,
//                       backgroundColor: "#0177AB",
//                     }}
//                     variant="contained"
//                     type='submit'
//                     onClick={handleSubmit(onSubmit)}
//                   >
//                     Reset Password
//                   </Button>
//                 </Box>
//                 <Button
//                   variant="text"
//                   href="/auth/sign-in"
//                   sx={{
//                     textTransform: "capitalize",
//                     width: "100%",
//                   }}
//                 >
//                   <ArrowBackIcon /> Back to log in
//                 </Button>
//               </Stack>
//               <Box mt={7}>
//                 <StepIndicator steps={steps} step={step} />
//               </Box>
//             </Box>
//           </Stack>
//         </Stack>
//       </Box>
//     </>
//   );
// };
