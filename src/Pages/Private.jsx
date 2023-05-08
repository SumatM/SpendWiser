import AllRoutes from "../Components/AllRoutes";
import PrivateNav from "../Components/PrivateNavBar";
import PrivateRoute from "../Components/PrivateRotes";

export default function Private(){

    return (
        <div>
        <PrivateNav/>
         <PrivateRoute/>
        </div>
    )
}