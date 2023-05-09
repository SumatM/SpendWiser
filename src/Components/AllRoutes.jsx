import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import { Landingpage } from "../Pages/Landingpage";


function AllRoutes(){
    return (
        <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        </Routes>
    )
}


export default AllRoutes;