"use client";

import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useFormState } from "react-dom";
import { useTheme } from "@mui/styles";
// import { useResetPassword2 } from "@/lib/useForgetPwd";
import { useForm, SubmitHandler } from "react-hook-form";
import LoadingPage from "./LoadingPage";
import SnackbarComp, { useToast } from "./Toast";

export interface SettingPass {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export interface SettingPass2 {
  oldPassword: string;
  newPassword: string;
}
interface ChangePhoneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleMessage: (type: string, message: string) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePhone: React.FC<ChangePhoneProps> = ({
  setStep,
  handleMessage,
  setIsLoading,
}) => {
  const theme = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SettingPass>();
  const { handleSnack, snackBarOpen, setSnackBarOpen } = useToast();
  const newPassword = watch("newPassword");
  const [pwdVisible, setPwdVisible] = useState(false);
  const [pwdVisible2, setPwdVisible2] = useState(false);
  const [pwdVisible3, setPwdVisible3] = useState(false);

  // const { submit, isLoading } = useResetPassword2();

  // const onSubmit: SubmitHandler<SettingPass2> = async (data) => {
  //   try {
  //     await submit({
  //       oldPassword: data.oldPassword,
  //       newPassword: data.newPassword,
  //     });
  //     handleMessage("success", "Password reset successful.");
  //   } catch (error) {
  //     handleMessage("error", String(error));
  //   }
  // };

  // useEffect(() => {
  //   setIsLoading(isLoading);
  // }, [isLoading, setIsLoading]);

  return (
    <Box
      sx={{
        padding: { xs: "5px", sm: "22.5px" },
      }}
    >
      <Stack direction="row" alignItems={"center"} gap={3}>
        {/* <IconButton onClick={() => setStep(0)}>
          <KeyboardArrowLeftIcon />
        </IconButton> */}
        <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
          Change password
        </Typography>
      </Stack>

      <Box mt={2}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Stack spacing={{ xs: 2, md: 5 }}>
            <Box>
              <TextField
                id="password"
                placeholder="**********"
                label="Old Password"
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize: "0.5rem",
                  fontWeight: 200,
                }}
                type={!pwdVisible ? "password" : "text"}
                {...register("oldPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                error={errors?.oldPassword ? true : false}
                helperText={
                  errors?.oldPassword ? (
                    <Typography variant="body2" color={"red"} fontSize="0.5rem">
                      {errors?.oldPassword?.message}
                    </Typography>
                  ) : (
                    <></>
                  )
                }
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
            </Box>
            <Box sx={{ width: { xs: "80vw", md: "30vw" } }}>
              <TextField
                id="password"
                placeholder="**********"
                label="New Password"
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize: "0.5rem",
                  fontWeight: 200,
                }}
                type={!pwdVisible2 ? "password" : "text"}
                {...register("newPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                error={errors?.newPassword ? true : false}
                helperText={
                  errors?.newPassword ? (
                    <Typography variant="body2" color={"red"} fontSize="0.5rem">
                      {errors?.newPassword?.message}
                    </Typography>
                  ) : (
                    <></>
                  )
                }
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
            </Box>
            <Box>
              <TextField
                id="confirmPassword"
                placeholder="**********"
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize: "0.5rem",
                  fontWeight: 200,
                }}
                label="Confirm password"
                type={!pwdVisible3 ? "password" : "text"}
                {...register("confirmPassword", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                error={errors?.confirmPassword ? true : false}
                helperText={
                  errors?.confirmPassword ? (
                    <Typography variant="body2" color={"red"} fontSize="0.5rem">
                      {errors?.confirmPassword?.message}
                    </Typography>
                  ) : (
                    <></>
                  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setPwdVisible3(!pwdVisible3);
                        }}
                      >
                        {!pwdVisible3 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>
          <Box
            mt={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: { xs: "100%", md: "30vw" } }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: 45.7,
                width: "99%",
                borderRadius: "8px",
                boxShadow: "none",
                textTransform: "initial",
                fontSize: "13px",
                fontWeight: 200,
                backgroundColor: "#2A4F55",
                ":hover":{
                  backgroundColor: "#457B83",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
              // onClick={handleSubmit(onSubmit)}
            >
              Reset Password
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* {isLoading && <LoadingPage />} */}
      <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      />
    </Box>
  );
};

export default ChangePhone;

// "use client";
// import {
//   Box,
//   Button,
//   Stack,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import React, { useEffect } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useResetPassword2 } from "@/lib/useForgetPwd";
// import LoadingPage from "./LoadingPage";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store";

// export interface SettingPass {
//   oldPassword: string;
//   newPassword: string;
//   confirmPassword: string;
// }
// export interface SettingPass2 {
//   oldPassword: string;
//   newPassword: string;
// }
// interface ChangePhoneProps {
//   setStep: React.Dispatch<React.SetStateAction<number>>;
//   handleMessage: (type: string, message: string) => void;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const ChangePhone: React.FC<ChangePhoneProps> = ({
//   setStep,
//   handleMessage,
//   setIsLoading,
// }) => {
//   const theme = useTheme();
//   const { register, formState: { errors }, handleSubmit, watch } = useForm<SettingPass>();

//   const newPassword = watch("newPassword");

//   const { userData } = useSelector((state: RootState) => state.userData);

//   const { submit, isLoading } = useResetPassword2();

//   const onSubmit: SubmitHandler<SettingPass2> = async (data) => {
//     try {
//       await submit({
//         oldPassword: data.oldPassword,
//         newPassword: data.newPassword,
//       });
//       handleMessage("success", "Password reset successful.");
//     } catch (error) {
//       handleMessage("error", String(error));
//     }
//   };

//   useEffect(() => {
//     setIsLoading(isLoading);
//   }, [isLoading, setIsLoading]);

//   return (
//     <Box
//       display={"flex"}
//       sx={{
//         width: { xs: "100%", sm: "50%" },
//         minHeight: "100vh",
//       }}
//       py={2}
//       px={3}
//       position={"relative"}
//       flexDirection={"column"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       height="100vh"
//     >
//       <Stack
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         height="100vh"
//       >
//         <Stack direction="row" alignItems="center" gap={2}>
//           <Button onClick={() => setStep(0)} sx={{ minWidth: 'auto' }}>
//             <ArrowBackIcon />
//           </Button>
//           <Typography
//             variant="h4"
//             component={"h4"}
//             textAlign={"center"}
//             sx={{
//               fontSize: "2rem",
//               [theme.breakpoints.down("md")]: {
//                 fontSize: "1.5rem",
//               },
//             }}
//           >
//             Change Password
//           </Typography>
//         </Stack>
//         <Box sx={{ width: { xs: "80vw", md: "30vw" } }} mt={2}>
//           <Stack spacing={3} justifyContent="center" alignItems="center">
//             <Stack spacing={2}>
//               <TextField
//                 type="password"
//                 label="old Password"
//                 sx={{
//                   height: "100%",
//                   width: "100%",
//                   fontSize: "0.5rem",
//                   fontWeight: 200,
//                 }}
//                 {...register("oldPassword", {
//                   required: "old password is required",
//                 })}
//                 error={!!errors.oldPassword}
//                 helperText={
//                   errors.oldPassword && (
//                     <Typography variant="body2" color="red" fontSize='0.5rem'>
//                       {errors.oldPassword.message}
//                     </Typography>
//                   )
//                 }
//               />
//               <TextField
//                 type="password"
//                 label="New Password"
//                 sx={{
//                   height: "100%",
//                   width: "100%",
//                   fontSize: "0.5rem",
//                   fontWeight: 200,
//                 }}
//                 {...register("newPassword", {
//                   required: "New password is required",
//                   minLength: { value: 6, message: "Password must be at least 6 characters" },
//                 })}
//                 error={!!errors.newPassword}
//                 helperText={
//                   errors.newPassword && (
//                     <Typography variant="body2" color="red" fontSize='0.5rem'>
//                       {errors.newPassword.message}
//                     </Typography>
//                   )
//                 }
//               />
//               <TextField
//                 type="password"
//                 label="Confirm New Password"
//                 sx={{
//                   height: "100%",
//                   width: "100%",
//                   fontSize: "0.5rem",
//                   fontWeight: 200,
//                 }}
//                 {...register("confirmPassword", {
//                   required: "Password confirmation is required",
//                   validate: value => value === newPassword || "Passwords do not match",
//                 })}
//                 error={!!errors.confirmPassword}
//                 helperText={
//                   errors.confirmPassword && (
//                     <Typography variant="body2" color="red" fontSize='0.5rem'>
//                       {errors.confirmPassword.message}
//                     </Typography>
//                   )
//                 }
//               />
//             </Stack>
//             <Box
//               mt={2}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               sx={{ width: { xs: "100%", md: "30vw" } }}
//             >
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   height: 45.7,
//                   width: "99%",
//                   borderRadius: "8px",
//                   boxShadow: "none",
//                   textTransform: "initial",
//                   fontSize: "0.5rem",
//                   fontWeight: 200,
//                   backgroundColor: "#0177AB",
//                   justifyContent: "center",
//                   alignItems: "center"
//                 }}
//                 onClick={handleSubmit(onSubmit)}
//               >
//                 Reset Password
//               </Button>
//             </Box>
//           </Stack>
//         </Box>
//       </Stack>
//       {isLoading && <LoadingPage />}
//     </Box>
//   );
// };

// export default ChangePhone;
