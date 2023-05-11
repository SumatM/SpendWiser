import axios from "axios";
import { ADDEXPENSEDATA, FAILUREHISTORY, GETHISTORY, REMOVEEXPENSE, SUCCESSEXPENSEHISTORY } from "./actionType";

export const getExpenseData=(id)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get(`https://spendwiser-mock-api.onrender.com/userData/${id}`)
      .then((res)=>{
        console.log(res.data)
        dispatch({type:SUCCESSEXPENSEHISTORY,payload:res.data})
      })
      .catch((error)=>{
        dispatch({type:FAILUREHISTORY})
      })
}


export const addExpenseData=(expenseData)=>(dispatch)=>{
    dispatch({type:ADDEXPENSEDATA,payload:expenseData})
}


export const removeExpense=(data)=>(dispatch)=>{

dispatch({type:REMOVEEXPENSE,payload:data})
}


export const  PutUser=(data)=>(id)=>(dispatch)=>{
  return  axios.put(`https://spendwiser-mock-api.onrender.com/userData/${id}`,data)
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}
