
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { removeIncome } from '../redux/budgetReducer/action';




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


   
  const remove=(id)=>{
    console.log("yes")
     income=income.filter((item)=>item.id!=id);
     let data=income;
     
    dispatch(removeIncome(data));
    update();

  }

return <ItemDiv>
     <h3>{title}</h3>
     <h3>{amount}</h3>
     <h3>{category}</h3>
     <h3>{description}</h3>
     <button onClick={()=>remove(id)}>Remove</button>
</ItemDiv>


}

const ItemDiv  = styled.div`

    display:flex;
    margin: 15px;
    justify-content:space-between;
`;