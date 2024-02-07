// import { ArrowDownIcon } from "@heroicons/react/24/solid";
function Banner() {
  return (
    <div class="relative w-full h-[78vh] box-border">
      <img
        src="../src/assets/banner.jpg"
        alt="banner of tapsi"
        class="h-full w-full object-cover absolute top-0 z-0"
      />
      <div
        class="bg-indigo-950/30 text-white z-10 rounded-2xl px-8 py-[14px] 
      w-[18rem] my-0 absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2
      md:w-120 md:right-[10%] md:translate-x-0"
      >
        <p class="text-3xl md:text-5xl leading-10">تپسی</p>
        <p class="text-lg md:text-2xl leading-10">
          اپلیکیشن درخواست خودرو و پیک
        </p>
        <div
          class="flex flex-col gap-y-4 my-4 *:py-[12px] *:border-white *:border-2 *:rounded-xl 
        [&>*>img]:inline-block [&>*>img]:ml-3 md:*:text-lg md:grid md:grid-cols-2 md:gap-x-4 md:justify-center md:items-center"
        >
          <button class="bg-white text-black">
            <img src="../src/assets/ic-passenger-download.svg" alt="app" />
            <a href="https://tapsi.ir/passengers/dl">دانلود اپلیکیشن مسافران</a>
          </button>
          <button class="bg-white text-black">
            <img src="../src/assets/ic-pwa.svg" alt="pwa" />
            <a href="https://app.tapsi.cab/">وب اپلیکیشن مسافران</a>
          </button>
          <button>
            <img src="../src/assets/ic-driver-join.svg" alt="car" />
            <a href="https://join.tapsi.cab/login">ثبت نام راننده خودرو</a>
          </button>
          <button>
            <img src="../src/assets/ic-biker-join.svg" alt="bike" />
            <a href="https://campaigns.tapsi.ir/biker/join">ثبت نام راننده موتور</a>            
          </button>
          <button class="md:grid-cols-subgrid md:col-span-2 md:mx-[25%]">
            <img src="../src/assets/ic-driver.svg" alt="app2" />
            <a href="https://tapsi.ir/drivers/dl">دانلود اپلیکیشن رانندگان</a>            
          </button>
        </div>
      </div>
      <img
        src="../src/assets/tapsi-app.jpg"
        alt="tapsi-app"
        class="hidden z-10 lg:block w-40 rounded-lg
      absolute left-[15%] -bottom-[10%] shadow-right "
      />
    </div>
  );
}

export default Banner;
