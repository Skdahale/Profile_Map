import React from "react";
import { MdDashboard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import arrivaIcon from "../asset/arrivaIcon.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminDash() {
  return (
    <div className="bg-zinc-100  flex w-screen h-screen overflow-hidden">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-200">
          <ul className="space-y-2 font-medium">
            <li className="border-b-2 border-white">
              <Link to="/home">
                {" "}
                <div className="flex px-0 md:px-2 mb-4 items-center after:content-[''] relative after:border-l-2 after:h-16 after:flex after:pl-1  after:items-center after:text-2xl esm:after:content-['ARRIVA'] after:text-indigo-900  ">
               
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/admin"
                className="flex items-center cursor-pointer p-2 text-indigo-900  hover:text-white hover:bg-blue-600 rounded-lg group"
              >
                <MdDashboard className="w-7 h-7 text-indigo-600 group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
          
            <li>
              <Link
                to="/"
                className="flex items-center cursor-pointer p-2  text-indigo-950 hover:text-white hover:bg-blue-600 rounded-lg group"
              >
                <PiSignOutBold className="w-7 h-7  text-indigo-600 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className=" static p-4 sm:ml-64 z-50 hover:outline-blue-400 max-w-full max-h-full w-full h-full overflow-y-scroll ">
        {/* Custom announcement field */}

        <div class="flex items-center px-3 py-2 rounded-lg bg-blue-200 border border-slat-600">
          

          <div>
             </div>
          <button
            type="button"
            class="p-2  hover:scale-110 rounded-lg cursor-pointer  hover:bg-gray-100   "
          >
            <FontAwesomeIcon
              className={`text-3xl duration-300  scale-110 hover:scale-110 
                  ? "text-green-500 before:content[''] before:absolute before:z-20 before:items-center before:w-8 before:h-8 before:bg-cyan-300"
                  : ""
                }  hover:scale-110 `}
              style={{ cursor: "pointer" }}
            />
          </button>
         <h1 className="text-2xl">Admin Dashboard</h1>
         
        </div>

        <span className=" text-gray-500 text-xl">User Profiles</span>

      <div className="flex flex-row gap-6 ">

      <div className=" flex flex-col gap-6 mt-6 xl:mt-4 ">
          <div class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <svg
                  class="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  id="avatar"
                  viewBox="0 0 61.8 61.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="—ÎÓÈ 1">
                      <path
                        d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <circle
                        fill="#58b0e0"
                        r="30.9"
                        cy="30.9"
                        cx="30.9"
                      ></circle>
                      <path
                        d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                        fill-rule="evenodd"
                        fill="#60350a"
                      ></path>
                      <path
                        d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
                        fill-rule="evenodd"
                        fill="#d5e1ed"
                      ></path>
                      <path
                        d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        opacity=".11"
                        d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"
                        fill-rule="evenodd"
                        fill="#434955"
                      ></path>
                      <path
                        d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <path
                        d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                      <path
                        d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                        fill-rule="evenodd"
                        fill="#8a5c42"
                      ></path>
                      <path
                        d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="52.562"
                        cx="31.223"
                      ></circle>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="56.291"
                        cx="31.223"
                      ></circle>
                      <path
                        d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div class="headings *:text-center *:leading-4">
              <p class="text-xl font-serif font-semibold text-[#434955]">
                ANNA WILSON
              </p>
              <p class="text-sm font-semibold text-[#434955]">DEVELOPER</p>
            </div>
            <div class="w-full items-center justify-center flex">
              <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li>
                  <svg
                    id="phone"
                    viewBox="0 0 24 24"
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p>+123-458-784</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="mail"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                      fill="#231f20"
                    ></path>
                  </svg>
                  <p>smkys@gmail.com</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="globe"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <path
                        data-name="globe"
                        d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                      ></path>
                    </g>
                  </svg>
                  <p>smkydevelopr.com</p>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                    alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                  />
                  <p> skilled developer with expertise in various</p>
                </li>
              </ul>
            </div>
         <div className="flex flex-row gap-6">
         <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="">
               Edit
                    </Link>
                    
                    
            </button>
            <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="" >
               Delete
                    </Link>
                    
                    
            </button>
         </div>
            <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>
        <div className=" flex flex-col gap-6 mt-6 xl:mt-4 ">
          <div class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <svg
                  class="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  id="avatar"
                  viewBox="0 0 61.8 61.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="—ÎÓÈ 1">
                      <path
                        d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <circle
                        fill="#58b0e0"
                        r="30.9"
                        cy="30.9"
                        cx="30.9"
                      ></circle>
                      <path
                        d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                        fill-rule="evenodd"
                        fill="#60350a"
                      ></path>
                      <path
                        d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
                        fill-rule="evenodd"
                        fill="#d5e1ed"
                      ></path>
                      <path
                        d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        opacity=".11"
                        d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"
                        fill-rule="evenodd"
                        fill="#434955"
                      ></path>
                      <path
                        d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <path
                        d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                      <path
                        d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                        fill-rule="evenodd"
                        fill="#8a5c42"
                      ></path>
                      <path
                        d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="52.562"
                        cx="31.223"
                      ></circle>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="56.291"
                        cx="31.223"
                      ></circle>
                      <path
                        d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div class="headings *:text-center *:leading-4">
              <p class="text-xl font-serif font-semibold text-[#434955]">
                SDFGEB YYEVHS
              </p>
              <p class="text-sm font-semibold text-[#434955]">WORKER</p>
            </div>
            <div class="w-full items-center justify-center flex">
              <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li>
                  <svg
                    id="phone"
                    viewBox="0 0 24 24"
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p>+123-458-784</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="mail"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                      fill="#231f20"
                    ></path>
                  </svg>
                  <p>dvdv@gmail.com</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="globe"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <path
                        data-name="globe"
                        d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                      ></path>
                    </g>
                  </svg>
                  <p>wdfcwvvsd.com</p>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                    alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                  />
                  <p> skilled developer with expertise in various</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6">
         <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="">
               Edit
                    </Link>
                    
                    
            </button>
            <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="" >
               Delete
                    </Link>
                    
                    
            </button>
         </div>
            <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>
        <div className=" flex flex-col gap-6 mt-6 xl:mt-4 ">
          <div class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <svg
                  class="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  id="avatar"
                  viewBox="0 0 61.8 61.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="—ÎÓÈ 1">
                      <path
                        d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <circle
                        fill="#58b0e0"
                        r="30.9"
                        cy="30.9"
                        cx="30.9"
                      ></circle>
                      <path
                        d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                        fill-rule="evenodd"
                        fill="#60350a"
                      ></path>
                      <path
                        d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
                        fill-rule="evenodd"
                        fill="#d5e1ed"
                      ></path>
                      <path
                        d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        opacity=".11"
                        d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"
                        fill-rule="evenodd"
                        fill="#434955"
                      ></path>
                      <path
                        d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <path
                        d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                      <path
                        d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                        fill-rule="evenodd"
                        fill="#8a5c42"
                      ></path>
                      <path
                        d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="52.562"
                        cx="31.223"
                      ></circle>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="56.291"
                        cx="31.223"
                      ></circle>
                      <path
                        d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div class="headings *:text-center *:leading-4">
              <p class="text-xl font-serif font-semibold text-[#434955]">
               ATHOA DAHES
              </p>
              <p class="text-sm font-semibold text-[#434955]">DEVELOPER</p>
            </div>
            <div class="w-full items-center justify-center flex">
              <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li>
                  <svg
                    id="phone"
                    viewBox="0 0 24 24"
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p>+123-458-784</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="mail"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                      fill="#231f20"
                    ></path>
                  </svg>
                  <p>ATHS@gmail.com</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="globe"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <path
                        data-name="globe"
                        d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                      ></path>
                    </g>
                  </svg>
                  <p>s.com</p>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                    alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                  />
                  <p> skilled developer with habse in various</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6">
         <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="" >
               Edit
                    </Link>
                    
                    
            </button>
            <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="" >
               Delete
                    </Link>
                    
                    
            </button>
         </div>
            <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>
        
        <div className=" flex flex-col gap-6 mt-6 xl:mt-4 ">
          <div class="profile-card flex-row w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <svg
                  class="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  id="avatar"
                  viewBox="0 0 61.8 61.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="—ÎÓÈ 1">
                      <path
                        d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <circle
                        fill="#58b0e0"
                        r="30.9"
                        cy="30.9"
                        cx="30.9"
                      ></circle>
                      <path
                        d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                        fill-rule="evenodd"
                        fill="#60350a"
                      ></path>
                      <path
                        d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
                        fill-rule="evenodd"
                        fill="#d5e1ed"
                      ></path>
                      <path
                        d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        opacity=".11"
                        d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"
                        fill-rule="evenodd"
                        fill="#434955"
                      ></path>
                      <path
                        d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                        fill-rule="evenodd"
                        fill="#f9dca4"
                      ></path>
                      <path
                        d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                        fill-rule="evenodd"
                        fill="#ffe8be"
                      ></path>
                      <path
                        d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                      <path
                        d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                        fill-rule="evenodd"
                        fill="#8a5c42"
                      ></path>
                      <path
                        d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="52.562"
                        cx="31.223"
                      ></circle>
                      <circle
                        fill="#434955"
                        r=".839"
                        cy="56.291"
                        cx="31.223"
                      ></circle>
                      <path
                        d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                        fill-rule="evenodd"
                        fill="#464449"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div class="headings *:text-center *:leading-4">
              <p class="text-xl font-serif font-semibold text-[#434955]">
               FRSHJUW LWBE
              </p>
              <p class="text-sm font-semibold text-[#434955]">CONTENT</p>
            </div>
            <div class="w-full items-center justify-center flex">
              <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li>
                  <svg
                    id="phone"
                    viewBox="0 0 24 24"
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p>+123-458-345</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="mail"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                      fill="#231f20"
                    ></path>
                  </svg>
                  <p>DSE@gmail.com</p>
                </li>
                <li>
                  <svg
                    class="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="15"
                    width="15"
                    id="globe"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <path
                        data-name="globe"
                        d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                      ></path>
                    </g>
                  </svg>
                  <p>smkywdgfopr.com</p>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                    alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                  />
                  <p> skilled developer with expertise in various</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6">
         <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="" >
               Edit
                    </Link>
                    
                    
            </button>
            <button
              class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
               <Link className="">
               Delete
                    </Link>
                    
                    
            </button>
         </div>
            <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
