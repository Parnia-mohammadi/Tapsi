import { Bars3Icon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <div class="bg-stone-100 m-0 h-14 grid grid-cols-10 grid-rows-1 gap-4 px-40 items-center justify-center">
      <img
        src="./src/assets/logo.svg"
        alt="logo"
        class="w-[102px] h-[22px] col-start-1"
      />
      <Bars3Icon class="size-10 md:hidden " />
      <div class="col-start-5 col-span-5 ">
        <ul class="hidden text-base list-none md:grid md:grid-cols-11 md:gap-4 items-center justify-center ">
          <li class="col-start-1 hover:text-orange-500">ویدیوها</li>
          <li class=" hover:text-orange-500">پشتیبانی</li>
          <li class=" hover:text-orange-500">امور<span>&nbsp;</span>سهام</li>
          <li class=" hover:text-orange-500">تپسی<span>&nbsp;</span>پک</li>
          <li class=" col-span-2 hover:text-orange-500">فرصت<span>&nbsp;</span>های<span>&nbsp;</span>شغلی</li>
          <li class=" hover:text-orange-500">وبلاگ</li>
          <li>
            <button class="hidden px-10 h-10 w-40  bg-orange-600 rounded-md md:inline">
              <a href="#" class="text-white">
                دانلود
                <span>&nbsp;</span>تپسی
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
