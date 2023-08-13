import React, { useState, useEffect } from "react";

import pfp from "/bag.jpg";
import Navbar from "../components/Navbar";
import FeedData from "../components/FeedData";
import love from "/love.png";
import feedbg from "/feed-bg-small.jpg";
import { getPosts } from "../Actions/Post";
import { useDispatch, useSelector } from "react-redux";

export default function Feed() {
  const dispatch = useDispatch();
  const [randomChats, setRandomChats] = useState([]);
  const { loading, error, allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    const randomChatsData = FeedData;
    setRandomChats(randomChatsData);
    dispatch(getPosts());
  }, []);


  return (
    <>
      
      <div className="flex flex-row flex-wrap h-[20px]">
        <span className="mt-5 ml-3 font-semibold text-[#00B2EA] hover:text-sky-800 hover:text-[18px]">
          Latest donations
        </span>
        <span className="mt-5 ml-3 font-semibold text-[#00B2EA] hover:text-sky-800 hover:text-[18px]">
          Latest Demands
        </span>
        <div className="dropdown dropdown-bottom dropdown-end pt-2 absolute mx-auto text-gray-600 mt-10 xs:left-[20%] sm:left-[40%] top-24 bg-white">
          <label tabIndex={0} className="btn m-1">
            <input
              className="bg-white h-10 px-5 pr-16 rounded-xl text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li className="underline">Recent Searches</li>
            <li className="text-gray-500">Paper</li>
            <li className="text-gray-500">Wood</li>
            <li className="text-gray-500">Clothe pieces</li>
          </ul>
        </div>
        {/* <img src={love} alt="" className="self-end mt-10 md:ml-[90%] md:-mt-[10%]"/> */}
        <div className="mt-[2%] xs:mt-[5%] md:mt-[20px] mx-3 relative -right-[25%] xs:-right-[10%] lg:-right-[60%] xl:-right-[70%] h-[20px]">
          <span className="text-[#00B2EA] hover:text-sky-800 hover:text-[18px]">
            Add to Wishlist
          </span>
        </div>
      </div>

      <div className="md:px-28 md:pt-28 hidden md:block">
        <img src={feedbg} alt="feed" className="rounded-3xl" /> 
        <p className="text-green-700 font-semibold relative -top-44 lg:-top-56 w-[70%] left-8 lg:text-[40px] ml-8 xl:-top-96 xl:text-[50px]">Let's Join Hands in</p>
        <p className="text-green-700 font-semibold relative -top-44 lg:-top-56 w-[70%] left-8 lg:text-[40px] ml-24 xl:-top-96 xl:text-[50px]">creating a </p>
        <p className="text-green-700 font-semibold relative -top-44 lg:-top-56 w-[70%] left-8 lg:text-[40px] xl:-top-96 xl:text-[50px] xl:ml-8">more Sustainable Future !</p>
      </div>

      <span className="block w-[100%] text-center text-green-700 underline text-2xl">Fetching Latest data for you :</span>

      <div className="flex flex-row flex-wrap mt-28 md:mt-16 justify-center">
        {allPosts?.map((chat, index) => (
          <div
            key={chat._id}
            className="card w-96 bg-base-100 shadow-xl m-10 bg-purple-100 rounded-xl"
          >
            <figure>
              <img
                src={chat.images[0]&& chat.images[0].url}
                alt="Shoes"
                className="h-[50vh] mb-10 rounded-3xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chat.title}</h2>
              <p>{chat.description}</p>
              <div className="flex space-x-4">
                <span className="rounded-lg border-2 border-gray-600 p-2 w-[80px] text-center">{chat.tags[0]}</span>
                <span className="rounded-lg border-2 border-gray-600 p-2 w-auto text-center">Amount Left: {chat.quantity ? chat.quantity : "1"}</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mt-4" onClick={() => {
                  window.location.href = `/feed/${chat._id}`;
                }}> {chat.type === "request" ? "Donate" : "Demand"} </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="relative flex px-10 py-24 items-center mb-2">
        <div class="flex-grow border-t border-red-400"></div>
        <div className="flex flex-row -mb-2 font-semibold mr-[10%] md:mr-0">
          <span class="flex-shrink mx-4 text-[#00B2EA]">
            MADE WITH LOVE BY HARDIK & SHUBHAM{" "}
          </span>
          <img src={love} alt="love" className="-mt-[2%] -mr-[2%]" />
        </div>
        <div class="flex-grow border-t border-red-400"></div>
      </div>
    </>
  );
}
