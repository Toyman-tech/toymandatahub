import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box
    display='flex'
    
    
    
    sx={{
      backgroundColor: "#457B83",
      color: "#fff",
      display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
      flexDirection: "column",
      height: "100%",
      left: 0,
      maxWidth: "100%",
      position: "fixed",
      scrollbarWidth: "none",
      top: 0,
      width: "280px",

      "&::-webkit-scrollbar": { display: "none" },
    }}
    >Sidebar</Box>
  )
}

export default Sidebar