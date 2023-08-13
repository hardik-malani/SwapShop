import React, { useState } from "react";
import login from "/login-photo.jpeg";
import user from "/user.png";
import pass from "/pass.png";
import bg from "/bg.png";
import emaild from "/email.png";
import { useDispatch } from "react-redux";
import { registerUser } from "../Actions/User";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(registerUser(name, email, password));
  };

  return (
    <div className="flex justify-center items-center bg-green-200 h-screen">
      <div className="w-[80%] flex md:flex-row">
        <div className="md:w-[50%] w-full ml-8 bg-white h-[80vh] flex flex-col space-y-5 justify-center items-center rounded-lg md:rounded-s-3xl">
          <span className="font-semibold text-2xl font-serif">SignUp</span>
          <span className="mb-10 text-green-600 text-sm font-serif font-semibold tracking-widest">to SwapShop - Promoting Sustainability</span>
          <div className="md:w-[80%] flex flex-row bg-gray-200 rounded-lg p-3">
            <img src={user} alt="" />
            <input type="text" placeholder="Username" className="bg-gray-200 ml-5 outline-none text-gray-700" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="md:w-[80%] flex flex-row bg-gray-200 rounded-lg p-3">
            <img src={emaild} alt="" className="w-[25px] h-[20px] -ml-1 -mb-18"/>
            <input type="text" placeholder="Email" className="bg-gray-200 ml-5 outline-none text-gray-700" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="md:w-[80%] flex flex-row bg-gray-200 rounded-lg p-3">
            <img src={pass} alt="" />
            <input type="text" placeholder="Password" className="bg-gray-200 ml-5  outline-none" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-300" onClick={submitHandler}>SignUp</button>
        </div>
        <div className="hidden md:block w-[50%]">
          <div className="flex justify-center items-center w-full h-full relative">
          <img src={login} alt="Logo Unavailable" className="w-[50%] z-20 rounded-lg -ml-20"/>
          <img src={bg} alt="bg" className="absolute h-full -ml-20 rounded-e-3xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
