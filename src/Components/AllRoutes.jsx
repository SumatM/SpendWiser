import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import { Landingpage } from "../Pages/Landingpage";
import { IncomeMain } from "../Income/IncomeMain";
import { ExpenseMain } from "../expense/ExpenseMain";
import { Login } from "../Login&Register/Login";
import SignUp from "../Login&Register/SignUp";
import { PrivateRoute } from "./PrivateRoute";


function AllRoutes(){
    return (
        <Routes>

       <Route path="/" element={<Landingpage/>}></Route>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/income" element={<PrivateRoute>
        <IncomeMain/>
       </PrivateRoute>}></Route>
       <Route path="/expense" element={<PrivateRoute>
        <ExpenseMain/>
       </PrivateRoute>}></Route>
       <Route path="/dashboard" element={<PrivateRoute>
        <Dashboard/>
       </PrivateRoute>}/>
       <Route path="*" element={<h2>....Page Not Found</h2>}/>
        </Routes>
    )
}


export default AllRoutes;