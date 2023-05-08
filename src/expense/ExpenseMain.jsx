

import React, { useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getExpenseData } from '../redux/budgetExpenseReducer/action';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseItem } from './ExpenseItem';



export function ExpenseMain() {
   const [update,setUpdate]=useState(false);


   const updateFunc=()=>{
       setUpdate((prev)=>!prev);
   }

const dispatch=useDispatch();

    useEffect(() =>{
        dispatch(getExpenseData())
    }, [update])



const {loading,expenseData,error}=useSelector((store)=>{
    return {
        loading:store.expenseReducer.isLoading,
        expenseData:store.expenseReducer.userExpense,
        error:store.expenseReducer.isError,
    }
},shallowEqual);

console.log(expenseData);

const totalExpense=()=>{
    let totalAmount=0;
      if(expenseData.expense!=undefined){
        expenseData.expense.forEach((item)=>{
totalAmount=totalAmount+item.amount;
        })
      }
      return totalAmount;
}

    return (
        <div>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expense: ₹<span>{totalExpense()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm update={updateFunc}/>
                    </div>
                    <div className="expense">
                        {expenseData?.expense?.map((expense) => {
                            const {id, title, amount, date, category, description} = expense;
                            return <ExpenseItem
                                key={id}
                                id={id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                category={category}
                                update={updateFunc}
                            />
                        })}
                    </div>
                </div>
        </div>
    )
}




