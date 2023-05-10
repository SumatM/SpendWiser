import axios from "axios";
import { ADDEXPENSEDATA, FAILUREHISTORY, GETHISTORY, REMOVEEXPENSE, SUCCESSEXPENSEHISTORY } from "./actionType";

export const getExpenseData=(id)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get(`http://localhost:8080/userData/${id}`)
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
  return  axios.put(`http://localhost:8080/userData/${id}`,data)
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}
