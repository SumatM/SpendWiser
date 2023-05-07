import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as budgetReducer } from "./budgetReducer/reducer";


const rootReducer=combineReducers({
budgetReducer,
});


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));