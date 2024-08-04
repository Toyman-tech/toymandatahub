import React from 'react'
import {Box} from '@mui/material';
import LandingPage from '@/components/LandingPage';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonies from '@/components/Testimonies';
import UserLayout from './user-layout-wrapper';

export default function Home() {
  return (
    <UserLayout>
     <Box width='100vw'>
      <LandingPage/>
      <Stats/>
      <Services/>
      <WhyUs/>
      <Testimonies/>
     </Box>
    </UserLayout>
  );
}
