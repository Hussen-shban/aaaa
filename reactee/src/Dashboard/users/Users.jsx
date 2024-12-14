import "./user.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function User() {

    const [users, setusers] = useState([])



    function handleDelete(id) {

        const updateusers = users.filter(user => (user.id != id))







        setusers(updateusers)

    }


    useEffect(() => {
        axios.get('https://tarmeezacademy.com/api/v1/users')
            .then(function (response) {

                setusers(response.data.data.reverse())
            })
            .catch(function (error) {

                console.log(error);
            })




    }, [])

    const showusers = users.map((user, index) => {
        return (


            <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <svg onClick={() => handleDelete(user.id)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#f70202" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z" /></svg>
                    <Link to={`${user.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#447ea2" d="M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44s-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3z" /></svg>
                    </Link>
                </td>
            </tr>
        )


    })

    return (

        <div
            className="user">
            <table>

                <thead>
                    <tr >
                        <th>Id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>


                </thead>
                <tbody>

                    {showusers}
                    {/* <tr>
                        <td>1</td>
                        <td>hussen</td>
                        <td>hussen@gmail.com</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>hasan</td>
                        <td>hasan@gmail.com</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>ali</td>
                        <td>ali@gmail.com</td>
                    </tr> */}

                </tbody>






            </table>






        </div>






    )

}