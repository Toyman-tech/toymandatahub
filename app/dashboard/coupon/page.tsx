import Coupon from "@/components/Coupon";
import { Box } from "@mui/material";

export default function Home(){
    return(
        <Box 
        display='flex'
        justifyContent={'center'}
        
        width='100%'
        height='100%'
        >
            <Coupon/>
        </Box>
    )
}