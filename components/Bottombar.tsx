import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
const bottom1 = [
  { title: "Home", img: "/dashboardassets/lucidehome.svg", link: "/dashboard" },
  {
    title: "Data",
    img: "/dashboardassets/wifi.svg",
    mid: true,
    link: "/dashboard/orders",
  },
];
const bottom2 = [
  {
    title: "Payments",
    img: "/dashboardassets/luciderepeat.svg",
    link: "/dashboard/payments",
  },
  {
    title: "Settings",
    img: "/dashboardassets/lucidesettings.svg",
    link: "/dashboard/settings",
  },
];
const bottoms = [
  {
    title: "",
    img: "/dashboardassets/creditcard.svg",
    mid: true,
    link: "/dashboard/coupon",
  },
];

const Bottombar = () => {
  return (
    <Box
      display={{ md: "none", xs: "block" }}
      sx={{
        backgroundColor: "#2A4F55",
        color: "#ffff",
        position: "sticky",
        bottom: 0,
        zIndex: 5,
      }}
      width={"100%"}
      position="relative"
    >
      <Box display={"flex"} padding="15px">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
        >
          <Link href={"/dashboard"}>
            <Stack direction="column" alignItems="center">
              <Box
                component={"img"}
                src={"/dashboardassets/lucidehome.svg"}
                sx={{ width: "20px", height: "20px", justifyContent: "center" }}
              />

              <Box
                color="#ffff"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                textAlign={"center"}
                fontSize={"12px"}
              >
                Home
              </Box>
            </Stack>
          </Link>
          <Link href={"/dashboard/data"}>
            <Stack direction="column" alignItems={"center"}>
              <Box
                component={"img"}
                src={"/dashboardassets/wifi.svg"}
                sx={{ width: "20px", height: "20px", justifyContent: "center" }}
                pt='1px'
              />

              <Box
                color="#ffff"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                textAlign={"center"}
                fontSize={"12px"}
              >
                Data
              </Box>
            </Stack>
          </Link>
          <Link  href={"/dashboard/wallet"}>
          <Stack
            direction="column"
            sx={{
              backgroundColor: "#7fffd4a6",
              borderRadius: "50%",
              padding: "15px",
              // position:'absolute',
              // top:0,
              // left:'43%',
            }}
          >
            <Box component={"img"} src={"/dashboardassets/creditcard.svg"} />
          </Stack>
          </Link>
          <Link href={"/dashboard/airtime"}>
            <Stack direction="column" alignItems={"center"}>
              <Box
                component={"img"}
                src={"/dashboardassets/phone.svg"}
                sx={{ width: "20px", height: "20px", justifyContent: "center" }}
              />

              <Box
                color="#ffff"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                textAlign={"center"}
                fontSize={"12px"}
              >
                Airtime
              </Box>
            </Stack>
          </Link>

          <Link href={"/dashboard/settings"}>
          <Stack  direction="column" alignItems={"center"}>
            <Box
              component={"img"}
              src={"/dashboardassets/lucidesettings.svg"}
              sx={{ width: "20px", height: "20px", justifyContent: "center" }}
            />

            <Box
              color="#ffff"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize={"12px"}
            >
              Settings
            </Box>
          </Stack>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Bottombar;

// <Box
// display={"flex"}
// // justifyContent={"space-between"}
// // alignItems={"center"}
// >
// <Stack
//   direction="row"
//   padding={"20px"}
//   justifyContent={"space-between"}
//   alignItems={"center"}
//   position={'relative'}
//   spacing={2}
//   width={'100%'}
// >
//    <Stack direction='row'
//   justifyContent={'space-evenly'}
//   width={'100%'}
//   px=''
//   >
//   {bottom1.map((bottom) => (
//     <Stack
//       direction="column"
//       key={bottom.title}
//       display={"flex"}
//       justifyContent={"space-between"}
//       alignItems={"center"}
//       textAlign={"center"}
//       spacing={0.2}
//     >
//       <Box
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       // sx={{
//       //   backgroundColor: bottom.mid ? '#00DEFF' : '',
//       //   borderRadius: bottom.mid ? '50%' : '',
//       //   position: bottom.mid ? 'absolute' : '',
//       //   padding: bottom.mid ? '20px' : '',
//       //   top: bottom.mid ? '0' : '',
//       // }}

//       >
//         <Box component={"img"} src={bottom.img}
//          sx={{
//           width: bottom.mid ? '23px' : 'unset',
//          }}
//         // sx={{
//         //   width: bottom.mid ? '30px' : '19px',
//         // }}
//         />
//       </Box>
//       <Box color="#ffff"
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       textAlign={'center'}
//       >{bottom.title}</Box>
//     </Stack>
//   ))}
//   </Stack>
//   {/* second */}

//   {bottoms.map((bottom) => (
//     <Stack
//       direction="column"
//       key={bottom.title}
//       display={"flex"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       textAlign={"center"}
//       spacing={0.2}

//       sx={{

//       }}
//     >
//       <Box
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       sx={{
//         backgroundColor: bottom.mid ? '#00DEFF' : '',
//         borderRadius: bottom.mid ? '50%' : '',
//         position: bottom.mid ? 'absolute' : '',
//         padding: bottom.mid ? '20px' : '',
//         top: bottom.mid ? '0' : '',
//         marginTop:'-3px'
//       }}

//       >
//         <Box component={"img"} src={bottom.img}
//         // sx={{
//         //   width: bottom.mid ? '30px' : '19px',
//         // }}

//         />
//       </Box>
//       <Box color="#ffff"
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       textAlign={'center'}
//       >{bottom.title}</Box>
//     </Stack>
//   ))}
//   {/* third */}
//   <Stack direction='row'
//   justifyContent={'space-evenly'}
//   width={'100%'}
//   >
//   {bottom2.map((bottom) => (
//     <Stack
//       direction="column"
//       key={bottom.title}
//       display={"flex"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       textAlign={"center"}
//       spacing={0.2}
//     >
//       <Box
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       // sx={{
//       //   backgroundColor: bottom.mid ? '#00DEFF' : '',
//       //   borderRadius: bottom.mid ? '50%' : '',
//       //   position: bottom.mid ? 'absolute' : '',
//       //   padding: bottom.mid ? '20px' : '',
//       //   top: bottom.mid ? '0' : '',
//       // }}

//       >
//         <Box component={"img"} src={bottom.img}
//         // sx={{
//         //   width: bottom.mid ? '30px' : '19px',
//         // }}
//         />
//       </Box>
//       <Box color="#ffff"
//       display={'flex'}
//       justifyContent={'space-between'}
//       alignItems={'center'}
//       textAlign={'center'}
//       >{bottom.title}</Box>
//     </Stack>
//   ))}
//   </Stack>
// </Stack>
// </Box>
