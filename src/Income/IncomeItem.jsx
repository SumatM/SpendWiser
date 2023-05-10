

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { putUser, removeIncome } from '../redux/budgetReducer/action';
import { PutUser } from '../redux/budgetExpenseReducer/action';




export function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    update,
}) {


  const userId=useSelector((store)=>{
    return store.AuthReducer.userData.id;
});

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

    dispatch(PutUser(mydata)(userId)).then((res)=>{
      update()
    })
  }

return <>

    <div>
     <h2>{title}</h2>
     <h2>{amount}</h2>
     <h2>{category}</h2>
     <h2>{description}</h2>
     <button onClick={()=>remove(id)}>Remove</button>
</div>
</>
}
