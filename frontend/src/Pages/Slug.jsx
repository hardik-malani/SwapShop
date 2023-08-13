import React from "react";
import Navbar from "../components/Navbar";
import give from "/bagg.png";
import login from "/bg.png";

export default function Slug() {
  return (
    <>
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-2xl">
          Congratulations on getting a step closer to a more sustainable
          environment !
        </span>
      </div>

      <div className="flex flex-col w-screen">
        <div className="flex flex-row flex-wrap mt-20 ml-40">
          <div className="flex flex-col space-y-3 -ml-36 md:-ml-0">
            <img
              src={login}
              alt=""
              className="absolute w-screen h-[120vh] xss:h-[140vh] xs:h-[160vh] sm:h-[150vh] lg:h-[100vh] xl:h-[90vh] top-56 -ml-4 sm:-ml-40 lg:-ml-40 xl:-ml-40 md:top-40 opacity-80 -z-20"/>
            <img
              src={give}
              alt="post"
              className="rounded-3xl border-2 border-gray-400 w-[400px]"
            />
            <div className="flex flex-row xs:space-x-4">
              <img
                src="https://m.media-amazon.com/images/I/51Ogw-qFKmL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
              <img
                src="https://m.media-amazon.com/images/I/51Iim32GkIL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
              <img
                src="https://m.media-amazon.com/images/I/51Ogw-qFKmL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
              <img
                src="https://m.media-amazon.com/images/I/51Iim32GkIL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
              <img
                src="https://m.media-amazon.com/images/I/51Ogw-qFKmL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
              <img
                src="https://m.media-amazon.com/images/I/51Iim32GkIL._SS40_.jpg"
                alt=""
                className="w-[30px] rounded-sm hover:border-2 hover:border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col -ml-20 mt-6 md:ml-0 md:mt-16 md:space-y-5">
            <span className="text-4xl md:ml-10">Bags</span>
            <span className="md:ml-10 font-bold text-2xl underline">
              Description
            </span>
            <p className="md:ml-10">
            Some Left out bags after season sale
            </p>
            <span className="md:ml-10 font-bold text-2xl underline">
              Posted By:
            </span>
            <p className="md:ml-10">@Shubham</p>
          </div>
        </div>
        <form class="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20 w-full">
          <div class="px-3 mb-2 mt-2">
            <textarea
              placeholder="comment"
              class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            ></textarea>
          </div>
          <div class="flex justify-end px-4">
            <input
              type="submit"
              class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              value="Comment"
            />
          </div>
        </form>
        <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer class="flex flex-col space-y-2 justify-between items-center mb-2 border-2 rounded-lg p-2">
            <div class="flex items-center">
              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Trisha
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  Aug. 12,2023
                </time>
              </p>
            </div>
            <p class="text-gray-500 dark:text-gray-400">Shubham is a very humble person always looking to impact the environment in a positive way</p>
          </footer>
        </article>
      </div>
    </>
  );
}
