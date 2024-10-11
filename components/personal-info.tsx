"use client";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  inputBaseClasses,
  InputLabel,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { RootState } from "@/store";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useUpdateProfile } from "@/lib/useForgetPwd";
import SnackbarComp, { useToast } from "./Toast";
import LoadingPage from "./LoadingPage";
// import { useUserPInfoHook } from "./personal-info-hook";
// import ImgUploadModal from "./img-confirm-modal";

export interface UpdatePicture {
  profilePicture: string;
}
export interface UpdatePass {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  dateOfBirth: string;
  country: string;
  city: string;
  address: string;
}

const PersonalInfo = ({ handleMessage, setIsLoading }) => {
  //////////////////////IMAGE///////////////
  const [openMod, setOpenMod] = useState(false);
  const handleOpenMod = () => setOpenMod(true);
  const handleCloseMod = () => {
    setOpenMod(false);
  };
  const uploadRef: LegacyRef<HTMLInputElement> | undefined = useRef(null);

  // const {
  //   // handleSnack,
  //   // snackBarOpen,
  //   // setSnackBarOpen,
  //   // register,
  //   // errors,
  //   // isLoading,
  //   // handleSubmit,
  //   // onSubmit,
  //   handleImageChange,
  //   profilePic,
  //   uploadProfileImg,
  //   isImgUploading,
  //   uploadProgress,
  // } = useUserPInfoHook(handleOpenMod);

  ///////////////////////////

  const theme = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdatePass>();
  const { handleSnack, snackBarOpen, setSnackBarOpen } = useToast();
  // const { userData } = useSelector((state: RootState) => state.userData);
  // console.log(userData);
  // const { submit, isLoading } = useUpdateProfile();

  // const onSubmit: SubmitHandler<UpdatePass> = async (data) => {
  //   try {
  //     await submit({
  //       ...data,
  //     });
  //     handleMessage("success", "Your Profile has been updated.");
  //   } catch (error) {
  //     handleMessage("error", String(error));
  //   }
  // };
  // const onSubmit2: SubmitHandler<UpdatePicture> = async (data) => {
  //   try {
  //     await submit({
  //       ...data,
  //     });
  //     handleMessage("success", "Your Profile has been updated.");
  //   } catch (error) {
  //     handleMessage("error", String(error));
  //   }
  // };

  // useEffect(() => {
  //   setIsLoading(isLoading);
  // }, [isLoading, setIsLoading]);

  const InputLabelProps: TextFieldProps["InputLabelProps"] = {
    shrink: true,
    sx: {
      color: "text.primary",
      transform: "translate(0, 1.5px) scale(0.8)",
      letterSpacing: 1,
      "&.Mui-focused:not(.Mui-error)": {
        color: "text.primary",
      },
    },
  };
  const InputProps: TextFieldProps["InputProps"] = {
    sx: {
      backgroundColor: "transparent",
      transition: "0.3s",
      [`&.${inputBaseClasses.focused}`]: {
        backgroundColor: "common.white",
      },
      [`&.${inputBaseClasses.error}`]: {
        backgroundColor: "#fff0f0",
        [`&.${inputBaseClasses.focused}`]: {},
      },
      [`&.${inputBaseClasses.disabled}`]: {
        backgroundColor: "grey.50",
      },
      [`& .${inputBaseClasses.input}`]: {
        padding: "1rem",
      },
    },
  };
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="center"
        sx={{ marginTop: { xs: "32px", lg: "-30px" } }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <Avatar
            src={'/dp1.png'}
            sx={{
              height: { xs: "96px", md: "96px" },
              width: { xs: "96px", md: "96px" },
            }}
          />
          {/* <div>
            <Button
              type="submit"
              onClick={() => {
                profilePic && handleOpenMod();
                uploadRef.current?.click();
              }}
            >
              <input
                ref={uploadRef}
                type="file"
                id="profilePic"
                accept="images/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <IconButton
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "-26px",
                  backgroundColor: "#0177AB",
                }}
                aria-label="edit"
                size="small"
              >
                <DriveFileRenameOutlineIcon sx={{ fontSize: "16px" }} />
              </IconButton>
            </Button>
          </div> */}
        </div>
      </Stack>
      <FormControl
        fullWidth
        sx={{
          marginTop: "20px",
          justifyContent: { xs: "center", md: "center" },
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <Grid
          container
          spacing={1}
          width={{ md: "80%" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              type="text"
              placeholder="first name"
              fullWidth
              // defaultValue={userData?.firstname}
              sx={{ marginTop: "22.5px" }}
              variant="outlined"
              margin={"normal"}
              InputProps={InputProps}
              {...register("firstname", {
                required: "First Name is required",
                minLength: {
                  message: "Firstname must be minimum of 1 character.",
                  value: 1,
                },
              })}
              error={errors?.firstname ? true : false}
              helperText={
                errors?.firstname ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.firstname?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              // defaultValue={userData?.lastname}
              type="text"
              fullWidth
              sx={{ marginTop: "22.5px" }}
              placeholder={"last name"}
              variant="outlined"
              margin={"normal"}
              //   InputLabelProps={InputLabelProps}
              InputProps={InputProps}
              {...register("lastname", {
                required: "Last Name is required",
                minLength: {
                  message: "Firstname must be minimum of 1 character.",
                  value: 1,
                },
              })}
              error={errors?.lastname ? true : false}
              helperText={
                errors?.lastname ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.lastname?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              // defaultValue={userData?.phoneNumber}
              type="tel"
              fullWidth
              sx={{ marginTop: "22.5px" }}
              placeholder={"phone number"}
              variant="outlined"
              margin={"normal"}
              //   InputLabelProps={InputLabelProps}
              InputProps={InputProps}
              {...register("phoneNumber", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              error={errors?.phoneNumber ? true : false}
              helperText={
                errors?.phoneNumber ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.phoneNumber?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ marginTop: "22.5px", width: "100%" }}
                label="Date of Birth"
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Country"
              type="country"
              fullWidth
              sx={{ marginTop: "22.5px" }}
              placeholder={"country"}
              // defaultValue={userData?.country}
              variant="outlined"
              margin={"normal"}
              //   InputLabelProps={InputLabelProps}
              InputProps={InputProps}
              {...register("country", {
                required: "Country is required",
              })}
              error={errors?.country ? true : false}
              helperText={
                errors?.country ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.country?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="City"
              type="city"
              fullWidth
              sx={{ marginTop: "22.5px" }}
              placeholder={"city"}
              variant="outlined"
              // defaultValue={userData?.city}
              margin={"normal"}
              //   InputLabelProps={InputLabelProps}
              InputProps={InputProps}
              {...register("city", {
                required: "City is required",
              })}
              error={errors?.city ? true : false}
              helperText={
                errors?.city ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.city?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
          <Grid item xs={12} md={12} width={"100%"}>
            <TextField
              label="Address"
              type="address"
              // defaultValue={userData?.address}
              fullWidth
              sx={{ marginTop: "22.5px" }}
              placeholder={"address"}
              variant="outlined"
              margin={"normal"}
              //   InputLabelProps={InputLabelProps}
              InputProps={InputProps}
              {...register("address", {
                required: "Address is required",
              })}
              error={errors?.address ? true : false}
              helperText={
                errors?.address ? (
                  <Typography variant="body2" color={"red"} fontSize="0.5rem">
                    {errors?.address?.message}
                  </Typography>
                ) : (
                  <></>
                )
              }
            />
          </Grid>
        </Grid>

        <Stack
          justifyContent={"center"}
          sx={{ alignItems: "center", width: "100%", marginTop: "20px" }}
        >
          <Button
            sx={{
              height: 45.7, // Custom height
              width: { xs: "100%", md: "50%" },
              borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "15px",
              fontWeight: 200,
              backgroundColor: "#2A4F55",
              ":hover":{
                backgroundColor: "#457B83",
              }
            }}
            variant="contained"
            type="submit"
            // onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Stack>
      </FormControl>
      {/* {isLoading && <LoadingPage />} */}
      {/* <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      /> */}
      {/* <ImgUploadModal
        open={openMod}
        handleClose={handleCloseMod}
        imgSrc={profilePic}
        uploadProfileImg={uploadProfileImg}
      /> */}
      {/* {(isLoading || isImgUploading) && (
        <LoadingPage
          info={
            isImgUploading ? (
              <Stack p={8} bgcolor="white" sx={{ borderRadius: "10px" }}>
                <Typography variant="h6" fontWeight={600}>
                  {uploadProgress}% Done
                </Typography>
              </Stack>
            ) : (
              <></>
            )
          }
        />
      )} */}

      <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      />
    </>
  );
};

export default PersonalInfo;
//"https://res.cloudinary.com/duzrrmfci/image/upload/v1703842924/logo.jpg"
