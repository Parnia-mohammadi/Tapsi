import { benefits } from "../../Data/BenefitsData";

function Benefits() {
  return (
    <div class="flex flex-col items-center px-[6%] md:flex-row-reverse md:items-start gap-8 mt-20 md:px-[10%]">
      <div class="w-full md:w-[45%]">
        <img
          src="../src/assets/driver.webp"
          alt="tapsi-driver"
          class="w-full rounded-2xl"
        />
      </div>
      <div class="md:w-1/2">
        <p class="text-[22px] md:text-4xl font-bold mb-8">
          مزایای تپسی برای رانندگان تاکسی اینترنتی
        </p>
        <p class="text-sm mb-10 md:text-lg text-[#4D4D4D] md:mb-12">
          رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت
          دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
        </p>
        {benefits.map((item) => {
          return (
            <div key={item.id}>
              <p class="text-[#4D4D4D] text-base md:text-[22px] font-bold inline-block mb-4">
                {item.title}
              </p>
              <span
                class={`${
                  item.id == 3
                    ? "inline text-base md:text-[22px] font-bold"
                    : "hidden"
                }`}
              >
                <a href="https://tapsi.ir/pro" class="text-[#0065dc]">
                  &nbsp;باشگاه رانندگان تپسی
                </a>
              </span>
              <ol class="list-decimal list-inside mb-12">
                {item.benefitList.map((l, index) => {
                  return (
                    <li key={index} class="text-sm md:text-lg text-[#4D4D4D]">
                      {l}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
        <div class="flex flex-col items-center md:flex-row gap-4 mb-12">
          <button class="bg-[#0065dc] btn-primary mt-0 ">
            <a
              href="https://join.tapsi.ir"
              class="text-white text-sm md:text-base font-bold"
            >
              ثبت نام راننده تاکسی آنلاین
            </a>
          </button>
          <button class="bg-[#0065dc] btn-primary mt-0 ">
            <a
              href="https://tapsi.ir/drivers/dl"
              class="text-white text-sm md:text-base font-bold"
            >
              دانلود برنامه تپسی راننده
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
