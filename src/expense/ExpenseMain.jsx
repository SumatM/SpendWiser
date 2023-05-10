

import React, { useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getExpenseData } from '../redux/budgetExpenseReducer/action';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseItem } from './ExpenseItem';
import styled from 'styled-components';



export function ExpenseMain() {

    const [update,setUpdate]=useState(false);

    const dispatch=useDispatch();

    let {expenseData,expenseDataId,}=useSelector((store)=>{
     return {
         // loading:store.budgetReducer.isLoading,
         expenseData:store.expenseReducer.userExpense,
         expenseDataId:store.AuthReducer.userData.id,
         // error:store.budgetReducer.isError,
 
     }
 },shallowEqual);
 
 
    const updateFunc=()=>{
        setUpdate((prev)=>!prev);
    }
    
     useEffect(() =>{
         dispatch(getExpenseData(expenseDataId))
     }, [update]);
 
 
console.log(expenseData);
console.log(expenseDataId)


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
        <DIV>
                <div className='title'>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expense: ₹<span>{totalExpense()}</span></h2>
                </div>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm update={updateFunc}/>
                    </div>
                    <div className="expense">
                        <div  className='itemShow'>
                        <h2>Name</h2>
                        <h2>Date</h2>
                        <h2>Amount</h2>
                        <h2>Category</h2>
                        </div>
                        <div>
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
        </DIV>
    )
}




const DIV = styled.div`
    margin-top:75px;

    .title{
        text-align:center;
    }
    .title >h1{
        letter-spacing:3px;
        font-size:45px;
        margin-bottom:0px
    }

    .title > h2{
        margin-top:0px
    }

    .expense-content{
        display:flex;
        justify-content:space-between;
    }

    .form-container{
        width:50%;
    }

    .expense{
        background-color:whitesmoke;
        padding:15px;
        width:50%;
    }

    .itemShow{
        display:flex;
        justify-content:space-around
    }
    .itemShow >h2{
        border:1px solid gray;
        padding:7px;
        margin: 0 10px;
        color:white;
        font-weight:500;
        background-color: gray;
    }

`;

