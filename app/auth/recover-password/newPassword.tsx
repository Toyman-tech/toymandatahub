"use client";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { StepIndicator } from "./StepIndicator";
import { useForm, SubmitHandler } from "react-hook-form";
import SnackbarComp, { useToast } from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";
import { getForgotPwdToken } from "@/lib/useForgetPwd";
import { useResetPassword } from "../../../lib/useForgetPwd";

interface ForgotPassProps {
  handleNext: () => void;
  steps: number;
  step: number;
  handleMessage: (indicator: any, mssg: string) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface newPass {
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

export interface newPass2 {
  otp: string;
  newPassword: string;
}

export const NewPasssword: React.FC<ForgotPassProps> = ({
  handleNext,
  steps,
  step,
  handleMessage,
  setIsLoading,
}) => {
  const theme = useTheme();
  const { register, formState: { errors }, handleSubmit, watch } = useForm<newPass>();

  const { submit, isLoading } = useResetPassword();
  const [pwdVisible, setPwdVisible] = useState(false);
  const { handleSnack, snackBarOpen, setSnackBarOpen } = useToast();

  const onSubmit: SubmitHandler<newPass2> = async (data) => {
    if (typeof window !== "undefined") {
      const otp = getForgotPwdToken();

      if (!otp) {
        handleMessage("error", "Token is missing or expired.");
        return;
      }

      try {
        await submit({ otp, ...data });
        handleMessage("success", "Password reset successful.");
        handleNext();
      } catch (error) {
        handleMessage("error", String(error));
      }
    }
  };

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  // Watch the newPassword and confirmPassword fields
  const newPassword = watch("newPassword");

  return (
    <>
      <Box
        display={"flex"}
        sx={{
          width: { xs: "100%", sm: "50%" },
          minHeight: "100vh",
        }}
        py={2}
        px={3}
        position={"relative"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height="100vh"
      >
        <Stack
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height="100vh"
        >
          <Typography
            variant="h4"
            component={"h4"}
            textAlign={"center"}
            sx={{
              fontSize: "2rem",
              [theme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
              },
            }}
          >
            Set new password
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            sx={{
              fontSize: "1.1rem",
              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
              },
            }}
          >
            Must be at least 6 characters.
          </Typography>
          <Box sx={{ width: { xs: "80vw", md: "30vw" } }} mt={2}>
            <Stack spacing={3} justifyContent="center" alignItems="center">
              <Stack spacing={2}>
                <Box sx={{ width: { xs: "80vw", md: "30vw" } }}>
                  <TextField
                    type="password"
                    id="password"
                    placeholder="**********"
                    label="Password"
                    sx={{
                      height: "100%",
                      width: "100%",
                      fontSize: "13px",
                      fontWeight: 200,
                    }}
                    {...register("newPassword", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be at least 6 characters" },
                    })}
                    error={errors?.newPassword ? true : false}
                    helperText={
                      errors?.newPassword ? (
                        <Typography variant="body2" color={"red"} fontSize='0.5rem'>
                          {errors?.newPassword?.message}
                        </Typography>
                      ) : (
                        <></>
                      )
                    }
                  />
                  
                </Box>
                <Box>
                  <TextField
                    type="password"
                    id="confirmPassword"
                    placeholder="**********"
                    sx={{
                      height: "100%",
                      width: "100%",
                      fontSize: "13px",
                      fontWeight: 200,
                    }}
                    label="Confirm password"
                    {...register("confirmPassword", {
                      required: "Password confirmation is required",
                      validate: value => value === newPassword || "Passwords do not match",
                    })}
                    error={errors?.confirmPassword ? true : false}
                    helperText={
                      errors?.confirmPassword ? (
                        <Typography variant="body2" color={"red"} fontSize='0.5rem'>
                          {errors?.confirmPassword?.message}
                        </Typography>
                      ) : (
                        <></>
                      )
                    }
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
                    backgroundColor: "#0177AB",
                    justifyContent:"center",
                  alignItems:"center"
                  }}
                  onClick={handleSubmit(onSubmit)}
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
            <Box mt={6}>
              <StepIndicator steps={steps} step={step} />
            </Box>
          </Box>
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
