import { footerData, socialLinks } from "../../Data/FooterData";

function Footer() {
  return (
    <div className="bg-black text-white px-[6%]  md:px-[10%]">
      <div
        className="bg-black text-white pt-16 flex flex-col gap-8 lg:gap-20 
    md:flex-row lg:*:w-1/5 "
      >
        <div class="">
          <a href="" class="w-full">
            <img
              src="../src/assets/tapsi-logo-white.svg"
              alt="tapsiLogo"
              class="mb-6 h-8"
            />
          </a>
          <p class="text-xs pb-4 ">اپلیکیشن درخواست خودرو و پیک</p>
          <p class="hidden md:block text-[#acacac] text-xs text-justify leading-relaxed">
            تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.
          </p>
        </div>
        {footerData.map((item) => {
          return (
            <div key={item.id}>
              <p class="text-xl md:text-lg font-bold pb-3 md:pb-4">
                {item.title}
              </p>
              <ul>
                {item.subList.map((l) => {
                  return (
                    <li class="hover:text-[#ff5722] pb-[4px] md:pb-[8px]">
                      <a href={l[1]} class="text-sm">
                        {l[0]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div
        class="flex flex-row justify-between gap-4 lg:gap-10 *:max-w-[20%] md:*:max-w-full md:w-1/3
       my-6 *:rounded-xl *:bg-white *:p-[4px]"
      >
        <div>
          <a href="https://ecunion.ir/verify/tapsi.ir?token=37746495acf0232a5306">
            <img
              src="../src/assets/etehadieh.png"
              alt="etehadiye"
              class="rounded-xl"
            />
          </a>
        </div>
        <div>
          <a href="https://logo.samandehi.ir/Verify.aspx?id=165889&p=rfthgvkadshwmcsimcsipfvl">
            <img
              src="../src/assets/samandehi.png"
              alt="samandehi"
              class=" rounded-xl"
            />
          </a>
        </div>
        <div>
          <a href="https://trustseal.enamad.ir/?id=134202&Code=7jelItGhNaXbhvYrHRN5">
            <img
              src="../src/assets/enamad.png"
              alt="enamad"
              class="rounded-xl"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-4 pb-10 md:w-1/4 lg:w-1/5">
        <p class="hidden md:block">تپسی در شبکه های اجتماعی</p>
        <p class="md:hidden my-4 text-[#acacac] text-xs text-justify">
          تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.
        </p>
        <div class="flex flex-row justify-around">
          <div>
            <a href="https://www.facebook.com/TAPSI.ir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                viewBox="0 0 11 20"
                
              >
                <path
                  fill="#ababab"
                  fill-rule="nonzero"
                  d="M6.393 6.875v-2.5c0-.69.56-1.25 1.25-1.25h1.25V0h-2.5a3.75 3.75 0 0 0-3.75 3.75v3.125h-2.5V10h2.5v10h3.75V10h2.5l1.25-3.125h-3.75z"
                  class="hover:fill-orange-500"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/tapsi_ir/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                class="hover:stroke-orange-500"
              >
                <path
                  fill="#ababab"
                  fill-rule="nonzero"
                  d="M14.464 0a6.25 6.25 0 0 1 6.25 6.25v7.5a6.25 6.25 0 0 1-6.25 6.25h-7.5a6.25 6.25 0 0 1-6.25-6.25v-7.5A6.25 6.25 0 0 1 6.964 0h7.5zm4.375 13.75v-7.5a4.38 4.38 0 0 0-4.375-4.375h-7.5A4.38 4.38 0 0 0 2.59 6.25v7.5a4.38 4.38 0 0 0 4.375 4.375h7.5a4.38 4.38 0 0 0 4.375-4.375zM10.714 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.125A3.13 3.13 0 0 0 13.84 10a3.129 3.129 0 0 0-3.125-3.125A3.129 3.129 0 0 0 7.59 10a3.13 3.13 0 0 0 3.125 3.125zm5.375-7.834a.666.666 0 1 1 0-1.332.666.666 0 0 1 0 1.332z"
                class="hover:fill-orange-500"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/TAPSI_ir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                viewBox="0 0 23 19"
              >
                <path
                  fill="#ababab"
                  fill-rule="nonzero"
                  d="M22.857 2.627a9.77 9.77 0 0 1-2.7.74A4.66 4.66 0 0 0 22.22.777a9.365 9.365 0 0 1-2.972 1.134 4.684 4.684 0 0 0-8.106 3.204c0 .372.032.73.109 1.07-3.896-.19-7.343-2.058-9.659-4.902A4.718 4.718 0 0 0 .95 3.65c0 1.623.836 3.062 2.081 3.895a4.628 4.628 0 0 1-2.117-.577v.051a4.707 4.707 0 0 0 3.755 4.604 4.677 4.677 0 0 1-1.229.155c-.3 0-.603-.018-.887-.08.607 1.855 2.33 3.22 4.378 3.264a9.415 9.415 0 0 1-5.81 1.998c-.384 0-.752-.017-1.121-.064A13.192 13.192 0 0 0 7.189 19c8.622 0 13.337-7.143 13.337-13.334 0-.207-.007-.407-.017-.606a9.348 9.348 0 0 0 2.348-2.433z"
                class="hover:fill-orange-500"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/tap30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.21 37.46" class="fill-[#ababab] hover:fill-orange-500"><title>Asset 25</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="LinkedIn"><rect class="cls-1" x="1.04" y="12.01" width="8.03" height="25.45"/><path class="cls-1" d="M31,11.77c-4.6,0-7.48,2.49-8,4.24V12H14c.12,2.12,0,25.45,0,25.45h9V23.69a5.8,5.8,0,0,1,.2-2.08,4.6,4.6,0,0,1,4.35-3.12c3.13,0,4.56,2.35,4.56,5.8V37.46h9.11V23.31C41.21,15.43,36.73,11.77,31,11.77Z"/><path class="cls-1" d="M4.91,0C1.94,0,0,1.9,0,4.42S1.89,8.83,4.79,8.83h.06c3,0,4.9-2,4.9-4.42S7.87,0,4.91,0Z"/></g></g></g></svg>
            </a>
          </div>
          <div>
            <a href="https://t.me/tapsi_cab">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
    <path fill="#ABABAB" class="hover:fill-orange-500" d="M9.025 12.522l-.38 5.305c.544 0 .78-.232 1.062-.51l2.552-2.418 5.289 3.84c.97.535 1.653.253 1.914-.885L22.934 1.73C23.243.307 22.417-.249 21.472.1L1.068 7.844C-.325 8.38-.304 9.15.83 9.498l5.216 1.609L18.164 3.59c.57-.374 1.089-.167.662.207l-9.801 8.724z"/>
</svg>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
