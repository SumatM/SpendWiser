import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PrivateNav from '../../Components/PrivateNavBar';
import Chart from './../../Components/Chart'
import styled from "styled-components"
import { IncomeForm } from '../../Income/IncomeForm';
import { getIncomeData } from '../../redux/budgetReducer/action';
import { useEffect } from 'react';

export default function Dashboard(){

    const dispatch=useDispatch();

    
    let {incomeData,incomeDataId}=useSelector((store)=>{
        return {
            // loading:store.budgetReducer.isLoading,
            incomeData:store.budgetReducer.userIncome,
            incomeDataId:store.AuthReducer.userData.id,
            // error:store.budgetReducer.isError,
    
        }
    },shallowEqual);

//console.log(incomeData)

const {income,expense} = incomeData;

console.log(income,expense)

const totalIncome=()=>{
    let totalAmount=0;
      if(income!=undefined){
        income.forEach((item)=>{
totalAmount=totalAmount+item.amount;
        })
      }
      return totalAmount;
}


const totalExpense=()=>{
    let totalAmount=0;
      if(expense!=undefined){
        expense.forEach((item)=>{
totalAmount=totalAmount+item.amount;
        })
      }
      return totalAmount;
}

useEffect(() =>{
    dispatch(getIncomeData(incomeDataId))
}, [])


let chartData = [
    {
    "name": "1/05/2023",
    "income": 4000,
    "expense": 2400,

  },
  {
    "name": "2/05/2023",
    "income": 3000,
    "expense": 1398,
  },
  {
    "name": "4/05/2023",
    "income": 4500,
    "expense": 200,

  },
  {
    "name": "5/05/2023",
    "income": 1500,
    "expense": 680,
  },
  {
    "name": "7/05/2023",
    "income": 7000,
    "expense": 2500,

  },
  {
    "name": "9/05/2023",
    "income": 500,
    "expense": 128,
  },
]
    
    return (
        <DAS>
        <PrivateNav/>
            <div>
                <h2>All Transactions</h2>
            <div className="mainBox">
                <div className="alignment">
        {/* chart */}

        <div className='chart'>
            <Chart data={chartData}/>
        </div>
        <div className="leftCards">
            <div className="Cards">
                <h4>Total Income</h4>
                <h1>${totalIncome()}</h1>
            </div>
            <div className="Cards">
                <h4>Total Expense</h4>
                <h1>${totalExpense()}</h1>
            </div>
            <div></div>
        </div>

                </div>

        {/* right side bar */}

                
                
            </div>
            </div>
        </DAS>
    )
}


const DAS = styled.div`
display:flex;
justify-content:center;
margin-top:60px;
background-color:#0099ff; 
text-align:center;
padding-bottom:50px;
margin-bottom:0px;

.mainBox{
    display:flex;
    justify-content:space-between;
    background-color:#0099ff;
}





.rows{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
    background-color:#81D4FA;
}

.salaryheading{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
}

.rightHeading{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
    background-color:#B2EBF2;
}

.leftCards{
    display:flex;
    justify-content:space-between;
    margin-top:35px;
}

.Cards{
    background-color:#B2EBF2;
    width:40%;
}

`;