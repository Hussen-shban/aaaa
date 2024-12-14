
import "./home.css"
import Nav from "../components/nav/Nav"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import ModalImage from "react-modal-image";
import { useParams } from "react-router-dom";
import Story from "./story/Story";


export default function Home() {

    const cookie = new Cookies
    const getcookie = cookie.get("data")
    const id = useParams()
    const type = window.location.pathname.split("/").slice(-1)[0]
    console.log(type)


    const [opencomment, setopencomment] = useState(false)
    const [loveIcons, setLoveIcons] = useState([]);
    const [saveicons, setsaveicons] = useState([])
    const [userpost, setuserpost] = useState([])


    const [photoIndex, setPhotoIndex] = useState(null); // حالة لتخزين أي صورة تم النقر عليها

    const handleOpenPhoto = () => {
        setPhotoIndex(0); // تعيين الرقم الخاص بالصورة المفتوحة
    };




    function handlelove(id) {
        setLoveIcons(prevloveicons => {
            const newloveicon = [...prevloveicons]
            newloveicon[id] = !newloveicon[id]
            return newloveicon


        })
    }
    function handlesave(id) {
        setsaveicons((prevsaveicons) => {

            const newsaveicons = [...prevsaveicons]
            newsaveicons[id] = !newsaveicons[id]
            return newsaveicons

        })


    }

    function handleopencomment() {
        if (opencomment == true)
            setopencomment(false)
        else {
            setopencomment(true)

        }
    }

    let page = 1

    function d(page) {
        axios.get(`https://tarmeezacademy.com/api/v1/posts?limit=5&page=${page}`)
            .then(function (response) {

                setuserpost((prevPosts) => [...prevPosts, ...response.data.data]);

                console.log(response.data.data)


            })
            .catch(function (error) {
                console.log(error);
            })

    }

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 400;
            const scrollPosition = window.innerHeight + window.pageYOffset;
            const pageHeight = document.body.offsetHeight;

            if (pageHeight - scrollPosition <= threshold) {
                console.log("You are almost at the end of the page!");
                page = page + 1
                d(page)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {

        // axios.get('https://tarmeezacademy.com/api/v1/posts?limit=5')
        //     .then(function (response) {
        //         setuserpost(response.data.data)
        //         console.log(response.data.data)


        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        d(page)



    }, [opencomment])

    useEffect(() => {
        axios.get('https://tarmeezacademy.com/api/v1/posts?limit=5')
            .then(function (response) {
                setLoveIcons(new Array(response.data.data.length).fill(false))
                setsaveicons(new Array(response.data.data.length).fill(false))
            })
    }, [])





    const showuser = userpost.map((post, index) => {
        return (

            <div key={index} className="containerr" style={Object.keys(post.image).length === 0 ? { display: "none" } : { display: "block" }}>

                <div >



                    {
                        Object.keys(post.image).length === 0 ?
                            (<></>)
                            :
                            (<div>
                                <div className="header">
                                    <div>
                                        <div className="profilename">
                                            <p>{post.author.name}</p>
                                        </div>
                                        <Link
                                            to={`userprofile/${post.author.id}`}
                                            className="profileimg">


                                            {
                                                post.author.id === getcookie.userdata.id ?
                                                    (<img src={localStorage.getItem("photo") || "data:image/jpeg;base64,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"} alt="post image" />)


                                                    : Object.keys(post.author.profile_image).length === 0 ?
                                                        (<img src="data:image/jpeg;base64,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" alt="default image" />)
                                                        :
                                                        (<img src={post.author.profile_image} alt="post image" />)
                                            }
                                        </Link>
                                    </div>
                                    <div>
                                        <svg


                                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#86b7fe" fill-rule="evenodd" d="M10.5 5A1.5 1.5 0 0 1 12 3.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5zm0 7a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5zm1.5 5.5a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V19a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd" /></svg>

                                    </div>

                                </div>

                                <div className="footer-end">
                                    <p>{post.body}</p>
                                </div>



                                <div className={`content `} >


                                    {
                                        photoIndex === null && (

                                            <div>

                                                <img
                                                    loading="lazy"
                                                    src={post.image} alt="post image"
                                                    onClick={() => handleOpenPhoto(0)}  // تعيين الفهرس إلى 0 إذا كان هناك صورة واحدة
                                                    style={{ cursor: 'pointer', maxWidth: '100%' }} // تعديل حجم الصورة لتناسب العرض
                                                />
                                            </div>
                                        )

                                    }

                                    {photoIndex !== null && (
                                        <ModalImage

                                            className="bigphoto"
                                            small={post.image}      // الصورة المصغرة
                                            large={post.image}      // الصورة الأصلية

                                            onClose={() => setPhotoIndex(null)}  // إغلاق التكبير عند النقر على الخلفية
                                        />
                                    )}
                                </div>





                                <div className="footer">
                                    <div className="footerright">
                                        <div onClick={() => { handlelove(index) }}>
                                            {loveIcons[index] ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#86b7fe" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62" /></svg>
                                            ) :
                                                (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#86b7fe" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11" /></svg>

                                                )
                                            }
                                        </div>
                                        <Link
                                            to={`comment/${post.id}`}
                                            className="commentnum"

                                        >
                                            <div onClick={handleopencomment}>
                                                <span>{post.comments_count}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#86b7fe" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" /></svg>

                                            </div>
                                        </Link>
                                        <Link
                                            to={`chare`}

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#86b7fe" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5L3.5 9l6.5 3l7-5l-5 7l3 6.5z" /></svg>
                                        </Link>
                                    </div>
                                    <div onClick={() => { handlesave(index) }} className="footerleft">
                                        {
                                            saveicons[index] ?
                                                (
                                                    <div className="pop">
                                                        <svg style={{ height: "40px", fill: "#86b7fe" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Bookmark"><path d="M17,3H7A3.07,3.07,0,0,0,4,6.12V18.94a2,2,0,0,0,1.4,2,1.93,1.93,0,0,0,2.12-.62l4.48-4,4.48,4A1.94,1.94,0,0,0,18,21a1.86,1.86,0,0,0,.61-.1,2,2,0,0,0,1.4-2V6.12A3.07,3.07,0,0,0,17,3Z" /></g></svg>
                                                        <p className="text" >saved</p>
                                                    </div>

                                                )
                                                :
                                                (
                                                    <div className="pop">
                                                        <svg style={{ height: "40px", fill: "#86b7fe" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Bookmark"><path d="M18,21a1.94,1.94,0,0,1-1.51-.72l-4.48-4-4.48,4a1.93,1.93,0,0,1-2.12.62,2,2,0,0,1-1.4-2V6.12A3.07,3.07,0,0,1,7,3H17a3.07,3.07,0,0,1,3,3.12V18.94a2,2,0,0,1-1.4,2A1.86,1.86,0,0,1,18,21Zm-6-7a1,1,0,0,1,.66.25l5.21,4.59A1.14,1.14,0,0,1,18,19l0-.06V6.12A1.07,1.07,0,0,0,17,5H7A1.07,1.07,0,0,0,6,6.12V18.94c0-.06.07-.05.13-.1l5.21-4.59A1,1,0,0,1,12,14Z" /></g></svg>
                                                        <p className="textt" >saved</p>
                                                    </div>
                                                )





                                        }
                                    </div>

                                </div>
                            </div>)

                    }


                </div>








            </div>


        )
    })

    return (
        <div>




            <div>

                <Outlet />

                <div className="postt">

                    <Story />

                    {showuser.length === 0 ?
                        (<div className="containerr">
                            <div>
                                <div>
                                    <div className="header">
                                        <div>
                                            <div className="loadingprofilename">

                                            </div>
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
                        </div>)


                        :

                        (showuser)


                    }
                </div>
            </div>



        </div>


    )
}



