import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import SignIn from "@/components/SignIn";

const PageWrap = () => {
  return (
    <>
      <Stack direction="row" display="flex" spacing={0}>
        <Box
          component="div"
          ml={30}
          sx={{
            display: { xs: "none", md: "flex" },
            width: "45vw",
            height: "100vh",
            position: "relative",
            mx: "0px",
          }}
        >
          <Image
            src="/lp4.jpg"
            layout="fill"
            objectFit="cover"
            alt="image"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            sx={{
              width: "45vw",
              height: "100vh",
              position: "relative",
              color: "white",
              background: "linear-gradient(to top, #222, #222222a1)",
            }}
            
          >
            <Stack
              direction="column"
              spacing={1}
              display="flex"
              alignItems="center"
              p={3}
              justifyContent="center"
              sx={{}}
            >
              {/* <Image
                src={img}
                height={17}
                objectFit="contain"
                alt="Vaad Logo"
              /> */}
              <Box component="div" display="flex">
                <Box component="h1" sx={{ fontSize: "25px" }}>
                  TOYMAN DATAHUB
                </Box>
              </Box>

              <Box component="div" display="flex">
                <Box
                  component="p"
                  mt={1.2}
                  sx={{ fontSize: "15px", fontWeight: 200 }}
                >
                  A great platform to get all kinds of subscription easily <br />
                  <Box
                    component="span"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    without any hassle or insecurity
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: { lg: "500px", md: "500px", sm: "500px", xs: "100%" },
            margin: "0 auto",
            minHeight: "100vh",
            padding: "1em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SignIn />
        </Box>
      </Stack>
    </>
  );
}
export default PageWrap;