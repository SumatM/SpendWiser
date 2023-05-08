import { ADDINCOMEDATA, FAILUREHISTORY, GETHISTORY, REMOVEINCOME, REMOVEINCOMEDATA, SUCCESSEXPENSEHISTORY, SUCCESSINCOMEHISTORY } from "./actionType"

const initialState={
    isLoading:false,
    isError:false,
    userIncome:{},
    incomeArray:[],
    expenseArray:[],
    userExpense:{},
}


export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

      case  GETHISTORY:{
          return {...state,isLoading:true}
        }

        case SUCCESSINCOMEHISTORY:{
            return {...state,isLoading:false,userIncome:payload}
        }
        
        case SUCCESSEXPENSEHISTORY:{
            return {...state,isLoading:false,userExpense:payload}
        }

        case FAILUREHISTORY:{
            return {...state,isLoading:false,isError:true}
        }
        
        case ADDINCOMEDATA:{
           state.incomeArray=[...state.userIncome.income, payload];
           state.userIncome.income=state.incomeArray;
           return {...state}
        }

        case REMOVEINCOME:{
            state.incomeArray=payload;
            state.userIncome.income=state.incomeArray;
            return {...state}
        }
        default:{
            return state;
        }

    }
}