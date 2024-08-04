"use client";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
//import CustomButton from "../../components/Button";
import Link from "next/link";
import { StepIndicator } from "./StepIndicator";
import OtpInput from "react-otp-input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ForgotPassProps, Input } from "./forgotpasssword";
import {
  useSendForgetPwdLink,
  useSendForgetPwdOtp,
} from "@/lib/useForgetPwd";
import SnackbarComp, { useToast } from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";

export interface ResetPasswordData {
  otp: string;
}

export const ResetPasssword: React.FC<ForgotPassProps> = ({
  handleNext,
  steps,
  step,
  handleMessage,
  setIsLoading,
}) => {
  const theme = useTheme();

  const [email, setEmail] = useState("");

  const { submit, isLoading } = useSendForgetPwdOtp();
  const { submit: resendLink, isLoading: isLinkLoading } =
    useSendForgetPwdLink();
    const {  handleSnack, snackBarOpen, setSnackBarOpen } =
    useToast();


  useEffect(() => {
    setEmail(sessionStorage.getItem("forgot-pwd-email") ?? "");
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>();

  useEffect(() => {
    setIsLoading(isLoading || isLinkLoading);
  }, [isLoading, setIsLoading, isLinkLoading]);

  const onSubmit: SubmitHandler<ResetPasswordData> = async (data) => {
      console.log(data)
      const token = data?.otp;
      console.log(token)
      const expirationTime = new Date().getTime() + (60 * 30 * 1000); // 1 hour from now
      sessionStorage.setItem("forgot-pwd-token", token);
      sessionStorage.setItem("forgot-pwd-token-expiration", expirationTime.toString());
    try {
      await submit({ ...data });
      handleMessage(
        "success",
        `OTP verified successfully. Proceed to create a new password`
      );
      handleNext();
    } catch (error) {
      handleMessage("error", String(error));
    }
  };

  const resendOtp = async () => {
    try {
      await resendLink({ email });
      handleMessage("success", `OTP has been re-sent to ${email}`);
    } catch (error) {
      handleMessage("error", String(error));
    }
  };

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
          Password Reset
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}
          sx={{
            fontSize: "1.1rem",
            [theme.breakpoints.down("md")]: {
              fontSize: ".9rem",
            },
          }}
        >
          An Otp was sent to{" "}
          <Typography
            variant="subtitle1"
            display={"inline-block"}
            sx={{
              fontSize: "1.1rem",
              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
              },
            }}
          >
            {email}
          </Typography>
        </Typography>
        <Box
          mt={5}
          sx={{ width: { xs: "100%", md: "80%" } }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={2}>
            <Box
              mt={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Controller
                name="otp"
                control={control}
                defaultValue=""
                rules={{ required: "Please enter the OTP" }}
                render={({ field }) => (
                  <OtpInput
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    numInputs={6}
                    inputStyle={{
                      width: "45px",
                      height: "45px",
                      marginRight: "3px",
                      borderRadius: "6px",
                      border: errors.otp ? "2px solid red" : "none",
                      outline: "none",
                      fontSize: "1.3rem",
                      backgroundColor: "#607d8b33",

                    }}
                    inputType="number"
                    renderInput={(props) => <input {...props} />}
                  />
                )}
              />
            </Box>
            <Box
              mt={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{ textTransform: "capitalize", mt: 2,
                width:{md:'50%', xs:'80%' }}}
              >
                Reset Password
              </Button>
            </Box>
            <Typography
              variant="h6"
              component={"p"}
              textAlign={"center"}
              sx={{
                fontSize: "1.1rem",
                [theme.breakpoints.down("md")]: {
                  fontSize: ".95rem",
                },
              }}
            >
              Didn’t receive the email?{" "}
              <Typography
                variant="h6"
                component={"span"}
                sx={{
                  fontSize: "1.1rem",
                  [theme.breakpoints.down("md")]: {
                    fontSize: ".95rem",
                  },
                  color:'#2196f3a8',
                  cursor: "pointer",
                }}
                onClick={() => resendOtp()}
              >
                Click to resend
              </Typography>
            </Typography>

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
          <Box mt={10}>
            <StepIndicator steps={steps} step={step} />
          </Box>
        </Box>
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
