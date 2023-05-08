

import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getIncomeData } from '../redux/budgetReducer/action';
import { IncomeForm } from './IncomeForm';
import { IncomeItem } from './IncomeItem';




export function IncomeMain() {
   const [update,setUpdate]=useState(false);
//    const [totalAmount,setTotalAmount]=useState("")

   const updateFunc=()=>{
       setUpdate((prev)=>!prev);
   }

const dispatch=useDispatch();

    useEffect(() =>{
        dispatch(getIncomeData())
    }, [])



const {loading,incomeData,error}=useSelector((store)=>{
    return {
        loading:store.budgetReducer.isLoading,
        incomeData:store.budgetReducer.userIncome,
        error:store.budgetReducer.isError,
    }
},shallowEqual);



const totalIncome=()=>{
    let totalAmount=0;
      if(incomeData.income!=undefined){
        incomeData.income.forEach((item)=>{
totalAmount=totalAmount+item.amount;
        })
      }
      return totalAmount;
}

    return (
        <div>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: ₹<span>{totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <IncomeForm  update={updateFunc}/>
                    </div>
                    <div className="incomes">
                        {incomeData?.income?.map((income) => {
                            const {id, title, amount, date, category, description} = income;
                            return <IncomeItem
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




