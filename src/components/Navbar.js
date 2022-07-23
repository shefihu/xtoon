import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
    setshow(false);
  };
  const Register = () => {
    navigate("/register");
    setshow(false);
  };
  return (
    <div>
      {" "}
      <div className="bg-gray-900">
        <div className=" bg-zinc-900 ">
          <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
            {/* For large and Medium-sized Screen */}
            <div className="flex justify-between ">
              <div className=" flex space-x-3 items-center">
                <h1
                  onClick={() => {
                    navigate("/");
                  }}
                  className="cursor-pointer font-extrabold text-3xl leading-6 text-white"
                >
                  Xtoons.
                </h1>
              </div>
              <div className="hidden sm:flex flex-row items-center space-x-14">
                <NavLink
                  className="text-xl font-extrabold text-white"
                  to={"/faqs"}
                >
                  About
                </NavLink>
                <NavLink
                  className="text-xl active:bg-red-700 focus:outline-none focus:border-b-2 focus:border-green-300  font-extrabold text-white"
                  to={"/about"}
                >
                  All Anime
                </NavLink>
              </div>
              <div className="hidden sm:flex flex-row space-x-4">
                <motion.button
                  onClick={Register}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-md flex space-x-2 w-52 h-14 font-normal text-lg leading-3 text-white bg-red-500  focus:outline-none focus:bg-gray-200 hover:bg-green-600 duration-150 justify-center items-center"
                >
                  Sign Up for Free
                </motion.button>
              </div>
              {/* Burger Icon */}
              <div
                id="bgIcon"
                onClick={() => setshow(!show)}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white  justify-center items-center sm:hidden cursor-pointer`}
              >
                <svg
                  className={`${show ? "hidden" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className={`${show ? "block" : "hidden"} bg-white`}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Mobile and small-screen devices (toggle Menu) */}
            <div
              id="MobileNavigation"
              className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <NavLink
                  className="text-lg font-extrabold text-white"
                  to={"/faqs"}
                >
                  FAQs
                </NavLink>
                <NavLink
                  className="text-lg font-extrabold text-white"
                  to={"/about"}
                >
                  About
                </NavLink>
              </div>
              <div className="flex flex-col items-center gap-4 mt-4 w-80 mx-auto ">
                <button
                  onClick={Register}
                  className="rounded-md flex space-x-2 w-52 h-14 font-normal text-lg leading-3 text-white bg-red-500  focus:outline-none focus:bg-gray-200 hover:bg-green-600 duration-150 justify-center items-center"
                >
                  Sign Up for Free
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
