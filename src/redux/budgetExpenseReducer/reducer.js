import { ADDEXPENSEDATA, FAILUREHISTORY, GETHISTORY, REMOVEEXPENSE, SUCCESSEXPENSEHISTORY } from "./actionType"

const initialState={
    isLoading:false,
    isError:false,
    expenseArray:[],
    userExpense:{},
}


export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

      case  GETHISTORY:{
          return {...state,isLoading:true}
        }

        case SUCCESSEXPENSEHISTORY:{
            return {...state,isLoading:false,userExpense:payload}
        }
        
        case SUCCESSEXPENSEHISTORY:{
            return {...state,isLoading:false,userExpense:payload}
        }

        case FAILUREHISTORY:{
            return {...state,isLoading:false,isError:true}
        }
        
        case ADDEXPENSEDATA:{
           state.expenseArray=[...state.userExpense.expense, payload];
           state.userExpense.expense=state.expenseArray;
           return {...state}
        }

        case REMOVEEXPENSE:{
            state.expenseArray=payload;
            state.userExpense.expense=state.expenseArray;
            return {...state}
        }
        default:{
            return state;
        }

    }
}