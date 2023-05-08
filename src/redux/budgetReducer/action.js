import axios from "axios";
import { ADDINCOMEDATA, FAILUREHISTORY, GETHISTORY, REMOVEINCOME, SUCCESSINCOMEHISTORY } from "./actionType";

export const getIncomeData=(dummy)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get("http://localhost:8080/userData/1")
      .then((res)=>{
        console.log(res.data)
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


export const putUser=(data)=>(dispatch)=>{

 return axios.put("http://localhost:8080/userData/1",data)
 .then((res)=>{
  console.log(res)
 })
 .catch((error)=>{
  console.log(error)
 })
  
}

