import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Income from "../Income/Income";
import Expense from "../Pages/DashBoard/Expense/Expense";


function AllRoutes(){

    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/income" element={<Income/>}></Route>
            <Route path="/expense" element={<Expense/>}></Route>
        </Routes>
    )
}


export default AllRoutes;