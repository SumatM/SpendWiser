

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { putUser, removeIncome } from '../redux/budgetReducer/action';
import { normalDate } from '../redux/budgetReducer/action';




export function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    update,
}) {





const dispatch=useDispatch();

    let income=useSelector((store)=>{
        return store.budgetReducer.userIncome.income;
    })

    const mydata=useSelector((store)=>{
      return store.budgetReducer.userIncome;
  })
   
  const remove=(id)=>{
   // console.log("yes")
     income=income.filter((item)=>item.id!=id);
     let data=income;
     
    dispatch(removeIncome(data));
    update();
  }

return <ItemDiv>
     <div><h2>{title.substring(0,10)}</h2></div>
     <div><h2>{normalDate(date)}</h2></div>
     <div><h2>{amount}</h2></div>
     <div><h2>{category}</h2></div>
    <div> <button onClick={()=>remove(id)}>Remove</button></div>
</ItemDiv>

}


const ItemDiv  = styled.div`
    margin: 15px 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid gray;
    padding:0 5px;

    :hover{
      button{
        display:block
      }
    }

    button{
      padding:10px;
      background-color:black;
      color: white;
      display:none;
    }

`;