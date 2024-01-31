// import { ArrowDownIcon } from "@heroicons/react/24/solid";
function Banner({ isNavOpen }) {
  return (
    <div class="relative w-full h-[78vh] box-border md:grid md:grid-cols-10 md:gap-4">
      <img
        src="../src/assets/banner.jpg"
        alt="banner of tapsi"
        class="h-full w-full object-cover absolute top-0 z-0"
      />
      <div class="bg-indigo-950/30 text-white z-10 border-transparent rounded-2xl px-8 py-[14px] 
      w-[18rem] my-0 absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2
      md:w-120 md:right-[10%] md:translate-x-0">
        <p class="text-3xl md:text-5xl">تپسی</p>
        <p class="text-lg md:text-2xl">اپلیکیشن درخواست خودرو و پیک</p>
        <div class="flex flex-col gap-y-4 my-4 *:py-[12px] *:border-white *:border-2 *:rounded-xl 
        [&>*>img]:inline-block [&>*>img]:ml-3 md:*:text-lg md:grid md:grid-cols-2 md:gap-x-4 md:justify-center md:items-center">
          <button class="bg-white text-black">
            <img src="../src/assets/ic-passenger-download.svg" alt="app" />
            <a href="#">دانلود اپلیکیشن مسافران</a>
          </button>
          <button class="bg-white text-black">
          <img src="../src/assets/ic-pwa.svg" alt="pwa" />
          وب اپلیکیشن مسافران</button>
          <button>
          <img src="../src/assets/ic-driver-join.svg" alt="car" />
          ثبت نام راننده خودرو</button>
          <button>
          <img src="../src/assets/ic-biker-join.svg" alt="bike" />
          ثبت نام راننده موتور</button>
          <button class="md:grid-cols-subgrid md:col-span-2 md:mx-[25%]">
            <img src="../src/assets/ic-driver.svg" alt="app2" />
            دانلود اپلیکیشن رانندگان
          </button>
        </div>
      </div>
      <div
        class={`${
          isNavOpen
            ? "bg-white w-full absolute top-0 z-20 border-gray-200 border-t-[1px] md:hidden"
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

export default Banner;
