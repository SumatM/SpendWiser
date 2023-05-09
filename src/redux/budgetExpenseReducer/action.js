import axios from "axios";
import { ADDEXPENSEDATA, FAILUREHISTORY, GETHISTORY, REMOVEEXPENSE, SUCCESSEXPENSEHISTORY } from "./actionType";

export const getExpenseData=(dummy)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get("http://localhost:8080/userData/1")
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


export const  PutUser=(data)=>(dispatch)=>{
  return  axios.put("http://localhost:8080/userData/1",data)
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}
