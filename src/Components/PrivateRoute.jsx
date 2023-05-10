import { useSelector } from "react-redux";

import {Navigate} from "react-router-dom";

import {useLocation} from "react-router-dom";

export const PrivateRoute = ({children}) => {

  const location=useLocation();

  let Auth=useSelector((store)=>{
    return store.AuthReducer.isAuth;
  });

  console.log(Auth);

  return <><div>{Auth?children:<Navigate state={location.pathname}to="/login"/>}</div>;
</>
};