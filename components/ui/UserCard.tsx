import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import { getUser } from "@/lib/actions/user.actions";
import auth from "@/auth";
import { getUser } from "@/lib/actions/user.actions";

const UserCard = () => {
 const [user, setUser] = useState('')
 
  useEffect(() => {
    const fetchUser = async ()=>{
      // Ensure the code runs on the client-side
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("tee"); // Retrieve the value from localStorage
      if (storedUserId) {
        const userr = await getUser(storedUserId);
         // Update state with the stored user ID
        console.log("lfg", userr)
        setUser(userr.name)
        }
    }
    }
    fetchUser();
  }, []); // Empty array ensures this runs only once, when the component is mounted

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
          <Typography>{user}</Typography>
          <Typography>balance: ₦ 50,000</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default UserCard;
