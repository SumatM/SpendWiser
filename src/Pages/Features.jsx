import React from 'react'
import styled from 'styled-components';
import Slick2 from './Slick2'

export const Features = () => {
  return (
    <DIV id='Features'>
        <div>
            <h1>What Your Budget Tool Can Do</h1>
            <Slick2/> 
        </div>
        <div>

           
        </div>
    </DIV>
  )
}

const DIV=styled.div`
  width: 100%;
 /* border:1px solid red; */
   font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;


@media (max-width: 768px) {
    padding: 2%;

    h1 {
      font-size: 30px;
    }
  }
`