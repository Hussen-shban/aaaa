
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";



export default function Ail() {


    return (
        <div>
            <Nav />

            <Outlet />

        </div>
    )

}

