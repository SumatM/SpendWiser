
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { PutUser, removeExpense } from '../redux/budgetExpenseReducer/action';
import styled from 'styled-components';
import { normalDate } from '../redux/budgetReducer/action';


export function ExpenseItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    update,
}) {

const dispatch=useDispatch();

const userId=useSelector((store)=>{
  return store.AuthReducer.userData.id;
});

    let expense=useSelector((store)=>{
        return store.expenseReducer.userExpense.expense;
    })

    let mydata=useSelector((store)=>{
      return store.expenseReducer.userExpense;
  })
   
  const remove=(id)=>{
     expense=expense.filter((item)=>item.id!=id);
     let data=expense;
    dispatch(removeExpense(data));
    
    dispatch(PutUser(mydata)(userId)).then((res)=>{
      update()
    })
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