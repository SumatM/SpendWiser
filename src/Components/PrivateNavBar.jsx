import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import logo from '../images/spendwiser-low-resolution-logo-color-on-transparent-background.png'

const PrivateNav = () => {
    const [menuOpen,setMenuOpen]=useState(false)
    const handleClick=()=>{
        setMenuOpen((pre)=>!pre)
    }

    


    function handleLogout(){

    }

  return (
    <DIV>
       <Left>
        <img src={logo} alt="logo"/>
       </Left>
       <Right>
       <NavLink to="/dashboard" className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } ><h5>DashBoard</h5></NavLink>
       {/* <NavLink to='/recentTranaction' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Recent Transactions</h5>
       </NavLink> */}
       <NavLink to='/income' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Income</h5>
       </NavLink>
       <NavLink to='/expense' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Expense</h5>
       </NavLink>
       <NavLink to='/' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} onClick={handleLogout}>
        <h5>LogOut</h5>
       </NavLink>
<MenuButton onClick={handleClick}>    
      {!menuOpen?<GiHamburgerMenu/>:<IoMdClose/>}
</MenuButton>
       </Right>
      {menuOpen && (
        <NavbarExtendContainer>
        <NavLink  to="/dashboard" className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } ><h5>DashBoard</h5></NavLink>
       <NavLink to='/recentTranaction' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Recent Transactions</h5>
       </NavLink>
       <NavLink to='/income' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Income</h5>
       </NavLink>
       <NavLink to='/expense' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Expense</h5>
       </NavLink>
       <NavLink to='/goals' className={({ isActive }) =>
    isActive ? "active" : "inactive"
  } spy={true} smooth={true} >
        <h5>Goals</h5>
       </NavLink>
       <NavLink>LogOut</NavLink>
    </NavbarExtendContainer>
      )}
      
    </DIV>
  )
}

export default PrivateNav

const NavbarExtendContainer=styled.div`
 position:absolute;
 top:0px;
 right:10px;
 /* width: 100vw; */
 z-index:99;
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
top:0;
height:60px;
background-color:#0099ff;
color:black;
display:flex;
align-items:center;
position: fixed;
width: 100%;
/* width: 100%; */
/* border: 1px solid red; */
 z-index: 0;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Left=styled.div`
/* flex:1; */
width: 30%;
/* padding:20px; */

img{
  width:30%;
  margin-left:0;
}


`
const Right=styled.div`
flex:1;
padding:20px;
display:flex;
justify-content:space-between;
width:50%;

a{
    text-decoration:none;
}
.active{
    color:white;
}

.inactive{
    color:black
}

h5{
    font-size:15px;
}

`
const LINK=styled(Link)`

/* color:white; */

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







