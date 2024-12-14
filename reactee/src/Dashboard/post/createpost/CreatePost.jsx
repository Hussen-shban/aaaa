

// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Cookies from "universal-cookie";
// import "./createpost.css";
// import { useNavigate } from "react-router-dom";


// const LoadingIcon = () => (
//     <svg className="svgg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="white"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="white" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>

// );

// export default function CreatePost() {






//     const nav =useNavigate()
//     const [buttonLoading, setButtonLoading] = useState(false);
//     const [buttonHidden, setButtonHidden] = useState(false);
//     const [accept, setAccept] = useState(false);
//     const [inputForm, setInputForm] = useState({ title: "", description: "", Image: null });
//     const cookies = new Cookies();
//     const getCookies = cookies.get("data");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setAccept(true);

//         if (!isDescriptionValid(inputForm.description)) {
//             return;
//         }

//         const formData = new FormData();
//         formData.append("title", inputForm.title);
//         formData.append("body", inputForm.description);
//         formData.append("image", inputForm.Image);

//         const headers = { Authorization: `Bearer ${getCookies?.token}` };

//         setButtonHidden(true);
//         setButtonLoading(true);

//         try {
//             const response = await axios.post("https://tarmeezacademy.com/api/v1/posts", formData, { headers });
//             console.log(response);
//             // window.location =""; // أو استخدام navigate
//             nav("/ail/profile")
//         } catch (error) {
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: "top-end",
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                     toast.onmouseenter = Swal.stopTimer;
//                     toast.onmouseleave = Swal.resumeTimer;
//                 }
//             });
//             Toast.fire({
//                 title: `<svg class="ico" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#f70202" fill-rule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4s-3.2.1-4.6-.7s-2.5-2-3.1-3.5S.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1m.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1S2.7 4.9 2.3 6.3c-.4 1.3-.4 2.7.2 4q.9 1.95 2.7 3c1.2.7 2.6.9 3.9.6M7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7z" clip-rule="evenodd"/></svg> ${error.response.data.message}   `,
//             });
//         } finally {
//             setButtonHidden(false);
//             setButtonLoading(false);
//         }
//     };

//     const isDescriptionValid = (description) => description.trim().length > 0;

//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             try {
//                 const compressedImage = await resizeAndCompressImage(file, 800, 800, 0.7); // قم بتقليل الجودة إلى 70%
//                 const blob = dataURLToBlob(compressedImage);
//                 setInputForm({ ...inputForm, Image: blob });
//             } catch (error) {
//                 console.log("Error resizing image:", error);
//             }
//         }
//     };

//     const resizeAndCompressImage = (file, maxWidth, maxHeight, quality = 1) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();

//             reader.onload = function () {
//                 const img = new Image();
//                 img.onload = function () {
//                     const canvas = document.createElement("canvas");
//                     const ctx = canvas.getContext("2d");

//                     let width = img.width;
//                     let height = img.height;

//                     if (width > height) {
//                         if (width > maxWidth) {
//                             height = Math.round(height * (maxWidth / width));
//                             width = maxWidth;
//                         }
//                     } else {
//                         if (height > maxHeight) {
//                             width = Math.round(width * (maxHeight / height));
//                             height = maxHeight;
//                         }
//                     }

//                     canvas.width = width;
//                     canvas.height = height;
//                     ctx.drawImage(img, 0, 0, width, height);

//                     const compressedImage = canvas.toDataURL("image/jpeg", quality);
//                     resolve(compressedImage);
//                 };
//                 img.src = reader.result;
//             };

//             reader.onerror = function (error) {
//                 reject(error);
//             };

//             reader.readAsDataURL(file);
//         });
//     };

//     const dataURLToBlob = (dataURL) => {
//         const byteString = atob(dataURL.split(",")[1]);
//         const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
//         const arrayBuffer = new ArrayBuffer(byteString.length);
//         const uintArray = new Uint8Array(arrayBuffer);

//         for (let i = 0; i < byteString.length; i++) {
//             uintArray[i] = byteString.charCodeAt(i);
//         }

//         return new Blob([arrayBuffer], { type: mimeString });
//     };

//     return (
//         <div className="createpost">
//             <div className="create">
//                 <div className="container" onClick={() => setAccept(false)}>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="description">Description:</label>
//                         <input
//                             id="description"
//                             type="text"
//                             placeholder="Description ..."
//                             value={inputForm.description}
//                             onChange={(e) => setInputForm({ ...inputForm, description: e.target.value })}
//                         />
//                         <p className={`acceptemail ${!isDescriptionValid(inputForm.description) && accept ? "show-message" : ""}`}>
//                             Please fill out this field description!
//                         </p>

//                         <label className="photo">
//                             <div className="photo-flex">
//                                 <p>Select</p>
//                             </div>
//                             <input type="file" onChange={handleImageChange} />
//                         </label>

//                         <button disabled={buttonHidden}>
//                             {buttonLoading ? <LoadingIcon /> : "Create"}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import "./createpost.css";
import { useNavigate } from "react-router-dom";

const LoadingIcon = () => (
    <svg className="svgg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="white"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
);

export default function CreatePost() {
    const nav = useNavigate();
    const [hidden, sethidden] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonHidden, setButtonHidden] = useState(false);
    const [accept, setAccept] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // الصورة المؤقتة للمعاينة
    const [inputForm, setInputForm] = useState({ title: "", description: "", Image: null });
    const cookies = new Cookies();
    const getCookies = cookies.get("data");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAccept(true);

        if (!isDescriptionValid(inputForm.description)) {
            return;
        }

        const formData = new FormData();
        formData.append("title", inputForm.title);
        formData.append("body", inputForm.description);
        formData.append("image", inputForm.Image);

        const headers = { Authorization: `Bearer ${getCookies?.token}` };

        setButtonHidden(true);
        setButtonLoading(true);

        try {
            const response = await axios.post("https://tarmeezacademy.com/api/v1/posts", formData, { headers });
            console.log(response);
            nav("/ail/profile");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response.data.message,
            });
        } finally {
            setButtonHidden(false);
            setButtonLoading(false);
        }
    };

    const isDescriptionValid = (description) => description.trim().length > 0;

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const compressedImage = await resizeAndCompressImage(file, 800, 800, 0.7);
                const blob = dataURLToBlob(compressedImage);
                const previewUrl = URL.createObjectURL(blob);
                setSelectedImage(previewUrl); // تخزين الرابط للعرض
                setInputForm({ ...inputForm, Image: blob }); // تخزين الصورة المضغوطة
            } catch (error) {
                console.log("Error resizing image:", error);
            }
        }
    };

    const resizeAndCompressImage = (file, maxWidth, maxHeight, quality = 1) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function () {
                const img = new Image();
                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height = Math.round(height * (maxWidth / width));
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width = Math.round(width * (maxHeight / height));
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    const compressedImage = canvas.toDataURL("image/jpeg", quality);
                    resolve(compressedImage);
                };
                img.src = reader.result;
            };

            reader.onerror = function (error) {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const dataURLToBlob = (dataURL) => {
        const byteString = atob(dataURL.split(",")[1]);
        const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
            uintArray[i] = byteString.charCodeAt(i);
        }

        return new Blob([arrayBuffer], { type: mimeString });
    };



    const handleRejectImage = () => {

        setSelectedImage(null); // إعادة تعيين الصورة المؤقتة
        setInputForm({ ...inputForm, Image: null }); // إزالة الصورة
        sethidden(false)
        window.location.reload()

    };

    return (
        <div className="createpost">
            <div className="create">
                <div className="container" onClick={() => setAccept(false)}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="description">Description:</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description ..."
                            required
                            value={inputForm.description}
                            onChange={(e) => setInputForm({ ...inputForm, description: e.target.value })}
                        />
                        {/* <p className={`acceptemail ${!isDescriptionValid(inputForm.description) && accept ? "show-message" : ""}`}>
                            Please fill out this field description!
                        </p> */}

                        <label

                            style={{ display: hidden ? "none" : "block" }}
                            onClick={() => sethidden(true)}

                            className="photo">
                            <div className="photo-flex">
                                <p>Select</p>
                            </div>
                            <input type="file" onChange={handleImageChange} />
                        </label>


                        {selectedImage && (
                            <div className="image-preview">
                                <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%", height: "auto", }} />
                                <div className="nooo">
                                    <button

                                        type="button" onClick={handleRejectImage}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                            <path fill="#fff" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                                        </svg>
                                    </button>

                                    <button disabled={buttonHidden}>
                                        {buttonLoading ? <LoadingIcon /> : "Create"}
                                    </button>
                                </div>

                            </div>
                        )}


                    </form>
                </div>
            </div>
        </div>
    );
}
