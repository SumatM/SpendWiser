
import React from 'react'

import styled from 'styled-components'

export const Contact = () => {
 



  const handleClick =(e)=>{
    e.preventDefault()
    alert("Thankyou for your Feedback")
    
  }


  return (
    <DIV id='Contact'>
      <h1>Need To Get In Touch?</h1>
      <p>You can reach us via email or use our contact form below.</p>

      <div id='contactflex'>
      <div id='new'>
     <div> <p><img width="10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngdxsXA1-2kmgz1HnaR77F9BkiiGUffvBflUwXjLtQbPQ3M_ZopoG4ofRsCdVt5UgBn4&usqp=CAU" alt="" />admin@digitleaf.com</p>support@digitleaf.com</div>
     <div> <p><img width="10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvKZM7hWL4zWKazI1TObdq249qUKut7BJi08Svl67UeMds--nN-KmzLw3ij01cE4LnBk&usqp=CAU" alt="" />13017 Orleans Street,</p>Woodbridge, Virginia</div>
      </div>
      <div id='formData'>
        <form >
          <input  type="text" placeholder='Your Name'   />
          <input  type="text" placeholder='Enter Your Email'/>
          <input  type="text" placeholder='Write your Message Here'/>
          <button onClick={handleClick}>SEND MESSAGE</button>
        </form>
      </div>
      </div>
    </DIV>
  )
}

const DIV=styled.div`
width: 100%;
margin: auto;

  
  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;
    padding: 2%;
    border: 5px solid #6ce5ee;
     border-radius: 15px;
   justify-content: center;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
input{
    height: 30px;
    font-size: large;
    font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
}
button{
    background-color: #2399cf;
    color: white;
    width: 100px;
    border-radius: 15px;
    padding: 5px;
    font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
    
}
button:hover{
    background-color: #188ccf;
    color: black;
    font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
    
}
#contactflex{
  display: flex;
  margin: auto;
 justify-content: center;

}
#new div{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding:2%;
}
@media (max-width: 768px) {
  form {
    width: 80%;
  }

}

`