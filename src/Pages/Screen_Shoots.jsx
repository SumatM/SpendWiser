import React from 'react'
import styled from 'styled-components'


export const Screen_Shoots = () => {
  return (
    <DIV id='Screen_Shoots'>
      <h1>Explore Our App</h1>
      <img src="https://vulcanpost.com/wp-content/uploads/2020/09/moneymanagertracker-budgetappscomparisonreview-fastbudget-003-1024x701.jpg" alt="" />
      <br />
      <br />
      <img src="https://vulcanpost.com/wp-content/uploads/2020/09/moneymanagertracker-budgetappscomparisonreview-bluecoins-004-1024x701.jpg" alt="" />
    </DIV>
  )
}

const DIV=styled.div`
  font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
width: 100%;

@media (max-width: 768px) {
    img {
      width: 100%;
      max-width: 400px;
    }
  }
`