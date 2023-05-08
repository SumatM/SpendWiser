import React from 'react'
import { Wave } from './wave'
import styled from 'styled-components'

export const Pricing = () => {
  return (
    <DIV id='Pricing' >
       <img src={Wave} alt="" />
      <h1>What You Get With ISaveMoney</h1>
      <div id='pricingflex'>
        <div>
          <h3>Free version</h3>
          <h6>You don't have access to premium features</h6>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShibO6tOPnktyYQ-puZm_kHYARF4e4FmrD-Bvo5R4ef9fYtFN4CxDT66gMSPz3n_ix1FI&usqp=CAU" alt="" />
          <p>Unlimited budgets</p>

          <p>Unlimited categories </p>

          <p>Recurring transactions</p>

          <p>Unlimited financial accounts</p>

          <p>Unlimited payees or payers</p>

          <p>Financial analytics </p>

          <p>Budget charts</p>

          <p>Merge budgets</p>

          <p>Four labels (max) </p>

          <p>Debt management</p>
        </div>
        <div>
        <h3>Premium version</h3>
          <h6>All premium features unlocked</h6>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5WOkR829iQyzT8Ntvql4_x8MA5hhNP_c1A&usqp=CAU" alt="" />
      <p>Unlimited labels</p> 

    <p> Unlimited labels</p>  

    <p> Receipt photo</p> 

    <p> Four dashboard colors</p> 

    <p> CSV, MS Excel or PDF exporting</p> 

    <p> Google Drive backup and restore</p> 

    <p> Forecasting tool</p> 

    <p> Full export CSV/MS Excel</p> 

    <p> Screen lock with PIN</p> 

    <p> Budget cloning</p> 

<p> Update budget date range</p> 

<p> CSV importing (for bank statements)</p>
        </div>
      </div>
    </DIV>
  )
}

const DIV=styled.div`
  font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;

 #pricingflex {
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 2%;
  font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
 }
 #pricingflex div{
  padding: 3%;
  border: 1px solid gray;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: 'DynaPuff', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Open Sans', sans-serif;

 }
 @media (max-width: 768px) {
       width: 80%;
      flex-direction: column;
      align-items: center;
}
@media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 20px;
 }
  


`