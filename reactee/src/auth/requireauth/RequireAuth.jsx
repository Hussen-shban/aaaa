import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Userc } from "../../context/Context";
import Cookies from "universal-cookie";


export default function RequireAuth() {

    const user = useContext(Userc)
    const location = useLocation()
    const cookie = new Cookies
    const getcookie=cookie.get("data")


    return getcookie.token ?
        (<Outlet />)
        :
        (<Navigate
            state={{ from: location }}
            replace to="/" />)

}