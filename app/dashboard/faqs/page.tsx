"use client"
import { Button, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import { faqs } from "@/constants/clientSideBarLinks";
// import UserLayout from "../user-layout-wrapper";

// I Jeremiah, commented this out because faqs is not exported from that file and it's not allowing me to run npm run build because of the error. I tried looking for where you defined faqs couldn't find it

export default function Home(){
 return(
    <>
    <Box sx={{backgroundColor:'#ffffff', }}
    >
        <Box
         justifyContent='center'
         alignItems={'center'}
         textAlign={'center'}
         fontWeight='bold'
        paddingTop={'40px'}
        fontSize={'17px'}
      >
        FAQs
      </Box>
    <Stack direction={{md:'row', xs:'column'}} spacing={4} gap={1}>
      
      <Stack direction='column'  paddingTop='35px' paddingRight='10px' gap={4}
      justifyContent='center'
      alignItems={'center'}
      sx={{ px: { md: "200px", xs:'30px' } }}
      >
        <Box>
        <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight='bold' >
          Are your data plans legit? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={{xs:'14px', md:'16px'}}>
          Yea, we are third party data vendors. We buy in bulk from network providers and resell.
          </Typography>
        </AccordionDetails>
      </Accordion>

       {faqs.map((item)=>(
        <Box key={item.question} py='15px' my='5px'
         
        >
          <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography fontWeight='bold'>
                {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography 
            fontSize={{xs:'14px', md:'16px'}}>
              {item.answer}
            </Typography>
            <Typography 
            fontSize={{xs:'14px', md:'16px'}}>
              {item.answer1 ? item.answer1 : ''}
            </Typography>
            <Typography 
            fontSize={{xs:'14px', md:'16px'}}>
              {item.answer2 ? item.answer2 : ''}
            </Typography>
            <Typography 
            fontSize={{xs:'14px', md:'16px'}}>
              {item.answer3 ? item.answer3 : ''}
            </Typography>
            <Typography 
            fontSize={{xs:'14px', md:'16px'}}>
              {item.answer4 ? item.answer4 : ''}
            </Typography>
          </AccordionDetails>
        </Accordion>  
        </Box>
       ))}
        </Box>
      </Stack>
    </Stack>
    </Box>
    </>
 )
}




