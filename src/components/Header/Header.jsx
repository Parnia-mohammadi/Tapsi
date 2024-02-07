// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { createContext, useContext, useState } from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";

function Header() {
  const hamburgerClass =
    "w-6 h-2 bg-black transform transition duration-500 ease-in-out";
  // for changing heroicons and showing drop down navbar
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavbar = () => {
    setIsNavOpen((is) => !is);
  };
  return (
    <div class="sticky w-full top-0 border-b-2 border-gray-200 z-20">
      <div class="bg-[#f8f8f8] m-0 h-14 px-[10%] grid grid-cols-10 grid-rows-1 gap-4 items-center">
        <NavLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 102 22" class="col-start-2 col-end-4 md:col-end-3 group w-30"><g fill-rule="evenodd"><path fill="#000" class="group-hover:fill-[#FF5B35]" d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z"/><path fill="#000" class="group-hover:fill-[#FF5B35]" d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102z"/><path fill="#FF5B35" class="group-hover:fill-black" d="M26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z"/></g></svg>
        </NavLink>
        {/* hamburger menu */}
        <div
          class="col-start-10 flex flex-col gap-y-[7px] md:hidden"
          onClick={handleNavbar}
        >
          <span
            class={`${hamburgerClass} ${
              isNavOpen ? "-rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            class={`${hamburgerClass} ${isNavOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            class={`${hamburgerClass} ${
              isNavOpen ? "rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </div>
        {/* changing heroicons in navbar
      {isNavOpen ? (
        <XMarkIcon
          class="size-8 md:hidden col-start-9 pr-2 "
          onClick={handleNavbar}
        />
      ) : (
        <Bars3Icon
          class="size-8 md:hidden col-start-9 pr-2"
          onClick={handleNavbar}
        />
      )} */}
        {/* horizental navBar */}
        <div class="hidden md:inline-flex md:col-start-3 md:col-span-7 items-center justify-start 
        lg:col-start-4 lg:col-span-6">
          <ul class="text-base text-gray-600 list-none flex flex-row ml-0 gap-x-8
           hover:*:text-orange-500  md:text-lg">
            <li>
              <NavLink to="/video">ویدیوها</NavLink>
              </li>
            <li>
            <NavLink to="/contact"> پشتیبانی</NavLink>
              </li>
            <li>
            <NavLink to="/investors">امور<span>&nbsp;</span>سهام </NavLink>
            </li>
            <li>
            <NavLink to="/tapsi-pack">تپسی<span>&nbsp;</span>پک</NavLink>
            </li>
            <li>
            <NavLink to="/carears">فرصت<span>&nbsp;</span>های<span>&nbsp;</span>شغلی</NavLink>
            </li>
            <li>
            <NavLink to="/blog">وبلاگ</NavLink>
              </li>
          </ul>
          <button class="hidden w-38 h-[38px] mr-6 bg-[#FF5B35] rounded-md hover:scale-95
           transition ease-in duration-300 lg:inline-block">
            <a href="#" class="text-white text-lg m-6">
              دانلود
              <span>&nbsp;</span>تپسی
            </a>
          </button>
        </div>
      </div>
      {/* DropDown navBar */}
      <div
        class={`${
          isNavOpen
            ? "bg-white w-full md:hidden"
            : "hidden"
        }`}
      >
        <ul class="text-base text-gray-600 flex flex-col gap-y-4 p-4  hover:*:text-orange-500">
          <li class="">ویدیوها</li>
          <li class="">پشتیبانی</li>
          <li class="">
            امور<span>&nbsp;</span>سهام
          </li>
          <li class="">
            تپسی<span>&nbsp;</span>پک
          </li>
          <li class="">
            فرصت<span>&nbsp;</span>های<span>&nbsp;</span>شغلی
          </li>
          <li class="">وبلاگ</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
