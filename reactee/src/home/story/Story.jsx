



import React from "react";
import "./story.css";
import { Swiper, SwiperSlide } from 'swiper/react';  // استيراد Swiper و SwiperSlide
import 'swiper/css';
import { useState } from "react";


export default function Story() {


        const [photo, setphoto] = useState(localStorage.getItem("photo") || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0ODQ0NDQ0NDQ8NDQ0NFREWFhURFxUYHSggGCYlGxUVITEhJSkrLjouFx8zOTMtNyguLisBCgoKDg0OGxAQGy0fHSYtLTcvKysvLTcrLS0tNS0tLS0yLS03LS0tLS0tKy03LSstLS0rLS0rLS0rLS03LSwtLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHAQQDAv/EAEEQAQACAQICBgUIBwcFAAAAAAABAgMEEQUGEyExQVFhEnGBkcEiMlKSobGy0SMzQ2JyovA0QlOCwuHxFCREVHP/xAAZAQEBAAMBAAAAAAAAAAAAAAAABAIDBQH/xAAiEQEAAgEEAwEBAQEAAAAAAAAAAQIDBBEhMRIyQVEiQhP/2gAMAwEAAhEDEQA/ANRAXpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5NfxHBpq75rxXf5tY6729UQjuYePRpo6LFtbNMde/XGOJ758/JSM2W2S03vab3t1za07zKjFgm/M8Q0ZM8V4jtZ9VzhPZhwbR3Wy26/qx+aOvzPrZ7L0r5Vx1+O6GFdcFI+Jpy3n6mKcz62P2lbeU46/DZ79Lzhkj9dhraO+cczWfdO6sD2cNJ+EZbx9aPw7i+n1P6u+1+/Hf5N49nf7HvZVWZiYmJmJid4mJ2mJ8d1w5c5hnLNcGomOknqx5Oz0/KfNJl0815r0ox59+JWUBMoAAAAAAAAAAAAAAAAAAHh41xCNLgtl7bfNx1nvvPZ+fse5SOcdZOTU9FE/Jwxt/nnrmfdtHvbMVPO0Q15b+Nd0FkyWva17z6VrTNrWntmZfkHUc8AACAAj/jxgAX/AJa4p/1OHa875ce1b/vR3W9v3wl2e8t63oNVjmZ2rk/RX8Nrdk+/ZoTm56eFuOl+G/lUAaW0AAAAAAAAAAAAAAABy1oiJmeyI3n1Mu1GacmS+Se297Xn2zu0XjWT0NJqbdkxivEeuY2+LNlmkjuUupnqABYlAAAAAAPU07h+fpcGHL9PFS0+uY6/t3Ziv/KmT0tFi/dm9f5pn4pdXHESo00/1MJcBCsAAAAAAAAAAAAAAAARXNNttDn84pH88M+aBzVG+hz/AOT8cM/X6X1lFqPYAUtAAAAAAAu3JVt9LePDNb7a1UldeSY/7bJPjmt+GqfU+jdp/dYQHPXAAAAAAAAAAAAAAAAPDxzD0mk1FI7ZxWmPXHXH3M3at9zNOLaOdPqMmLurbek+NJ7J/rwWaW3cJdTXqXlcBYlAAAAAAJX7lPD6Gjxz9O18nvnaPsiFF0+C2XJTFSN7XtFY9ve07T4Yx48eOvzaUrSPVEbJNVbiKqdNXmZfQBErAAAAAAAAAAAAAAAAERzFweNXSLU2jPTf0Jnqi1foSlx7W01neHlqxaNpZZlxWx2tS9Zpes7WraNpiX4aXxDhmDUxtmpvMdlo+TePVKu6rk+f2GaJjurlid/rR+S6mprPtwjvp7R1yqwmcnLGtr2Y63865K/HZ8Z4Bro/8a/stjn4t0ZaT9av+dvxGCSjgGu/9a/1qR8X2x8ta237KK+dslPhMk5afpGO34h3axMzEREzMztERG8zPhssum5PyT+uzUrHfGOJtPvnbb7Vg4bwbT6Xrx0mb/4l59K/+3sar6msdctlcFp74R/LHBJwR0+aP0tq7Vr29HWe32ysAIbWm07ytrWKxtAAxegAAAAAAAAAAAAAAAAAAPjqdXiwxvlyUx/xWiJn2Bvs+whc/NOjp2Wvk/gpP+rZ5bc44O7Bmn1zSPi2RivPxhOWkfVkFarzjh78GaPVakvTh5r0dvndLj/jpv8Ah3JxXj48jLT9Tg8+l1+DN+qy0v5RaPS93a9DCeO2yJ36AHgAAAAAAAAAAAAAAAAAAI/inGcGlj5dvSv3Y6ddvb4e1C8d5m23xaWY8LZvhX81UtMzMzMzMzO8zPXMz47qsenm3Nuk+TPtxVM8Q5l1ObeKT0FPDHPy5jzt2+7ZDWmZmZmZmZ7ZmZmZcFlaVr1CS1pt2AMngAB/XVOyV4fzDqsG0en0tPoZfldXlbthFDG1K27h7FpjpoHCuP4NTtXfosv+Hee2f3Z7/vSzKVj4HzLbHtj1M+lj7K5O29PX4x9qPLptuaqseo34suY/NLxaItWYtWYiYtE7xMeL9JVIAAAAAAAAAAAAAAp3M3HpyTOnwW/Rx1ZLx/fnvrHkkObOL9DSNPjmYy5I+XMT10xz8ZUqFenw7/1ZLny/5ggBalAAAAAAAAAATfLvHLaa0YskzOC0+ucUz/ejy8YXqsxMRMTExMbxMdkx4sqWrlDi20xpck9UzM4Znu8afGEmow/6hTgy7fzK2AIlYAAAAAAAAAA+Os1NcOK+W/zaVmZ857o9+z7KrzvrerHpqz2z0t/VHVWPvn2Qzx087RDDJbxrurGq1Fs2S+S872vaZny8IfIHViNuHOAAAAAAAAAAAAHaWmsxaszFqzFqzHbEx2S4A0ng+vjU6emXq9LrreI7rx2/n7XtUrkzW+hntgmfk5a718slfzjf3Qurl5aeFtnRxX8q7gDWzAAAAAAAAGb8c1PTavPftj05rX+GvVH3b+1oWszdHiy5PoUtb2xEyy9Xpa8zKbUz1AAtSAAAAAAAAAAAAAAPrpc84suPLHbS8W909jUKWi0RaOuJiJj1SypovL2bpNHp58McU+rPo/BJqo6lTprdwkQESsAAAAAAcdAeHjn9k1H/AMr/AHSzd0XaXqUep9ockdFSdwh0BwAHXHQHB0BwAB0AHAAlfuUv7Fi9eT8cgm1XrDfp/ZMOOiBaAAAA/9k=");

    return (
        <div className="story">




            <Swiper
                spaceBetween={-0}  // المسافة بين العناصر
                slidesPerView={3}  // عدد القصص المعروضة في نفس الوقت
                // loop={true}  // التمرير اللانهائي بين القصص
                initialSlide={5}
                breakpoints={{
                    500: {
                        slidesPerView: 4, // عند الشاشة أكبر من 500 بكسل  
                    },
                    // عند الشاشة أقل من 500 بكسل، 3 هي القيمة الافتراضية المذكورة أعلاه  
                }}

                className="story-swiper"
            >
                {/* القصص التي يمكن التمرير بينها */}

                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="" />
                        </div>
                        <p className="nameprofile">Ali sh</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_qcbUnMHTbXMGjpHlHbw_21hlu7JyfVuEw&s" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_qcbUnMHTbXMGjpHlHbw_21hlu7JyfVuEw&s" alt="" />
                        </div>
                        <p className="nameprofile">Hasan sh</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4F1TlDVxxDBHA6o9WzV-kOYFUfi1ies9_Q&s" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4F1TlDVxxDBHA6o9WzV-kOYFUfi1ies9_Q&s" alt="" />
                        </div>
                        <p className="nameprofile">Majd sh</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://media.npr.org/assets/img/2022/08/21/moon1_sq-89f284a0491e12e820e3e74cb191e5536b5c8b5d.jpg?s=1100&c=85&f=jpeg" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://media.npr.org/assets/img/2022/08/21/moon1_sq-89f284a0491e12e820e3e74cb191e5536b5c8b5d.jpg?s=1100&c=85&f=jpeg" alt="" />
                        </div>
                        <p className="nameprofile">Nour sh</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://preview.redd.it/4k-photo-of-brendon-on-fire-from-the-pandora-twitter-account-v0-sspxyxhruqi91.jpg?width=1080&crop=smart&auto=webp&s=65525e7f348d46d8ddc75cf3182882ad24fb9d67" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://preview.redd.it/4k-photo-of-brendon-on-fire-from-the-pandora-twitter-account-v0-sspxyxhruqi91.jpg?width=1080&crop=smart&auto=webp&s=65525e7f348d46d8ddc75cf3182882ad24fb9d67" alt="" />
                        </div>
                        <p className="nameprofile">Bassam sh</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="create">
                        <div className="photouser">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s" alt="" />
                        </div>
                        <div className="photoprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s" alt="" />
                        </div>
                        <p className="nameprofile">Ahmad sh</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div className="create">
                        <div className="photo">
                            <img src={photo} alt="" />
                        </div>
                        <div className="plus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#fff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                            </svg>
                        </div>
                        <p>Add story</p>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

