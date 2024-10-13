"use client";
import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import { LogoutIcon } from "@/client/svgs";
import { usePathname } from "next/navigation";
import LogoutModal from "./logout-modal";
import Image from "next/image";
import Link from "next/link";
import {
  clientSideBarLinks1,
  clientSideBarLinks2,
} from "@/constants/clientSideBarLinks";
import UserCard from "./ui/UserCard";

interface MobileNavProps {
  onClose: () => void;
  open: boolean;
}

const MobileTopbar = ({ onClose, open }: MobileNavProps) => {
  const pathname = usePathname();
  const [openLogoutMod, setOpenLogoutMod] = useState(false);

  const handleOpenLogoutMod = () => setOpenLogoutMod(true);
  const handleCloseLogoutMod = () => {
    setOpenLogoutMod(false);
  };
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#2A4F55",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          scrollbarWidth: "none",
          width: "80%",

          "&::-webkit-scrollbar": { display: "none" },
        },
      }}
      onClose={onClose}
      open={open}
    >
      <Stack spacing={2} sx={{ px: 2, pt: 2 }}>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alinItems: "center",
          }}
        >
          <Box
            display="flex"
            width={"100%"}
            // height={"70px"}
            borderRadius={'8px'}
            // sx={{ position: "relative", backgroundColor: "#ffff" }}
          >
            <UserCard />
          </Box>
        </Box>
      </Stack>
      <Divider sx={{ m: "10px", backgroundColor: "#EDF2F7" }} />
      <Box
        component="nav"
        sx={{
          flex: "1 1 auto",
          p: "12px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0",
          },
        }}
      >
        <Stack sx={{ height: "100%", gap: "15px" }}>
          {clientSideBarLinks1.map((item) => (
            <Link
              className="dashboard-nav"
              href={item.url}
              key={item.name}
              data-active={pathname === item.url || undefined}
              style={{
                backgroundColor: pathname === item.url ? "#ffff" : "",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: 600,
                padding: "15px",
                gap: "15px",
              }}
              onClick={onClose}
            >
              <item.icon style={{ color: "#FFF" }} />
              <Typography
                sx={{
                  color: pathname === item.url ? "#000000" : "#ffff",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          <Divider />
          {clientSideBarLinks2.map((item) => (
            <Link
              className="dashboard-nav"
              href={item.url}
              key={item.name}
              data-active={pathname === item.url || undefined}
              style={{
                backgroundColor: pathname === item.url ? "#ffff" : "",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: 600,
                padding: "15px",
                gap: "15px",
              }}
              onClick={onClose}
            >
              <item.icon style={{ color: "#FFF" }} />
              <Typography
                sx={{
                  color: pathname === item.url ? "#000000" : "#ffff",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          <Button
            sx={{
              backgroundColor:
                pathname === "/dashboard/logout" ? "#000000" : "",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: 600,
              padding: "20px",
              paddingLeft: "-1px",
              // paddingLeft:'1px',
              gap: "15px",
            }}
            onClick={() => {
              handleOpenLogoutMod();
              // onClose();
            }}
          >
            <LogoutIcon />
            <Typography
              sx={{
                color: pathname === "dashboard/logout" ? "#000000" : "#ffff",
              }}
            >
              Logout
            </Typography>
          </Button>
        </Stack>
        <LogoutModal open={openLogoutMod} handleClose={handleCloseLogoutMod} />
      </Box>
    </Drawer>
  );
};

export default MobileTopbar;

// return (
//   <React.Fragment>
//       <Box
//       // sx={{
//       //   py:'20px',
//       //   backgroundColor:'#457B83',
//       //   color:'#ffff',
//       //   alignItems:'center',
//       //   // width:'100vw',
//       //   // height:'30px',
//       //   position: 'sticky',
//       // top:0,
//       // zIndex:5,
//       // }}
//       component="header"
//       display='flex'
//       width={'100%'}
//       sx={{
//         // py:'60px',
//         backgroundColor: "#457B83",
//         position: "sticky",
//         top: 0,
//         zIndex: 20,
//         py: {md:3, xs:2},
//         borderBottom: "1px solid #c5c5c5",
//       }}
//       >
//        <Stack
//         direction={'row'}
//         alignItems={'center'}
//         justifyContent={'space-between'}
//         width='100%'
//        >
//         <Box sx={{display:'flex'}}>
//         <Button
//           type="submit"
//           // onClick={handleClick}
//           sx={{
//             display: { md: "none", xs: "flex" },
//             // borderRadius: "8px",
//             boxShadow: "none",
//             textTransform: "initial",
//             fontSize: "35px",
//             padding: "5px",
//             justifyContent: "center",
//             color: "#ffff",
//             fontWeight: 700,
//             ":hover": {
//               backgroundColor: "transparent",
//               color: "#000000",
//               boxShadow:'none'
//             },
//             // backgroundColor: '#000000',
//           }}
//           variant="contained"
//         >
//          <CiMenuKebab />
//           {/* {toggle ? <IoCloseSharp /> : <HiMenuAlt3 />} */}
//         </Button>
//         </Box>
//          <Box
//          fontWeight={700}
//          sx={{display:'flex',
//          fontSize:'22px',
//         }}>
//           <Link href='/' underline='none' color={'#ffff'}>
//             TOYMANDATAHUB
//           </Link>
//          </Box>
//          <Button
//           type="submit"
//           // onClick={handleClick}
//           sx={{
//             display: { md: "none", xs: "flex" },
//             // borderRadius: "8px",
//             boxShadow: "none",
//             textTransform: "initial",
//             fontSize: "35px",
//             padding: "5px",
//             justifyContent: "center",
//             color: "#ffff",
//             fontWeight: 700,
//             ":hover": {
//               // backgroundColor: "#ababab",
//               color: "#000000",
//               boxShadow:'none',
//             },
//             backgroundColor: '#457B83',
//           }}
//           variant="contained"
//         >
//                     <HiOutlineMenuAlt1 />
//         </Button>
//        </Stack>
//     </Box>
//   </React.Fragment>
// )
