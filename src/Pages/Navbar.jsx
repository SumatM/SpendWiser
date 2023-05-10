import React, { useState } from 'react'
// import { LINK } from 'react-router-dom'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import logo from '../images/spendwiser-low-resolution-logo-color-on-transparent-background.png'

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
    const handleClick=()=>{
        setMenuOpen((pre)=>!pre)
    }
  return (
    <DIV>
       <Left>
        <img src={logo} alt="logo"/>
       </Left>
       <Right>
       <LINK  activeClass="active" to="Navbar" spy={true} smooth={true} >Home</LINK>
       <LINK  to="Features" spy={true} smooth={true}>Features</LINK>
       <LINK to='How_Work' spy={true} smooth={true} >How Work</LINK>
       <LINK to='Screen_Shoots' spy={true} smooth={true} >Screen Shoots</LINK>
       <LINK to='Testimomials' spy={true} smooth={true} >Testimomials</LINK>
       <LINK to='Pricing' spy={true} smooth={true} >Pricing</LINK>
       <LINK to='Contact' spy={true} smooth={true} >Contact</LINK>
       <LINK to='Support' spy={true} smooth={true} >Support</LINK>
<MenuButton onClick={handleClick}>    
      {!menuOpen?<GiHamburgerMenu/>:<IoMdClose/>}
</MenuButton>
       </Right>
      {menuOpen && (
         <NavbarExtendContainer>
         <NavbarLinkExtend to='Navbar'  spy={true} smooth={true}><Link to="/">Home</Link></NavbarLinkExtend>
         <Link to='/'>
         <NavbarLinkExtend to='Features'  spy={true} smooth={true}>Features</NavbarLinkExtend>
         </Link>
         <NavbarLinkExtend to='How_Work'  spy={true} smooth={true}>How Work</NavbarLinkExtend>
         <NavbarLinkExtend to='Screen_Shoots'  spy={true} smooth={true}>Screen Shoots</NavbarLinkExtend>
         <NavbarLinkExtend to='Testimomials'  spy={true} smooth={true}>Testimomials</NavbarLinkExtend>
         <NavbarLinkExtend to='Pricing'  spy={true} smooth={true}>Pricing</NavbarLinkExtend>
         <NavbarLinkExtend to='contact'  spy={true} smooth={true}>Contact</NavbarLinkExtend>
         <NavbarLinkExtend to='Support'  spy={true} smooth={true}>Support</NavbarLinkExtend>
    </NavbarExtendContainer>
      )}
    </DIV>
  )
}

export default Navbar

const NavbarExtendContainer=styled.div`
 position:absolute;
 top:60px;
 right:10px;
 /* width: 100vw; */
 width: 100%;
 height: calc(100vh - 60px);
 background-color:#0099ff;
 color:white;
 display:flex;
 flex-direction:column;
 align-items:center;
 
 justify-content:space-around;
 
`

const NavbarLinkExtend=styled(Link)`


/* margin:0 10px; */
cursor:pointer;

&.active{
  background-color: #dce9f3;
    color: #0099ff;
    padding: 5px;
    border-radius: 5px;
}

`


const MenuButton=styled.button`
width:40px;
@media screen and (min-width: 700px){
    display:none;
}

`

const DIV=styled.div`
height:60px;
background-color:#0099ff;
color:black;
display:flex;
align-items:center;
position: fixed;
width: 100%;
/* width: 100%; */
/* border: 1px solid red; */
 z-index: 3;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Left=styled.div`
/* flex:1; */
width: 20%;
/* padding:20px; */

img{
  width:30%
}

`
const Right=styled.div`
flex:1;
padding:20px;
display:flex;
justify-content:flex-end;



`
const LINK=styled(Link)`

color:white;

margin:0 10px;
cursor:pointer;

&.active{
    background-color: #c4d9eb;
    color: #0099ff;
    padding: 5px;
    border-radius: 5px;
}
@media screen and (max-width: 700px){
    display:none;
}
`







