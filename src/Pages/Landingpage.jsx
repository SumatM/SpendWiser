import React from 'react'
import { Contact } from './Contact';
import { Features } from './Features';
import { Home } from './Home';
import { How_Work } from './How_Work';
import Navbar from './Navbar';
import { Pricing } from './Pricing';
import { Screen_Shoots } from './Screen_Shoots';
import { Testimomials } from './Testimomials';
import Footer from './Footer';
import { Wave } from './wave';
import { Wave1 } from './wave1';
import styled from 'styled-components';


export const Landingpage = () => {
  return (
   <>
    <DIV>
    <Navbar/>
   <Home/>
   <Wave/>
   <Features/>
   <Wave1/>
   <How_Work/>
   <Wave/>
   <Screen_Shoots/>
   <Wave1/>
   <Testimomials/>
   <Wave/>
   <Pricing/>
   <Contact/>
   <Footer/>
    </DIV>
   </>
  )
}


const DIV=styled.div`
  width: 100%;
`