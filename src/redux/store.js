import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as budgetReducer } from "./budgetReducer/reducer";
import { reducer as expenseReducer } from "./budgetExpenseReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer=combineReducers({
budgetReducer,
expenseReducer,
AuthReducer,

});


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));