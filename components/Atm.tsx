"use client";
import { fetchAccountData } from "@/lib/actions/user.actions";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Atm = () => {
  const [click, setClick] = useState("wema");
  const [bankname, setBankName] = useState("...");
  const [bankaccount, setBankAccount] = useState(".......");
  const [accountname, setAccountName] = useState(".....");
  // sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
  const handleChange = (e) => {
    e.preventDefault();
    setClick("wema");
  };
  const handleChange1 = (e) => {
    e.preventDefault();
    setClick("moniepoint");
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setClick("zenith");
  };

  useEffect(() => {
    const fetchUser = async () => {
      // Ensure the code runs on the client-side
      if (typeof window !== "undefined") {
        const storedUserId = localStorage.getItem("tee"); // Retrieve the value from localStorage
        console.log("fired");
        if (storedUserId) {
          console.log("im in");
          const details = await fetchAccountData(storedUserId);
          // Parse the JSON string to an object
          const parsedAccount = JSON.parse(details[0]);

          // Access `bankName` and `accountNumber`
          const bankName = parsedAccount.bankName;

          const accountNumber = parsedAccount.accountNumber;
          const accountName = parsedAccount.accountName;
          setBankName(bankName);
          setBankAccount(accountNumber);
          setAccountName(accountName);
          console.log("Bank Name:", bankName); // Output: Wema bank
          console.log("Account Number:", accountNumber); // Output: 0013074298
          console.log(details);
        }
      }
    };
    fetchUser();
  }, []); // Empty array ensures this runs only once, when the component is mounted

  return (
    <Box sx={{ color: "#ffff" }} width={"100%"}>
      <Stack direction="row" display={{ xs: "flex", sm: "none", md: "none" }}>
        <Box component="div" mb="7px">
          <Button
            sx={{
              height: 45.7, // Custom height
              width: "100%",
              justifyContent: "center",
              display: "flex",
              borderRadius: "none",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "15px",
              backgroundColor: "#E3E3E3",
              fontWeight: 200,
              color: "#2A4F55",
              ":hover": {
                backgroundColor: "#E3E3E3",
                fontWeight: 500,
                color: "#2A4F55",
              },
            }}
            variant="contained"
            type="submit"
            onClick={handleChange}
          >
            WEMA
          </Button>
        </Box>
        {/* 2 */}
        <Box component="div">
          <Button
            sx={{
              height: 45.7, // Custom height
              width: "100%",
              justifyContent: "center",
              display: "flex",
              borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "15px",
              backgroundColor: "#E3E3E3",
              fontWeight: 200,
              color: "#2A4F55",
              ":hover": {
                backgroundColor: "#E3E3E3",
                fontWeight: 500,
                color: "#2A4F55",
              },
            }}
            variant="contained"
            type="submit"
            onClick={handleChange1}
          >
            MONIIEPOINT
          </Button>
        </Box>
        {/* 3 */}
        <Box component="div">
          <Button
            sx={{
              height: 45.7, // Custom height
              width: "100%",
              justifyContent: "center",
              display: "flex",
              borderRadius: "8px",
              boxShadow: "none",
              textTransform: "initial",
              fontSize: "15px",
              backgroundColor: "#E3E3E3",
              fontWeight: 200,
              color: "#2A4F55",
              ":hover": {
                backgroundColor: "#E3E3E3",
                fontWeight: 500,
                color: "#2A4F55",
              },
            }}
            variant="contained"
            type="submit"
            onClick={handleChange2}
          >
            Zenith
          </Button>
        </Box>
        {/* next */}
      </Stack>

      <Stack
        direction={{ md: "row", sm: "row", xs: "column" }}
        display={{ xs: "none", sm: "flex", md: "flex" }}
        justifyContent={{ md: "space-between", xs: "center" }}
        alignItems={"center"}
        spacing={2}
        width={{ md: "100%", xs: "100%" }}
      >
        <Box
          width="95%"
          position={"relative"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          <Image
            src="/dashboardassets/wema.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{ sm: 1, xs: 5, md: 5 }}
            zIndex={2}
            width={'100%'}
            position={"relative"}
          >
            <Box component="h3">{bankname}</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {bankaccount}
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              {accountname}
            </Box>
          </Stack>
        </Box>
        {/* second atm */}
        <Box
          width="95%"
          position={"relative"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          <Image
            src="/dashboardassets/moniepoint.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{ sm: 1, xs: 5, md: 5 }}
            zIndex={2}
            position={"relative"}
          width={'100%'}
          >
            <Box component="h3">MONIEPOINT</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {bankaccount}
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              {bankname}
            </Box>
          </Stack>
        </Box>
        {/* third */}
        <Box
          width="95%"
          position={"relative"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          <Image
            src="/dashboardassets/zenith.png"
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{ sm: 1, xs: 5, md: 5 }}
            zIndex={2}
            position={"relative"}
          >
            <Box component="h3">ZENITH</Box>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {bankaccount}
            </Typography>
            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              {accountname}
            </Box>
          </Stack>
        </Box>
      </Stack>

      {/* lot of work to do */}

      <Stack
        direction={{ md: "row", sm: "row", xs: "column" }}
        display={{ xs: "flex", md: "none", sm: "none" }}
        justifyContent={{ md: "space-between", xs: "center" }}
        alignItems={"center"}
        spacing={2}
        width={{ md: "100%", xs: "100%" }}
      >
        <Box
          width="95%"
          position={"relative"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            // width: { xs: "90vw", md: "20vw" },
            height: "250px",
            // backgroundColor: "#08084b",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          <Image
            src={`/dashboardassets/${click}.png`}
            layout="fill"
            objectFit="contain"
            alt="Atm card"
            // sx={{z: '-1', position: 'absolute', }}
          />
          <Stack
            direction="column"
            justifyContent={"space-between"}
            spacing={{ sm: 1, xs: 5, md: 5 }}
            zIndex={2}
            width={"100%"}
            position={"relative"}
          >
            {click == "moniepoint" ? (
              <Box component="h3"> MONIEPOINT</Box>
            ) : click == "wema" ? (
              <Box component="h3"> WEMA </Box>
            ) : (
              <Box component="h3"> ZENITH </Box>
            )}
            {click == "moniepoint" ? (
              <Typography
                fontSize={"25px"}
                fontWeight={700}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {bankaccount}
              </Typography>
            ) : click == "wema" ? (
              <Typography
                fontSize={"25px"}
                fontWeight={700}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {bankaccount}
              </Typography>
            ) : (
              <Typography
                fontSize={"25px"}
                fontWeight={700}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {bankaccount}
              </Typography>
            )}

            <Box
              component="h3"
              display=""
              sx={{
                justifyContent: "end",
                alignItems: "end",
                textAlign: "end",
              }}
            >
              {accountname}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Atm;
