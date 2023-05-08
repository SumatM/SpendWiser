import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";

import { IncomeMain } from "../Income/IncomeMain";
import {ExpenseMain} from "../expense/ExpenseMain";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/income" element={<IncomeMain/>}></Route>
            <Route path="/expense" element={<ExpenseMain/>}></Route>
        </Routes>
    )
}


export default AllRoutes;