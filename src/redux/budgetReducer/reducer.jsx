import { FAILUREHISTORY, GETHISTORY, SUCCESSEXPENSEHISTORY, SUCCESSINCOMEHISTORY } from "./actionType"

const initialState={
    isLoading:false,
    isError:true,
    incomeHistory:[],
    expenseHistory:[],
}


export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

      case  GETHISTORY:{
          return {...state,isLoading:true}
        }

        case SUCCESSINCOMEHISTORY:{
            return {...state,isLoading:false,incomeHistory:payload}
        }
        
        case SUCCESSEXPENSEHISTORY:{
            return {...state,isLoading:false,expenseHistory:payload}
        }

        case FAILUREHISTORY:{
            return {...state,isLoading:false,isError:true}
        }
        
        default:{
            return state;
        }

    }
}