import "./comment.css"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const Comment = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setloading] = useState(false)
    const [input, setinput] = useState("")
    const [authorcomment, setauthorcomment] = useState({})
    const [pre, setpre] = useState({})

    const [comments, setcomments] = useState([])
    const nav = useNavigate();

    const id = window.location.pathname.split("/").slice(-1)[0]
    const cookies = new Cookies()
    const getcookies = cookies.get("data")


    useEffect(() => {
        axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`)
            .then(function (response) {
                console.log(response.data.data.comments[0])
                setcomments(response.data.data.comments)

            })
            .catch(function (error) {
                console.log(error);

            })
            .finally(function () {
            });

    }, [input])

    useEffect(() => {

        axios.post('https://tarmeezacademy.com/api/v1/login', {
            "username": getcookies.userdata.username,
            "password": getcookies.password
        })
            .then(function (response) {
                console.log(response.data.user.id);
                setpre({

                    id: response.data.user.id
                })



            })
            .catch(function (error) {

                console.log(error);
            })



    }, [])

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
                setauthorcomment({
                    photo: response.data.data.author.profile_image,
                    id: response.data.data.author.id
                })

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


                        comment.author.id === getcookies.userdata.id ?
                            (<img src={localStorage.getItem("photo") || "data:image/jpeg;base64,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"} alt="post image" />)


                            : Object.keys(comment.author.profile_image).length === 0 ?
                                (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0ODQ0NDQ0NDQ8NDQ0NFREWFhURFxUYHSggGCYlGxUVITEhJSkrLjouFx8zOTMtNyguLisBCgoKDg0OGxAQGy0fHSYtLTcvKysvLTcrLS0tNS0tLS0yLS03LS0tLS0tKy03LSstLS0rLS0rLS0rLS03LSwtLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHAQQDAv/EAEEQAQACAQICBgUIBwcFAAAAAAABAgMEEQUGEyExQVFhEnGBkcEiMlKSobGy0SMzQ2JyovA0QlOCwuHxFCREVHP/xAAZAQEBAAMBAAAAAAAAAAAAAAAABAIDBQH/xAAiEQEAAgEEAwEBAQEAAAAAAAAAAQIDBBEhMRIyQVEiQhP/2gAMAwEAAhEDEQA/ANRAXpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5NfxHBpq75rxXf5tY6729UQjuYePRpo6LFtbNMde/XGOJ758/JSM2W2S03vab3t1za07zKjFgm/M8Q0ZM8V4jtZ9VzhPZhwbR3Wy26/qx+aOvzPrZ7L0r5Vx1+O6GFdcFI+Jpy3n6mKcz62P2lbeU46/DZ79Lzhkj9dhraO+cczWfdO6sD2cNJ+EZbx9aPw7i+n1P6u+1+/Hf5N49nf7HvZVWZiYmJmJid4mJ2mJ8d1w5c5hnLNcGomOknqx5Oz0/KfNJl0815r0ox59+JWUBMoAAAAAAAAAAAAAAAAAAHh41xCNLgtl7bfNx1nvvPZ+fse5SOcdZOTU9FE/Jwxt/nnrmfdtHvbMVPO0Q15b+Nd0FkyWva17z6VrTNrWntmZfkHUc8AACAAj/jxgAX/AJa4p/1OHa875ce1b/vR3W9v3wl2e8t63oNVjmZ2rk/RX8Nrdk+/ZoTm56eFuOl+G/lUAaW0AAAAAAAAAAAAAAABy1oiJmeyI3n1Mu1GacmS+Se297Xn2zu0XjWT0NJqbdkxivEeuY2+LNlmkjuUupnqABYlAAAAAAPU07h+fpcGHL9PFS0+uY6/t3Ziv/KmT0tFi/dm9f5pn4pdXHESo00/1MJcBCsAAAAAAAAAAAAAAAARXNNttDn84pH88M+aBzVG+hz/AOT8cM/X6X1lFqPYAUtAAAAAAAu3JVt9LePDNb7a1UldeSY/7bJPjmt+GqfU+jdp/dYQHPXAAAAAAAAAAAAAAAAPDxzD0mk1FI7ZxWmPXHXH3M3at9zNOLaOdPqMmLurbek+NJ7J/rwWaW3cJdTXqXlcBYlAAAAAAJX7lPD6Gjxz9O18nvnaPsiFF0+C2XJTFSN7XtFY9ve07T4Yx48eOvzaUrSPVEbJNVbiKqdNXmZfQBErAAAAAAAAAAAAAAAAERzFweNXSLU2jPTf0Jnqi1foSlx7W01neHlqxaNpZZlxWx2tS9Zpes7WraNpiX4aXxDhmDUxtmpvMdlo+TePVKu6rk+f2GaJjurlid/rR+S6mprPtwjvp7R1yqwmcnLGtr2Y63865K/HZ8Z4Bro/8a/stjn4t0ZaT9av+dvxGCSjgGu/9a/1qR8X2x8ta237KK+dslPhMk5afpGO34h3axMzEREzMztERG8zPhssum5PyT+uzUrHfGOJtPvnbb7Vg4bwbT6Xrx0mb/4l59K/+3sar6msdctlcFp74R/LHBJwR0+aP0tq7Vr29HWe32ysAIbWm07ytrWKxtAAxegAAAAAAAAAAAAAAAAAAPjqdXiwxvlyUx/xWiJn2Bvs+whc/NOjp2Wvk/gpP+rZ5bc44O7Bmn1zSPi2RivPxhOWkfVkFarzjh78GaPVakvTh5r0dvndLj/jpv8Ah3JxXj48jLT9Tg8+l1+DN+qy0v5RaPS93a9DCeO2yJ36AHgAAAAAAAAAAAAAAAAAAI/inGcGlj5dvSv3Y6ddvb4e1C8d5m23xaWY8LZvhX81UtMzMzMzMzO8zPXMz47qsenm3Nuk+TPtxVM8Q5l1ObeKT0FPDHPy5jzt2+7ZDWmZmZmZmZ7ZmZmZcFlaVr1CS1pt2AMngAB/XVOyV4fzDqsG0en0tPoZfldXlbthFDG1K27h7FpjpoHCuP4NTtXfosv+Hee2f3Z7/vSzKVj4HzLbHtj1M+lj7K5O29PX4x9qPLptuaqseo34suY/NLxaItWYtWYiYtE7xMeL9JVIAAAAAAAAAAAAAAp3M3HpyTOnwW/Rx1ZLx/fnvrHkkObOL9DSNPjmYy5I+XMT10xz8ZUqFenw7/1ZLny/5ggBalAAAAAAAAAATfLvHLaa0YskzOC0+ucUz/ejy8YXqsxMRMTExMbxMdkx4sqWrlDi20xpck9UzM4Znu8afGEmow/6hTgy7fzK2AIlYAAAAAAAAAA+Os1NcOK+W/zaVmZ857o9+z7KrzvrerHpqz2z0t/VHVWPvn2Qzx087RDDJbxrurGq1Fs2S+S872vaZny8IfIHViNuHOAAAAAAAAAAAAHaWmsxaszFqzFqzHbEx2S4A0ng+vjU6emXq9LrreI7rx2/n7XtUrkzW+hntgmfk5a718slfzjf3Qurl5aeFtnRxX8q7gDWzAAAAAAAAGb8c1PTavPftj05rX+GvVH3b+1oWszdHiy5PoUtb2xEyy9Xpa8zKbUz1AAtSAAAAAAAAAAAAAAPrpc84suPLHbS8W909jUKWi0RaOuJiJj1SypovL2bpNHp58McU+rPo/BJqo6lTprdwkQESsAAAAAAcdAeHjn9k1H/AMr/AHSzd0XaXqUep9ockdFSdwh0BwAHXHQHB0BwAB0AHAAlfuUv7Fi9eT8cgm1XrDfp/ZMOOiBaAAAA/9k=" alt="default image" />)
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
                                <div className="head">
                                    <p>comments</p>
                                    <div
                                        onClick={() => {


                                            setIsOpen(false)
                                            setTimeout(() => {
                                                nav("/ail/home")

                                            }, 300);

                                        }}
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#86b7fe" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" /></svg></div>
                                </div>
                            </div>
                            <div className="container">

                                {showcomments.length === 0

                                    ?
                                    (
                                        <div style={{ display: "grid", placeItems: "center", height: "100%", fontWeight: "600" }} >
                                            <div className="svgcomment">
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

export default Comment;
