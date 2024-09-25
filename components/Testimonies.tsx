import { Box, Stack } from "@mui/material";
import React from "react";

const Testimonies = () => {
  return (
    <Box
      // sx={{ backgroundColor: "#f5f5fa" }}
      padding={"20px"}
    >
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        spacing={5}
      >
        <Box component="h2" padding={"20px"} color="#457b83" fontSize={"25px"}>
          Users Testimonials
        </Box>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
        >
          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box
              component={"img"}
              width="150px"
              height="150px"
              src="/dp3.png"
            />
            <Box component={"p"}>
              ToymanDataHub has been the best VTU platform I have ever used and
              I can recommend it to anyone so they can enjoy their services
              also.
            </Box>
            <Box component="h3">Abubakar Habeeb</Box>
            <Box component="p">Enterpreneur</Box>
          </Stack>
          {/*  */}
          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box
              component={"img"}
              width="180px"
              height="180px"
              src="/dp2.png"
            />
            <Box component={"p"}>
            ToymanDataHub has been the best VTU platform I have ever used and
              I can recommend it to anyone so they can enjoy their services
              also.
            </Box>
            <Box component="h3">Fatimah Maliki</Box>
            <Box component="p">Doctor</Box>
          </Stack>
          {/*  */}
          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box
              component={"img"}
              width="180px"
              height="180px"
              src="/dp1.png"
            />
            <Box component={"p"}>
            ToymanDataHub has been the best VTU platform I have ever used and
              I can recommend it to anyone so they can enjoy their services
              also.
            </Box>
            <Box component="h3">Boluwatife Ibitayo</Box>
            <Box component="p">Engineer</Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Testimonies;
