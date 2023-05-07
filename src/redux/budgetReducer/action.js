import axios from "axios";
import { FAILUREHISTORY, GETHISTORY, SUCCESSINCOMEHISTORY } from "./actionType";

export const getIncomeData=(dummy)=>(dispatch)=>{
      dispatch({type:GETHISTORY});
      axios.get("http://localhost:8080/userData")
      .then((res)=>{
        dispatch({type:SUCCESSINCOMEHISTORY,payload:res.data})
      })
      .catch((error)=>{
        dispatch({type:FAILUREHISTORY})
      })
}
