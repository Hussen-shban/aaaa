import axios from "axios";
import "./showphoto.css"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2"
import { input } from "framer-motion/client";

const cookie = new Cookies
const getcookie = cookie.get("data")

export default function Showphoto() {
    const [opencomment, setopencomment] = useState(false)
    const [openchare, setopenchare] = useState(false)
    const [loveIcons, setLoveIcons] = useState(false);
    const [dataa, setdataa] = useState({})
    const [hidden, sethidden] = useState(false)
    const [postbody, setpostbody] = useState("")
    const [loading, setloading] = useState(false)
    const [load, setload] = useState(false)


    const LoadingIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="#86b6fe"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#86b6fe" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
    );
    const id = window.location.pathname.split("/").slice(-1)[0]
    const nav = useNavigate()
    // setload(true)

    useEffect(() => {
        axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                if (response.data && response.data.data) {
                    setdataa({
                        name: response.data.data.author.name,
                        profileimg: response.data.data.author.profile_image,
                        postimg: response.data.data.image,
                        body: response.data.data.body,
                        id: response.data.data.author.id,
                        idpost: response.data.data.id,
                        commentcount: response.data.data.comments_count




                    });
                }
            })
            .catch(function (error) {
                console.log("Error fetching data: ", error);
            })
            .finally(()=>{
                setload(false)

            })
    }, [id, opencomment, loading]);

    function handleopencomment() {
        setopencomment(true)
    }
    function handleopenchare() {
        setopenchare(true)
    }

    const closecomment = () => setopencomment(false)
    const closechare = () => setopenchare(false)

    function handlelove() {
        setLoveIcons(!loveIcons)

    }

    function handledelete() {



        let headers = {
            "Authorization": `Bearer ${getcookie.token}`
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`https://tarmeezacademy.com/api/v1/posts/${id}`,
                    {
                        "body": "hello sdffsdsfds",
                        "_method": "delete"

                    },
                    {
                        headers: headers
                    }
                )
                    .then(response => {
                        console.log('Deleted successfully:', response);


                        nav("/ail/profile")

                    })
                    .catch(error => {
                        console.error('Error deleting the resource:', error);
                    });

            }
        });





    }
    function handleupdate() {
        sethidden(!hidden)

    }
    async function update() {
        setpostbody("")
        setloading(true)

        let headers = {
            "Authorization": `Bearer ${getcookie.token}`
        }

        axios.post(`https://tarmeezacademy.com/api/v1/posts/${id}`,
            {
                "body": postbody,
                "_method": "put"

            },
            {
                headers: headers
            }
        )
            .then(response => {

                console.log(response)
                // location.reload()

            })

            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setloading(false)

            })

    }

    return (

        <div>
            {
               Object.keys(dataa).length === 0 ?

                    (
                        <div className="containerrr">
                            <div>
                                <div>
                                    <div className="header">
                                        <div>

                                            <div className="loadingprofileimg">

                                            </div>
                                        </div>

                                    </div>

                                    <div className="loadingfooter-end">
                                        <div>

                                        </div>
                                    </div>

                                    <div className="loadingcontent">

                                    </div>
                                    <div className="footer">
                                        <div className="footerright">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="rgba(128, 128, 128, 0.275)" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11" /></svg>
                                            </div>
                                            <div className="commentnum">
                                                <div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="rgba(128, 128, 128, 0.275)" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" /></svg>

                                                </div>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="rgba(128, 128, 128, 0.275)" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5L3.5 9l6.5 3l7-5l-5 7l3 6.5z" /></svg>
                                            </div>
                                        </div>
                                        <div className="footerleft">
                                            <svg style={{ height: "40px", fill: "rgba(128, 128, 128, 0.075)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Bookmark"><path d="M17,3H7A3.07,3.07,0,0,0,4,6.12V18.94a2,2,0,0,0,1.4,2,1.93,1.93,0,0,0,2.12-.62l4.48-4,4.48,4A1.94,1.94,0,0,0,18,21a1.86,1.86,0,0,0,.61-.1,2,2,0,0,0,1.4-2V6.12A3.07,3.07,0,0,0,17,3Z" /></g></svg>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div >
                            {
                                opencomment && <Commentpro closecomment={closecomment} />

                            }

                            {
                                openchare && <Charepro closechare={closechare} />

                            }
                            <div className="showphoto">

                                <div className="de">

                                    <div



                                        className="props">
                                        <div
                                            className="prop"
                                            onClick={handleupdate}
                                        >
                                            {
                                                !hidden ?
                                                    (
                                                        <p style={{ color: "#86b6fe" }}>Update</p>

                                                    )
                                                    :
                                                    (
                                                        <p

                                                            onClick={update}

                                                            style={{ color: "#86b6fe" }}>Save</p>
                                                    )
                                            }
                                            <svg onClick={(e) => {
                                                e.stopPropagation()
                                            }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#86b6fe" d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" /></svg>
                                        </div>
                                        <div
                                            className="prop"
                                            onClick={handledelete}
                                        >
                                            <p style={{ color: "red", }}>Delete</p>
                                            <svg onClick={(e) => {
                                                e.stopPropagation()
                                            }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ff0000" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2" /></svg>                                </div>

                                    </div>
                                </div>



                                <div className="header">
                                    <div>
                                        <div className="profilename">
                                            <p>{dataa.name}</p>
                                        </div>
                                        <div className="profileimg">

                                            {


                                                dataa.id === getcookie.userdata.id ?
                                                    (<img src={localStorage.getItem("photo") || "data:image/jpeg;base64,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"} alt="post image" />)


                                                    : dataa.profileimg === null || dataa.profileimg === undefined ?
                                                        (<img src="data:image/jpeg;base64,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" alt="default image" />)
                                                        :
                                                        (<img src={dataa.profileimg} alt="post image" />)


                                            }

                                        </div>
                                    </div>



                                </div>
                                {
                                    !loading ?
                                        (
                                            <div className="footer-end">

                                                {
                                                    !hidden ?
                                                        (
                                                            <p>{dataa.body}</p>
                                                        )
                                                        : loading ?
                                                            (
                                                                <LoadingIcon />
                                                            )
                                                            :
                                                            (
                                                                <
                                                                    input autoFocus
                                                                    value={postbody}
                                                                    onChange={(e) => {
                                                                        setpostbody(e.target.value)
                                                                    }}
                                                                />
                                                            )


                                                }
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="footer-end">
                                                <LoadingIcon />
                                            </div>
                                        )

                                }






                                <div className="content">
                                    <img
                                        src={dataa.postimg} alt="post image"
                                    />
                                </div>









                                <div className="footer">
                                    <div className="footerright">
                                        <div
                                            className="love"

                                            onClick={handlelove}

                                        >
                                            {loveIcons ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#86b7fe" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62" /></svg>
                                            ) :
                                                (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#86b7fe" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11" /></svg>

                                                )
                                            }
                                        </div>
                                        <Link
                                            className="commentnum"

                                        >
                                            <div onClick={handleopencomment}>
                                                <span>{dataa.commentcount}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#86b7fe" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" /></svg>

                                            </div>
                                        </Link>
                                        <Link>

                                            <svg
                                                onClick={handleopenchare}
                                                xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#86b7fe" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5L3.5 9l6.5 3l7-5l-5 7l3 6.5z" /></svg>
                                        </Link>
                                    </div>

                                </div>



                            </div>

                        </div>
                    )




            }
        </div>


    )

}



const Commentpro = ({ closecomment }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setloading] = useState(false)
    const [input, setinput] = useState("")
    const [profileimg, setprofileimg] = useState({})

    const [comments, setcomments] = useState([])
    console.log(profileimg)

    const id = window.location.pathname.split("/").slice(-1)[0]
    console.log(id)
    const cookies = new Cookies()
    const getcookies = cookies.get("data")

    useEffect(() => {
        axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`)
            .then(function (response) {
                setcomments(response.data.data.comments)
                setprofileimg(response.data.data.author.profile_image)



            })
            .catch(function (error) {
                console.log(error);

            })
            .finally(function () {
            });

    }, [input])

    function handlesend() {
        setloading(true)

        let body = {
            "body": input
        }
        let headers = {
            "Authorization": `Bearer ${getcookies.token}`
        }

        axios.post(`https://tarmeezacademy.com/api/v1/posts/${id}/comments`, body, {

            headers

        }

        )
            .then(function (response) {
                console.log(response);
                setinput("")


            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setloading(false)

            });


    }

    const showcomments = comments.map((comment, index) => {


        return (

            <div key={index} className="content">
                <div className="data">
                    <p className="p1">{comment.author.name}</p>
                    <p className="p2">{comment.body}</p>
                </div>

                <div className="photo">

                    {


                        comment.author.id === getcookie.userdata.id ?
                            (<img src={localStorage.getItem("photo") || "data:image/jpeg;base64,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"} alt="post image" />)

                            : Object.keys(comment.author.profile_image).length === 0 ?
                                (<img src="data:image/jpeg;base64,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" alt="default image" />)


                                :

                                (<img src={comment.author.profile_image} alt="post image" />)


                    }
                </div>

            </div>


        )



    })

    useEffect(() => {
        if (isOpen) {
            // document.body.style.overflowY = "scroll";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen])

    // الإعدادات الخاصة بتأثير الانبثاق
    const modalVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
    };

    return (
        <div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="modal-backdrop"
                        onClick={() => setIsOpen(false)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "white",
                            // padding: "20px",
                            borderRadius: "20px 20px 0 0",
                            boxShadow: "0 -2px 10px rgb(134 183 254 / 10%)",
                        }}
                    >
                        <div className="model-content" onClick={(e) => e.stopPropagation()}>

                            <div>
                                <div className="head">
                                    <p>comments</p>
                                    <div
                                        onClick={() => {


                                            setIsOpen(false)

                                            setTimeout(() => {
                                                closecomment()

                                            }, 300);


                                        }}
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#86b7fe" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" /></svg></div>
                                </div>
                            </div>
                            <div className=" con ">

                                {showcomments.length === 0

                                    ?
                                    (
                                        <div style={{ display: "grid", placeItems: "center", height: "100%", fontWeight: "600" }} >
                                            <div>
                                                <div>< svg style={{ position: "relative", right: "-38px" }} xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 1024 1024"><path fill="#86b7fe" d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40m-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40" /><path fill="#86b7fe" d="M894 345c-48.1-66-115.3-110.1-189-130v.1c-17.1-19-36.4-36.5-58-52.1c-163.7-119-393.5-82.7-513 81c-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4c5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6c17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408M323 735l-12-5l-99 31l-1-104l-8-9c-84.6-103.2-90.2-251.9-11-361c96.4-132.2 281.2-161.4 413-66c132.2 96.1 161.5 280.6 66 412c-80.1 109.9-223.5 150.5-348 102m505-17l-8 10l1 104l-98-33l-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62c72.6 99.6 68.5 235.2-8 330" /><path fill="#86b7fe" d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40" /></svg></div>
                                                <p style={{ color: "#86b7fe" }}>There are no comments yet</p>
                                                <p style={{ color: "#86b7fe", textAlign: "center", fontSize: "14px", fontWeight: "400" }}>Be the first to comment</p>
                                            </div>


                                        </div>


                                    )
                                    :

                                    (showcomments)



                                }
                            </div>


                            <div className="footer">
                                {
                                    input === "" ? (
                                        <div />
                                    ) : (
                                        <button onClick={handlesend}>
                                            {!loading ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                                    <path fill="white" d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="2" r="0" fill="white">
                                                        <animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(45 12 12)">
                                                        <animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(90 12 12)">
                                                        <animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(135 12 12)">
                                                        <animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(180 12 12)">
                                                        <animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(225 12 12)">
                                                        <animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(270 12 12)">
                                                        <animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                    <circle cx="12" cy="2" r="0" fill="white" transform="rotate(315 12 12)">
                                                        <animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
                                                    </circle>
                                                </svg>
                                            )}
                                        </button>
                                    )
                                }




                                <div>
                                    <input value={input} placeholder="... add comment " type="text"

                                        onChange={(e) => {
                                            setinput(e.target.value)
                                        }}

                                    />
                                    <div className="photo">
                                        {
                                            localStorage.getItem("photo") ?
                                                (<img src={localStorage.getItem("photo")} />)
                                                :
                                                (<img src="data:image/jpeg;base64,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" />)
                                        }
                                    </div>
                                </div>


                            </div>




                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
function F() {
    return (
        <div>
            <p>hussen</p>
            <div className="photo" >
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
    )
}
const Charepro = ({ closechare }) => {
    const [isOpen, setIsOpen] = useState(true);
    const cookies = new Cookies()
    const getcookies = cookies.get("data")







    useEffect(() => {
        if (isOpen) {
            // document.body.style.overflowY = "scroll";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

    // الإعدادات الخاصة بتأثير الانبثاق
    const modalVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
    };


    return (
        <div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="modal-backdrop"
                        onClick={() => setIsOpen(false)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "white",
                            // padding: "20px",
                            borderRadius: "20px 20px 0 0",
                            boxShadow: "0 -2px 10px rgb(134 183 254 / 10%)",
                        }}
                    >
                        <div className="model-content" onClick={(e) => e.stopPropagation()}>

                            <div>
                                <div className="headd">

                                    <label htmlFor="">
                                        <input placeholder="Search" dir="rtl" type="text" />

                                    </label>
                                    <svg className="s" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08" /></svg>







                                    <div
                                        onClick={() => {


                                            setIsOpen(false)
                                            setTimeout(() => {
                                                closechare()

                                            }, 300);

                                        }}
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#86b7fe" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" /></svg></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="contentt" >


                                    <F />  <F /> <F /><F />




                                </div>

                            </div>


                            <div className="footer">


                                <div className="icon">

                                    <div>
                                        <p>Whatsapp</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>

                                        </div>
                                    </div>

                                    <div>
                                        <p>Messenger</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M7.765 19.225c.59-.26 1.25-.309 1.868-.139c.77.21 1.565.316 2.368.314c4.585 0 8-3.286 8-7.7s-3.415-7.7-8-7.7s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006zM12.001 2c5.634 0 10 4.127 10 9.7s-4.367 9.7-10 9.7a11 11 0 0 1-2.895-.384a.8.8 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.123-.707l-.054-1.78a.8.8 0 0 0-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174c0-5.573 4.366-9.7 10-9.7M5.996 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.395c.421-.32.971.184.689.631l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0L6.685 15.17c-.421.319-.971-.185-.689-.633" /></svg>
                                        </div>
                                    </div>

                                    <div>
                                        <p>Copy link</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="#fff" fill-rule="evenodd" d="M8.512 3.005c.676-.46 1.531-.468 2.167-.05c.144.094.298.244.71.656s.562.566.657.71c.417.636.408 1.49-.051 2.167c-.105.155-.267.32-.694.747l-.62.619a.5.5 0 0 0 .708.707l.619-.619l.043-.043c.37-.37.606-.606.771-.849c.675-.994.71-2.287.06-3.278c-.159-.241-.39-.472-.741-.823l-.045-.045l-.044-.045c-.352-.351-.583-.582-.824-.74c-.99-.65-2.284-.616-3.278.06c-.243.164-.48.4-.85.77l-.042.043l-.619.62a.5.5 0 1 0 .707.706l.62-.618c.426-.427.592-.59.746-.695M4.318 7.147a.5.5 0 0 0-.707-.707l-.619.618l-.043.043c-.37.37-.606.606-.771.85c-.675.993-.71 2.287-.06 3.277c.159.242.39.473.741.824l.045.045l.044.044c.352.351.583.583.824.741c.99.65 2.284.616 3.278-.06c.243-.165.48-.401.849-.771l.043-.043l.619-.619a.5.5 0 1 0-.708-.707l-.618.619c-.427.427-.593.59-.747.694c-.676.46-1.532.469-2.167.051c-.144-.094-.298-.245-.71-.657s-.562-.566-.657-.71c-.417-.635-.408-1.49.051-2.167c.105-.154.267-.32.694-.747zm5.304-1.061a.5.5 0 0 0-.707-.708L5.379 8.914a.5.5 0 1 0 .707.707z" clip-rule="evenodd" /></svg>
                                        </div>
                                    </div>


                                    <div>
                                        <p>Share</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M16.61 21q-.994 0-1.687-.695q-.692-.696-.692-1.69q0-.15.132-.757l-7.197-4.273q-.324.374-.793.587t-1.007.213q-.986 0-1.676-.702T3 12t.69-1.683t1.676-.702q.537 0 1.007.213t.793.588l7.198-4.255q-.07-.194-.101-.385q-.032-.192-.032-.392q0-.993.697-1.689Q15.625 3 16.62 3t1.688.697T19 5.389t-.695 1.688t-1.69.692q-.542 0-1-.222t-.78-.597l-7.199 4.273q.07.194.101.386q.032.191.032.391t-.032.391t-.1.386l7.198 4.273q.323-.375.78-.597q.458-.222 1-.222q.994 0 1.69.696q.695.698.695 1.693t-.697 1.688t-1.692.692m.004-1q.589 0 .987-.398t.398-.986t-.398-.987t-.986-.398t-.987.398t-.398.986t.398.987t.987.398m-11.25-6.616q.596 0 1-.398q.403-.398.403-.986t-.403-.986t-1-.398q-.581 0-.973.398T4 12t.393.987t.973.397m11.25-6.615q.588 0 .986-.398T18 5.384t-.398-.986T16.616 4t-.987.398t-.398.987t.398.986t.987.398m0-1.385" /></svg>
                                        </div>
                                    </div>


                                </div>




                            </div>




                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};



