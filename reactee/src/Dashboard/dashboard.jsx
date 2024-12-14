import "./dashboard.css"
import { Outlet } from "react-router-dom"
export default function Dashboard() {

    return (

        <div>
            <Topbar />
            <div className="dashboard-flex">
                <Sidebar  />
                <div className="right" style={{ width: "80%", }}>

                    <Outlet />

                </div>


            </div>
        </div>



    )



}