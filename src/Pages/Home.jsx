import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <DIV id='Navbar' >
      <div className='Banner1'>
        <h1>Take control of your money</h1>
        <h4>Create your budget, organize your income and track your expenses</h4>
        <button>Sign Up</button>
        <button>Learn More</button>
      </div>
      <div className='Bannerimg'>
        <img width="60%" src="https://img.freepik.com/free-vector/blank-screen-laptop-gadget-icon-isolated-white-background_1308-46353.jpg" alt="" />
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
  /* width: 100vw; */
  text-align: left;
  background-color:#0099ff ;
.Banner1{
  margin-left: 8%;
  color: white;
  font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
  h1{
  
    font-size:50px;
  }
  button{
    width: 40%;
    height: 40%;
    padding: 3%;
    margin-right: 2%;
    border-radius: 25px;
    background-color: #dde1e7;
    color: #0099ff;
    font-size:18px;
    border: 2px solid gray;
    font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
  }
}
button:hover{
  width: 40%;
    height: 40%;
    padding: 3%;
    margin-right: 2%;
    border-radius: 25px;
    background-color: #0099ff;
    color: #dce1eb;
    font-size:18px;
    border: 2px solid orange;
    font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
  
}

@media (max-width: 768px) {
    flex-direction: column;
    padding: 2%;

    .Banner1 {
      margin-left: 0;
      text-align: center;

      h1 {
        font-size: 40px;
      }

      button {
        width: 60%;
      }
    }

    .Bannerimg {
      margin-top: 2%;
    }
  }

 
`