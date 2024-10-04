import LoadingPage from "@/components/LoadingPage";
import SnackbarComp from "@/components/Toast";
// import { useLogout } from "@/lib/useLogout";
import { dlgModStyle } from "@/theme/modStyles";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";

type LogoutModProps = {
  open: boolean;
  handleClose: () => void;
};

export default function LogoutModal({ open, handleClose }: LogoutModProps) {
  // const {
  //   mutateLogout,
  //   isLoading,
  //   isError,
  //   handleSnack,
  //   snackBarOpen,
  //   setSnackBarOpen,
  // } = useLogout("User");

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
                onClick={() => {
                  handleClose();
                  // mutateLogout();
                }}
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
