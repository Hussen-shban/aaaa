
import "./setting.css"
import Swal from "sweetalert2";
import "sweetalert2"
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function Setting() {
    const cookie = new Cookies
    const nav =useNavigate()
// const getcookie = cookie.get("data")

    function handlelogout() {



        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, log out!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                cookie.remove("data")
                setTimeout(() => {
                    nav("/")
    
                }, 200);

            }
        });








    }

    return (
        <div className="ail">
            <div className="setting">
                <div className="r">

                    <div className="content" >
                        <div className="co">
                            <div className="content-right">
                                <p>Archive</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><g fill="black" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.604 5.45a6.44 6.44 0 0 0-1.883 5.278a.5.5 0 0 1-.994.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088" /><path d="M3.594 11.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706" /><path d="M2.82 11.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M10 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5" /><path d="M13.5 10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5" /></g></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>
                            </div>

                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>Saved</p>
                                <svg style={{ height: "32px", fill: "#000" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Bookmark"><path d="M18,21a1.94,1.94,0,0,1-1.51-.72l-4.48-4-4.48,4a1.93,1.93,0,0,1-2.12.62,2,2,0,0,1-1.4-2V6.12A3.07,3.07,0,0,1,7,3H17a3.07,3.07,0,0,1,3,3.12V18.94a2,2,0,0,1-1.4,2A1.86,1.86,0,0,1,18,21Zm-6-7a1,1,0,0,1,.66.25l5.21,4.59A1.14,1.14,0,0,1,18,19l0-.06V6.12A1.07,1.07,0,0,0,17,5H7A1.07,1.07,0,0,0,6,6.12V18.94c0-.06.07-.05.13-.1l5.21-4.59A1,1,0,0,1,12,14Z" /></g></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Your activity</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2m0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2z" /><path fill="black" d="M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.99.99 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Notifications</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>Time mangagment</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>



                    </div>


                    <div className="content" >
                        <div className="co">
                            <div className="content-right">
                                <p>Account privacy</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M17 10.25h-.25V8a4.75 4.75 0 0 0-9.5 0v2.25H7A2.75 2.75 0 0 0 4.25 13v5A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18v-5A2.75 2.75 0 0 0 17 10.25M8.75 8a3.25 3.25 0 0 1 6.5 0v2.25h-6.5Zm9.5 10A1.25 1.25 0 0 1 17 19.25H7A1.25 1.25 0 0 1 5.75 18v-5A1.25 1.25 0 0 1 7 11.75h10A1.25 1.25 0 0 1 18.25 13Z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>

                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>Close Frienda</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="black"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" /><path d="m12.864 7.722l.88 1.774c.12.247.44.484.71.53l1.595.267c1.02.171 1.26.917.524 1.653l-1.24 1.25c-.21.212-.324.62-.26.913l.355 1.547c.28 1.225-.364 1.699-1.44 1.059l-1.494-.892c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.73-.736-.495-1.482.525-1.653l1.595-.267a1.1 1.1 0 0 0 .705-.53l.88-1.774c.48-.963 1.26-.963 1.735 0" /></g></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Blocked</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048"><path fill="black" d="M1024 0q141 0 271 36t245 104t207 160t161 208t103 244t37 272q0 141-36 271t-104 245t-160 207t-208 161t-244 103t-272 37q-141 0-271-36t-245-104t-207-160t-161-208t-103-244t-37-272q0-141 36-271t104-245t160-207t208-161T752 37t272-37m0 1920q164 0 313-56t274-163L347 437Q240 561 184 710t-56 314q0 124 32 238t90 214t140 181t181 140t214 91t239 32m677-309q107-124 163-273t56-314q0-124-32-238t-90-214t-140-181t-181-140t-214-91t-239-32q-164 0-313 56T437 347z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Hide story and live</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" d="M17.416 17.416a8 8 0 0 0 .478-.47L20.5 14c1-1 2.224-2 3.5-2c-1.276 0-2.5-1-3.5-2l-2.606-2.947a8.08 8.08 0 0 0-11.31-.469m8.713 12.213a8.08 8.08 0 0 1-9.19-1.85L3.5 14c-1-1-2.224-2-3.5-2c1.276 0 2.5-1 3.5-2l1.408-1.592M.5.5l23 23m-9.732-9.732a2.5 2.5 0 0 0-3.536-3.536" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>Favorites</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M12.86 10.44L11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14zm3.73 10.26L11 17.34L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6l2.55 6l6.49.57l-4.92 4.27z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>



                    </div>



                    <div className="content" >
                        <div className="co">
                            <div className="content-right">
                                <p>Device permissions</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>

                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>downloading</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="black" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1" /><path fill="black" d="m18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z" class="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Language</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M14 19c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07" /><path d="M14 19c-1.236 0-2.598.5-3.841 1.145c-1.998 1.037-2.997 1.556-3.489 1.225s-.399-1.355-.212-3.404L6.5 17.5" /><path stroke-linejoin="round" d="m5.5 13.5l1-2m0 0l1.106-2.211a1 1 0 0 1 1.788 0L10.5 11.5m-4 0h4m0 0l1 2m1-6h1.982V9c0 .5-.496 1.5-1.487 1.5m3.964-3v2m0 0v4m0-4H18.5" /></g></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>

                        <div className="co">
                            <div className="content-right">
                                <p>Family Center</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="m12 3l11 8.25l-1.2 1.6L20 11.5V21H4v-9.5l-1.8 1.35l-1.2-1.6zm-4.65 9.05q0 1.325 1.425 2.825T12 18q1.8-1.625 3.225-3.125t1.425-2.825q0-1.1-.75-1.825T14.1 9.5q-.65 0-1.188.263T12 10.45q-.375-.425-.937-.687T9.9 9.5q-1.05 0-1.8.725t-.75 1.825M18 19v-9l-6-4.5L6 10v9zm0 0H6z" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>


                        <div className="co">
                            <div className="content-right">
                                <p>Help</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19.79 15.41c.95-2.17.95-4.66 0-6.82l-2.74 1.24c.6 1.38.6 2.95.01 4.34zm-4.37-11.2a8.54 8.54 0 0 0-6.83 0l1.24 2.73c1.39-.59 2.96-.59 4.35.01zM4.21 8.58a8.56 8.56 0 0 0 0 6.84l2.74-1.25c-.6-1.38-.6-2.96 0-4.35zm4.38 11.21a8.5 8.5 0 0 0 6.83-.01l-1.24-2.73a5.5 5.5 0 0 1-4.34.01zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4" /></svg>
                            </div>
                            <div className="content-left" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" /></svg>                            </div>
                        </div>



                    </div>



                    <div className="content" >



                        <div style={{ marginBottom: "10px", marginTop: "10px" }} className="co">
                            <div className="content-right">
                                <p style={{ color: "#86b7fe", fontWeight: "600" }}>Add account</p>
                            </div>

                        </div>

                        <div style={{ marginBottom: "10px" }} className="co">
                            <div className="content-right">
                                <p  onClick={handlelogout} style={{ color: "red", fontWeight: "600" }}>Log out</p>
                            </div>

                        </div>

                        <div style={{ marginBottom: "10px" }} className="co">
                            <div className="content-right">
                                <p style={{ color: "red", fontWeight: "600" }}>Log out ail accounts</p>
                            </div>

                        </div>






                    </div>




                </div>

            </div>
        </div>



    )

}