import React from "react";
import logo from "/logoMain.png";
import pass from "/pass.png";
import dot from "/3-dot.png";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Actions/User";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.user);
  return (
    // Create a navbar with justifying the content and aligning the items whne small screen give a dropdown menu
    <nav className="flex justify-between items-center py-2 px-8 bg-green-500 shadow-sm md:justify-start md:space-x-10 md:items-center">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/" className="flex items-center space-x-2">
          <img className="h-12 w-auto sm:h-20" src={logo} alt="" />
          {/* font style "Proxima Nova" */}
          <span className="font-serif font-bold text-2xl text-white">SwapShop</span>
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <Menu as="div" className="relative inline-block text-left z-50">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <img className="h-4 w-auto sm:h-6" src={dot} alt="" />
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                    >

                      Home
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>

                  {({ active }) => (
                    <a
                      href="/donate"
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                    >
                      Donate
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/demand"
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                    >
                      Demand
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/about"
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                    >
                      About
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/contact"
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                    >
                      Contact
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    isAuthenticated ?
                      <button
                        onClick={() => dispatch(logoutUser())}
                        className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } block px-4 py-2 text-sm`}
                      >
                        Logout
                      </button>
                      :
                      <a
                        href="/login"
                        className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } block px-4 py-2 text-sm`}
                      >
                        Login
                      </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="/"
          className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900 font-bold"
        >
          Home
        </a>
        <a
          href="/donate"
          className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-900 font-bold"
        >
          Donate
        </a>
        <a
          href="/demand"
          className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-900 font-bold"
        >
          Demand
        </a>
        <a
          href="/about"
          className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-900 font-bold"
        >
          About
        </a>
        <a
          href="/contact"
          className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-900 font-bold"
        >
          Contact
        </a>
        {isAuthenticated ?
          <button
            onClick={() => dispatch(logoutUser())}
            className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-green-500 hover:bg-white font-bold border-2 border-white rounded-full px-4 py-2"
          >
            Logout
          </button>
          :
          <a
            href="/login"
            className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-green-500 hover:bg-white font-bold border-2 border-white rounded-full px-4 py-2"
          >
            Log In
          </a>}

      </div>
    </nav>
  );
}
