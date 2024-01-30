function Banner({ isNavOpen }) {
  return (
    <div class="relative">
      <img
        src="../src/assets/banner.jpg"
        alt="banner of tapsi"
        class="h-[74vh] w-full object-cover absolute top-0 z-0"
      />
      <div
        class={`${isNavOpen ? "bg-white w-full absolute top-0 z-10 border-gray-200 border-t-[1px] md:hidden" : "hidden"}`}
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
