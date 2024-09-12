import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AfiiliateCard = () => {
  return (
    <Box
      display="flex"
      mt="30px"
      sx={{
        backgroundColor: "#457B83",
        borderRadius: "12px",
        color: "#ffff",
      }}
    >
      <Stack direction="column" padding="15px" spacing={1}>
        <Typography>Affiliate link</Typography>
        <Typography>
          Earn a 5% commission on the first service purchased by friends you
          refer!
        </Typography>
        <Box sx={{ backgroundColor: "#ffff", borderRadius: "6px" }}
        display='flex'
        justifyContent={'center'}
        alignItems={'center'}
        >
          <Stack direction={"row"}
          justifyContent={'center'}
          alignItems={'center'}
          >
            <Typography color="black">
              https://toymandatahub.vercel.app
            </Typography>
            <Box
              component={"img"}
              // ml={{ xs: "10px", md: "55px" }}
              src="/dashboardassets/copy.svg"
              padding={"7px"}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AfiiliateCard;