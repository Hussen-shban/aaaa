import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Userc } from "../../context/Context";
import LoadingScreen from "../../components/loading/Loading";
import Cookies from "universal-cookie";

export default function PersistLogin() {

    const cookie = new Cookies


    const cookieget = cookie.get("data")
    const contex = useContext(Userc)


    const username = cookieget.userdata.username
    const token = cookieget.token
    const password = cookieget.password



    const [loading, setloading] = useState(true)

    useEffect(() => {



        async function refresh() {
            try {
                // const response = await axios.post("https://tarmeezacademy.com/api/v1/login", {
                //     username: username,
                //     password: password,
                // });

                // cookie.set("data", {
                //     token: response.data.token,
                //     userdata: response.data.user,
                //     password: password,
                // });

                // contex.setauth({ token: response.data.token });

            } catch (error) {
                console.log(error);
            } finally {
                setloading(false); 
            }
        }

        refresh()

    }, [])




    return (
        loading ? <LoadingScreen /> : <Outlet />
    )

}