import "./chare.css"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";



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


const Chare = () => {
    const [isOpen, setIsOpen] = useState(true);
    const nav = useNavigate();

    const id = window.location.pathname.split("/").slice(-1)[0]
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
                                                nav("/ail/home")

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

export default Chare;
