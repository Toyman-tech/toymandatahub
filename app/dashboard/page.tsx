import React from "react";
import { Box, Stack } from "@mui/material";
import Card from "@/components/Card";
import Features from "@/components/Features";
import AfiiliateCard from "@/components/AfiiliateCard";
import Serv from "@/components/Serv";
import Transactions from "@/components/Transactions";
import Faqs from "@/components/Faqs";
import Notif from "@/components/Notif";
import Support from "@/components/Support";
import auth from "@/auth";

export default async function Home() {
  const user = await auth.getUser();
 
  console.log("tee", user?.$id);
  // if (typeof window !== "undefined") {
  //   localStorage.setItem("tee", user?.$id);
  // }
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          // paddingTop:'30px',
          backgroundColor: "#E3E3E3",
          pl: { md: "35px" },
          padding: "10px",
        }}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Stack direction="column" display={"flex"} spacing={2} width={"100"}>
          <Box component="h2" color="#457B83" sx={{ marginTop: "30px" }}>
            Welcome {user?.name}
          </Box>
          <Card />
          <Features />
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AfiiliateCard />
          </Box>
          <Serv />
          <Transactions />
          <Stack
            direction={{ md: "row", xs: "column" }}
            display="flex"
            spacing={2}
          >
            <Notif />
            <Faqs />
            <Support />
          </Stack>
        </Stack>
      </Box>
    </main>
  );
}
