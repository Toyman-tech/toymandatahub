"use client";
import SnackbarComp from "@/components/Toast";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useCompleteProfile from "./useCompleteProfile";


const PageWrap = () => {
  const {
    isLoading,
    register,
    handleSnack,
    snackBarOpen,
    setSnackBarOpen,
    onSubmit,
    errors,
    handleSubmit,
    handleSnackUser,
    snackBarOpenUser,
    setSnackBarOpenUser,
    userData,
  } = useCompleteProfile();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update Your Details.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              mt: 3,
              width: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
     
                  type="text"
                  placeholder="first name"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
            
                  error={errors?.firstname ? true : false}
                  helperText={
                    errors?.firstname ? (
                      <Typography variant="body2" color={"red"} fontSize="12px">
                        {errors?.firstname?.message}
                      </Typography>
                    ) : (
                      <></>
                    )
                  }
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
       
                  type="text"
                  placeholder="last name"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
      
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("lastname", {
                    required: "Last Name is required",
                  })}
                  error={errors?.lastname ? true : false}
                  helperText={
                    errors?.lastname ? (
                      <Typography variant="body2" color={"red"} fontSize="12px">
                        {errors?.lastname?.message}
                      </Typography>
                    ) : (
                      <></>
                    )
                  }
                />
              </Grid>
                   <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
             
                  type="email"
                  placeholder="Email address"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  
                  sx={{ margin: 0 }}
                  disabled
                  {...register("email")}
                  
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
           
                  type="tel"
                  placeholder="Phone Number"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                  })}
                  error={errors?.phoneNumber ? true : false}
                  helperText={
                    errors?.phoneNumber ? (
                      <Typography variant="body2" color={"red"} fontSize="12px">
                        {errors?.phoneNumber?.message}
                      </Typography>
                    ) : (
                      <></>
                    )
                  }
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
                
                  type="text"
                  placeholder="Country"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("country")}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
                
                  type="text"
                  placeholder="City"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("city")}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
                  
                  type="text"
                  placeholder="Address"
                  fullWidth
                  variant="outlined"
                  margin={"normal"}
                  sx={{ margin: 0 }}
                  disabled={isLoading}
                  {...register("address")}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: { lg: "auto", md: "auto", sm: "auto", xs: "100%" },
                  }}
                >
                  <Button
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: { lg: "auto", md: "auto", sm: "auto", xs: "100%" },
                      backgrounColor: "#0177AB",
                      "&:hover": {
                        backgroundColor: "#0177AB",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {isLoading ? <CircularProgress size="20px" /> : "Continue"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <SnackbarComp
        snackBarOpen={snackBarOpen || snackBarOpenUser}
        setSnackBarOpen={setSnackBarOpen || setSnackBarOpenUser}
        alert={handleSnack.alert || handleSnackUser.alert}
        message={handleSnack.message || handleSnackUser.message}
      />
    </Box>
  );
};

export default PageWrap;
