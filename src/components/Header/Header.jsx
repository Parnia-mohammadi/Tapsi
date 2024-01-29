import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

function Header() {
  // for changing heroicons
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavbar = () => {
    setIsNavOpen((is) => !is);
  };
  const hamburgerClass = "w-6 h-2 bg-black transform transition duration-500 ease-in-out";
  // const refValue = useRef();
  // const [hoverLogo, setHoverLogo]=useState(true);
  // const handleHover = () => {
  //   refValue.current.src="./src/assets/logo-hover.svg";
  // };
  return (
    <div class="bg-[#f8f8f8] m-0 h-16 px-[1/5] grid grid-cols-10 grid-rows-1 gap-4 items-center">
      <img
        src="./src/assets/logo.svg"
        alt="logo"
        class="object-contain col-start-2 col-end-4 md:col-end-3 md:w-80"
      />
      <div class="col-start-9 flex flex-col gap-y-[7px] md:hidden" onClick={handleNavbar} >
        <span class={`${hamburgerClass} ${isNavOpen? "-rotate-45 translate-y-[9px]":""}`}></span>
        <span class={`${hamburgerClass} ${isNavOpen?"opacity-0":""}`}></span>
        <span class={`${hamburgerClass} ${isNavOpen? "rotate-45 -translate-y-[9px]":""}`}></span>
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
      <div class="hidden md:inline-flex md:col-start-3 md:col-span-7 items-center justify-start lg:col-start-5 lg:col-span-5">
        <ul class="text-base text-gray-600 list-none flex flex-row ml-0 gap-x-8 md:gap-x-6 md:text-lg">
          <li class=" hover:text-orange-500">ویدیوها</li>
          <li class=" hover:text-orange-500">پشتیبانی</li>
          <li class=" hover:text-orange-500">
            امور<span>&nbsp;</span>سهام
          </li>
          <li class=" hover:text-orange-500">
            تپسی<span>&nbsp;</span>پک
          </li>
          <li class=" hover:text-orange-500">
            فرصت<span>&nbsp;</span>های<span>&nbsp;</span>شغلی
          </li>
          <li class=" hover:text-orange-500">وبلاگ</li>
        </ul>
        <button class="inline-block w-38 h-[38px] mr-6 bg-[#FF5B35] rounded-md hover:scale-95 transition ease-in duration-300">
          <a href="#" class="text-white text-lg m-6">
            دانلود
            <span>&nbsp;</span>تپسی
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
