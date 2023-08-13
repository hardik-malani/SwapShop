import React, { useEffect } from "react";
import login from "/login-photo.jpeg";
import user from "/user.png";
import passd from "/pass.png";
import bg from "/bg.png";
import logo from "/logo.png";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Actions/User";

export default function Login() {
  const dispatch = useDispatch();
  const [mail, setMail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { isAuthenticated, error } = useSelector((state) => state.user);

  const handleLogin = () => {
    if (mail === "" || pass === "") {
      alert("Please fill all the details");
      return;
    }
    dispatch(loginUser( mail, pass ));
  };

  
  useEffect(() => {
    if(isAuthenticated)
    {   
        window.location.href = "/";
    }
}, [isAuthenticated])


  return (
    <>
    <div className="flex justify-center items-center bg-green-200 h-screen pt-[10vh]">
      <div className="w-[80%] flex md:flex-row">
        <div className="md:w-[50%] w-full ml-8 bg-white h-[80vh] flex flex-col space-y-5 justify-center items-center rounded-lg md:rounded-s-3xl">
          <span className="font-semibold text-2xl font-serif">LOGIN</span>
          <span className="mb-10 text-green-600 text-sm font-serif font-semibold tracking-widest">to SwapShop - Promoting Sustainability</span>
          <div className="md:w-[80%] flex flex-row bg-gray-200 rounded-lg p-3">
            <img src={user} alt="" />
            <input type="text" placeholder="Username" className="bg-gray-200 ml-5 outline-none text-gray-700" onChange={(e) => setMail(e.target.value)}  value={mail}/>
          </div>
          <div className="md:w-[80%] flex flex-row bg-gray-200 rounded-lg p-3">
            <img src={passd} alt=""/>
            <input type="text" placeholder="Password" className="bg-gray-200 ml-5  outline-none"  onChange={(e) => setPass(e.target.value)}  value={pass}/>
          </div>
          {/* New User Register Here */}
          <div className="flex flex-row justify-center items-center space-x-2">
            <span className="text-gray-500 text-sm">New User?</span>
            <a href="/signup" className="text-blue-500 text-sm">Register Here</a>
          </div>
          <button className="bg-blue-500 p-3 rounded-2xl w-[40%] hover:bg-blue-300" onClick={handleLogin}>Login</button>
        </div>
        <div className="hidden md:block w-[50%]">
          <div className="flex justify-center items-center w-full h-full relative">
          <img src={login} alt="Logo Unavailable" className="w-[50%] z-20 rounded-lg -ml-20"/>
          <img src={bg} alt="bg" className="absolute h-full -ml-20 rounded-e-3xl"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
