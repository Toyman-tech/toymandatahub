import { Box, Stack, Typography } from "@mui/material";
import React from "react";
const bottom1 = [
  { title: "Home", img: "/dashboardassets/lucidehome.svg" },
  { title: "Orders", img: "/dashboardassets/shopping.svg", mid: true },
];
const bottom2 = [
  { title: "Payments", img: "/dashboardassets/luciderepeat.svg" },
  { title: "Settings", img: "/dashboardassets/lucidesettings.svg" },
];
const bottoms = [
  { title: "", img: "/dashboardassets/creditcard.svg", mid: true },
];

const Bottombar = () => {
  return (
    <Box
      sx={{ backgroundColor: "#2A4F55", color: "#ffff" }}
      
       width={'100%'}
      position="relative"
    >
      <Box display={"flex"} padding="20px">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
        >
          <Stack direction="column"
          alignItems='center'
          >
            <Box component={"img"} src={"/dashboardassets/lucidehome.svg"}
            sx={{width:'20px', height:'20px', justifyContent:'center', }}
             />

            <Box
              color="#ffff"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize={'12px'}
            >
              Home
            </Box>
          </Stack>
          <Stack direction="column"
          alignItems={'center'}>
            <Box component={"img"} src={"/dashboardassets/shopping.svg"} 
             sx={{width:'20px', height:'20px', justifyContent:'center', }}/>

            <Box
              color="#ffff"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize={'12px'}
            >
              Orders
            </Box>
          </Stack>
          <Stack direction="column"
          sx={{
            backgroundColor:'#7fffd4a6', borderRadius:'50%',
            padding:'15px',
            // position:'absolute',
            // top:0,
            // left:'43%',
          }}
          >
            <Box component={"img"} src={"/dashboardassets/creditcard.svg"} />
          </Stack>
          <Stack direction="column"
          alignItems={'center'}
          >
            <Box component={"img"} src={"/dashboardassets/luciderepeat.svg"}
             sx={{width:'20px', height:'20px', justifyContent:'center', }} />

            <Box
              color="#ffff"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize={'12px'}
            >
              Payments
            </Box>
          </Stack>
          <Stack direction="column"
          alignItems={'center'}>
            <Box component={"img"} src={"/dashboardassets/lucidesettings.svg"}
             sx={{width:'20px', height:'20px', justifyContent:'center', }} />

            <Box
              color="#ffff"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize={'12px'}
            >
              Settings
            </Box>
          </Stack>
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
