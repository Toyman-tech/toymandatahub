"use client";
import {
  Box,
  Button,
  FormControl,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
// import CustomButton from "../../components/Button";
// import { InputField } from "../../components/InputField";
import Link from "next/link";
import { StepIndicator } from "./StepIndicator";

interface ForgotPassProps {
  steps: number;
  step: number;
}

export const Completed: React.FC<ForgotPassProps> = ({ steps, step }) => {
  const theme = useTheme();
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
        <Box sx={{ width: { xs: "100%", md: "50%" } }} mt={2}>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            spacing={3}
          >
            <Image src={"/dashboardassets/thumb.svg"} alt="check" width={80} height={80} />
            <Box>
              <Typography
                variant="h6"
                component={"h2"}
                textAlign={"center"}
                sx={{
                  fontSize: "2rem",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "1.5rem",
                  },
                }}
              >
                All done!
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
                Your password has been reset.
              </Typography>
            </Box>
            <Box mt={2} width={"100%"}>
              <Link href={"/auth/sign-in"}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
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
                  Proceed to Log In
                </Button>
              </Link>
            </Box>
          </Stack>{" "}
          <Box mt={10}>
            <StepIndicator steps={steps} step={step} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
