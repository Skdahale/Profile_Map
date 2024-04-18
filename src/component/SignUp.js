import { React, useState } from "react";
import LogInImage from "../asset/icon/log.png";
import ArrivaLogo from "../asset/arrivaIcon.png";
import LockIcon from "../asset/icon/lock.png";

import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

const path = 'http://127.0.0.1:5000'

// import { createUserWithEmailAndPassword } from 'firebase/auth'; 'firebase/auth'
export default function SignUp() {

 

  

  const postUserData = async (event) => {
    
   
  
  };

  const handleInputChange = (event) => {
   
  };

  return (
    <>
      <div className="bg-slate-50 h-screen overflow-hidden ">
        <div className="w-screen flex gap-0 h-screen">
          <div className="flex  w-1/2">
            <img
              className="h-screen w-11/12 rounded-r-3xl "
              src={LogInImage}
              alt="img"
            />
          </div>

          <div class="flex flex-col  w-1/2 gap-1 justify-center align-center m-auto max-h-screen overflow-scroll  py-12 px-6 lg:px-8  scale-101">
            <div className="flex px-0 m-auto md:px-2 items-center after:content-['']  ">
             Sign Up
            </div>
            <div className="w-3/5 m-auto">
              <form>
                <div className="flex">
                  <div className="flex">
                    <div class="">
                      <label
                        for="fname"
                        class="block text-gray-900 font-small my-2 font-medium relative top-8 text-xl "
                      >
                        First Name
                      </label>

                      <div className="h-8 w-8 relative top-9 ml-2" ></div>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        class="w-full px-4 py-2 border rounded-lg indent-10 focus:outline-none focus:border-blue-500 text-xl"
                        placeholder="First Name"
                     
                      />
                    </div>
                    <div class="">
                      <label
                        for="lname"
                        class="block text-gray-900 font-small my-2 font-medium relative top-8 text-xl "
                      >
                        Last Name
                      </label>
                      <div className="h-8 w-8 relative top-9 ml-2"></div>
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        class="w-full px-4 py-2 border rounded-lg indent-10 focus:outline-none focus:border-blue-500 text-xl"
                        placeholder="Last Name"
                      
                      />
                    </div>
                  </div>
                </div>
                <div class="">
                  <label
                    for="email"
                    class="block text-gray-900 font-small my-2 font-medium relative top-2 text-xl "
                  >
                    Email
                  </label>

                  <img
                    src="https://img.icons8.com/fluency/48/business-e-mail.png"
                    alt="business-e-mail"
                    className="h-8 w-8 relative top-10 ml-2"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 border rounded-lg indent-10 focus:outline-none focus:border-blue-500 text-xl"
                    placeholder="Email"
           
                  />
                </div>

                <div class="">
                  <label
                    for="password"
                    class="block text-gray-900 font-medium relative top-4 text-xl"
                  >
                    Password
                  </label>
                  <img
                    src={LockIcon}
                    className="h-8 w-8 relative top-12 ml-2"
                  />

                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full px-4 py-2 border rounded-lg indent-10 focus:outline-none bg-white focus:border-blue-500 my-2  text-xl"
                    placeholder="Password"
                   
                  />
                </div>
                <div class="gap-3">
                  <label
                    for="dec"
                    class="block text-gray-900 font-medium relative top-3 text-xl"
                  >
                    Description
                  </label>

                 

                  <input
                    type="text"
                    id="dec"
                    name="dec"
                    class="w-full px-4 py-2 border rounded-lg indent-10 focus:outline-none bg-white focus:border-blue-500 my-2  text-xl"
                    placeholder="description."
                  
                  />
                </div>
                
                <Link to="/">
                  <button
                    type="submit"
                    onClick={postUserData}
                    class="w-full px-4 py-2 my-2 text-white bg-blue-500 rounded-lg rounded-mm hover:bg-blue-600  text-2xl"
                  >
                    Sign Up
                  </button>
                </Link>
                <p class="text-center mt-1 text-gray-600 relative before:content-'' before:absolute before:left-0 before:w-2/5 before:border-b-2 before:top-3 before:border-gray-300  after:content-'' after:absolute after:right-0 after:w-2/5 after:border-b-2 after:top-3 after:border-gray-300">
                  or
                </p>
                <div>
                  <div className="text-center mt-2 text-xl">
                    Already have a account?{" "}
                    <Link to="/" className="text-blue-600 ">
                      Log In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}