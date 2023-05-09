
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { PutUser, removeExpense } from '../redux/budgetExpenseReducer/action';



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

    let expense=useSelector((store)=>{
        return store.expenseReducer.userExpense.expense;
    })

    let mydata=useSelector((store)=>{
      return store.expenseReducer.userExpense;
  })
   
  const remove=(id)=>{
    console.log("yes")
     expense=expense.filter((item)=>item.id!=id);
     let data=expense;
    dispatch(removeExpense(data));
    
    dispatch(PutUser(mydata)).then((res)=>{
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

   