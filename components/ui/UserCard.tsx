import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const UserCard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        display="flex"
        justifyContent={"start"}
        alignItems={"center"}
        width="100%"
        color="#ffff"
        //   pl='5px'
      >
        <Box>
          <Avatar
            sx={{
              bgcolor: { md: "#457B83", sm: "#457B83", xs: "#457B83" },
              marginRight: "15px",
              width: 34,
              height: 34,
              color: { xs: "#ffff", md: "#fff", sm: "#fff" },
            }}
            alt="Vaad Media"
          >
            <PersonOutlineIcon />
          </Avatar>
        </Box>
        <Stack direction={"column"} spacing={1}>
          <Typography>ToyinCares</Typography>
          <Typography>balance: ₦ 50,000</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default UserCard;
