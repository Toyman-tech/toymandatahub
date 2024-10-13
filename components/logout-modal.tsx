"use client"
// import auth from "@/auth";
import LoadingPage from "@/components/LoadingPage";
import SnackbarComp from "@/components/Toast";
// import { useLogout } from "@/lib/useLogout";
import { dlgModStyle } from "@/theme/modStyles";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type LogoutModProps = {
  open: boolean;
  handleClose: () => void;
};

export default function LogoutModal({ open, handleClose }: LogoutModProps) {
  const router = useRouter()
  // const {
  //   mutateLogout,
  //   isLoading,
  //   isError,
  //   handleSnack,
  //   snackBarOpen,
  //   setSnackBarOpen,
  // } = useLogout("User");
  const handleLogout = async (e)=>{
    e.preventDefault()
  // Delete the cookie (on logout)

  const getsess = Cookies.get('session')
  console.log("hjjj", getsess)
  Cookies.remove('session', { path: '/' });
    // try {
    //   // const user = await auth.getUser();
    //   // console.log(user)
    //   // console.log(email, password)
    //   // Cookies.delete('session', sesion.secret, {
    //   //   expires: new Date(sesion.expire)
    //   // });
    //   //  router.push('/dashboard');
     
    //  } catch (error) {
    //   console.error(error)
    //   console.log('error')
    //  } 
    handleClose()
    router.push('/auth/sign-in')
  }
  return (
    <>
      <Modal open={open}>
        <Box sx={dlgModStyle}>
          <Stack
            gap={2}
            p={{ xs: 2, md: 4 }}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={300}
          >
            <Typography variant="h6" textAlign={"center"}>
              Are you sure you want to log out of your session?
            </Typography>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
            >
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ textTransform: "capitalize" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ textTransform: "capitalize" }}
                onClick={
                  // mutateLogout();
                  handleLogout
                }
              >
                Yes, proceed
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      {/* {isLoading && (
        <LoadingPage
          info={<Typography>Logging out...</Typography>}
          zIndex={200}
        />
      )} */}

      {/* <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      /> */}
    </>
  );
}
