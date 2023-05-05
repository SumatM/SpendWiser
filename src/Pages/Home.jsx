import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <DIV>
      <div className='Banner1'>
        <h1>Take control of your money</h1>
        <h4>Create your budget, organize your income and track your expenses</h4>
        <button>Sign Up</button>
        <button>Learn More</button>
      </div>
      <div className='Bannerimg'>
        <img width="30%" src="https://isavemoney.app/assets/images/01.png" alt="" />
      </div>
    </DIV>
  )
}


const DIV=styled.div`
  display: flex;
  flex-direction:row;
  margin: auto;
  align-items: center;
  padding: 5%;
  width: 95%;

.Banner1{
  margin-left: 8%;
  h1{
    text-align: left;
    font-size:40px;
  }
  button{
    width: 40%;
    height: 40%;
    padding: 3%;
    margin-right: 2%;
    border-radius: 25px;
    background-color: orange;
    color: white;
    border: 2px solid red;
  }
}
.Bannerimg{
  
}

 
`