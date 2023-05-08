import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Expense from "../Pages/DashBoard/Expense/Expense";
import { IncomeMain } from "../Income/IncomeMain";


function PrivateRoute(){

    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/income" element={<IncomeMain/>}></Route>
            <Route path="/expense" element={<Expense/>}></Route>
        </Routes>
    )
}


export default PrivateRoute;