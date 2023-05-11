import axios from "axios";
import { ADDINCOMEDATA, FAILUREHISTORY, GETHISTORY, REMOVEINCOME, SUCCESSINCOMEHISTORY } from "./actionType";

export const getIncomeData=(id)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get(`https://spendwiser-mock-api.onrender.com/userData/${id}`)
      .then((res)=>{
        console.log(res.data);
        dispatch({type:SUCCESSINCOMEHISTORY,payload:res.data})
      })
      .catch((error)=>{
        dispatch({type:FAILUREHISTORY})
      })
}



export const addIncomeData=(incomeData)=>(dispatch)=>{
    dispatch({type:ADDINCOMEDATA,payload:incomeData})
}


export const removeIncome=(data)=>(dispatch)=>{

dispatch({type:REMOVEINCOME,payload:data})
}


export const putUser=(data)=>(id)=>(dispatch)=>{
console.log("yes")
 return axios.put(`https://spendwiser-mock-api.onrender.com/userData/${id}`,data)
 .then((res)=>{
  console.log(res)
 })
 .catch((error)=>{
  console.log(error)
 })
  
}

function normalDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // const normalDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const normalDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`

  return normalDate;
}

export {normalDate}