import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import { Landingpage } from "../Pages/Landingpage";
import { ExpenseMain } from "../expense/ExpenseMain";
import { IncomeMain } from "../Income/IncomeMain";


function AllRoutes(){
    return (
        <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        {/* <Route path="/expense" element={<ExpenseMain/>}/>
        <Route path="/income" element={<IncomeMain/>}/> */}
        </Routes>
    )
}


export default AllRoutes;