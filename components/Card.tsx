import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Atm from "./Atm";

const Card = () => {
  return (
    <Box
      padding="30px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffff",
        // width:"100vw"
      }}
    >
      <Stack direction={"column"} spacing={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#457B83",
            width: { xs: "90vw", md: "50vw" },
            height: "220px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}
        >
          <Stack
            direction="column"
            display="flex"
            height="100%"
            //  position={'relative'}
            justifyContent={"space-between"}
            alignItems="center"
            spacing={1}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "90vw", md: "50vw" },
                backgroundColor: "#ffff",
                color: "#ffff",
              }}
            >
              .
            </Box>

            <Stack
              direction="column"
              display="flex"
              height="100%"
              //  position={'relative'}
              justifyContent={"space-between"}
              alignItems="center"
              padding={'15px'}
            >
              <Box component="h3" display="flex" justifyContent={"start"}>
                Wallet Balance
              </Box>
              <Typography  fontSize={"45px"}>
                N 50,000.00
              </Typography>
              <Box component="h3">Refer to Earn</Box>
            </Stack>
          </Stack>
        </Box>
        <Atm />
      </Stack>
    </Box>
  );
};

export default Card;
