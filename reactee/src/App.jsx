import SignUp from "./auth/signup/signup"
import Login from "./auth/login/Login"
import Dashboard from "./Dashboard/dashboard"
import Updateuser from "./Dashboard/users/updateuser/Updateuser"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/requireauth/RequireAuth"
import PersistLogin from "./auth/persistlogin/persistlogin"
import CreatePost from "./Dashboard/post/createpost/CreatePost"
import Comment from "./home/comment/Comment"
import Chare from "./home/chare/Chare"
import MyProfile from "./Dashboard/myprofile/MyProfile"
import Showphoto from "./Dashboard/myprofile/showphoto/Showphoto"
import UserProfile from "./home/userprofile/UserProfile"
import Ail from "./ail"
import Friends from "./Dashboard/friends/Friends"
import Setting from "./Dashboard/setting/setting"
function App() {



  return (
    <div >



      <Routes>
      <Route element={<RequireAuth />}>
      <Route element={<PersistLogin />}>
   


        <Route path="/ail" element={<Ail />} >


          <Route path="home" element={<Home />} >
            <Route path="comment/:id" element={<Comment />} />
            <Route path="chare" element={<Chare />} />
            <Route path="userprofile/:id" element={<UserProfile />} />
          </Route>
          <Route path="profile" element={<MyProfile />} />
          <Route path="showphoto/:id" element={<Showphoto />} />
          <Route path="addpost" element={<CreatePost />} />
          <Route path="friends" element={<Friends/>}/>
          <Route path="setting" element={<Setting/>} />


        </Route>

        </Route>
        </Route>


        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        {/* protected routes */}
   


     
 
        {/* protected routes */}

      </Routes>


    </div>


  )
}

export default App
