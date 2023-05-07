import React from 'react'
import Slick from "./Slick"
import styled from 'styled-components'

export const Testimomials = () => {
  return (
    <DIV id='Testimomials'>
      <h1>Hear From Our Users</h1>
      <Slick/>
    </DIV>
  )
}

const DIV=styled.div`
 margin-top:0px;
 background-color: #0099ff;
margin-top: -50px;
font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
width: 100%;
color: white;

@media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`