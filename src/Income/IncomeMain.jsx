

import React, { useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getIncomeData } from '../redux/budgetReducer/action';
import { IncomeForm } from './IncomeForm';
import { IncomeItem } from './IncomeItem';
import styled from 'styled-components';
import PrivateNav from '../Components/PrivateNavBar';



export function IncomeMain() {
   const [update,setUpdate]=useState(false);

   const dispatch=useDispatch();

   let {incomeData,incomeDataId}=useSelector((store)=>{
    return {
        // loading:store.budgetReducer.isLoading,
        incomeData:store.budgetReducer.userIncome,
        incomeDataId:store.AuthReducer.userData.id,
        // error:store.budgetReducer.isError,

    }
},shallowEqual);


   const updateFunc=()=>{
       setUpdate((prev)=>!prev);
   }

   
    useEffect(() =>{
        dispatch(getIncomeData(incomeDataId))
    }, [update])



console.log(incomeDataId);
console.log(incomeData)

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
        <DIV>
        <PrivateNav/>
                <div className='title'>
                <h2 className="total-income">Total Income: ₹<span>{totalIncome()}</span></h2>
                </div>
                <div className="income-contents">
                <div className="income-content">
                        <IncomeForm  update={updateFunc}/>
                </div>
                <div className="incomes">
                <div  className='itemShow'>
                        <h2>Name</h2>
                        <h2>Date</h2>
                        <h2>Amount</h2>
                        <h2>Category</h2>
                        </div>
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
        </DIV>
    )
}


const DIV = styled.div`
    margin-top:60px;
    background-color:#0099ff;

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

    .income-contents{
        display:flex;
    }

    .income-content{  
        width:50%
    }


    .incomes{
        width:50%;
        background-color:#81D4FA;
        padding:15px;
    }

    .itemShow{
        display:flex;
        justify-content:space-around
    }
    .itemShow >h2{
        border:1px solid gray;
        padding:7px;
        margin: 0 10px;
        background-color:blue;
        color:white;
        font-weight:500;
    }

`;


