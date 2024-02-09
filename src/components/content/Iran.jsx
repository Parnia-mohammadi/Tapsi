import { iranData } from "../../Data/IranData";

function Iran() {
  return (
    <div class="hidden md:block py-8 mb-0 w-full z-0 bg-[url(../src/assets/map-back.svg)] 
    bg-contain bg-[#f8f8f9] bg-no-repeat">
      <p class="pt-8 px-[10%] mb-8 text-4xl font-bold z-10">تپسی در ایران</p>
      <div class="px-[10%] pb-8 grid grid-flow-row grid-cols-7 lg:grid-cols-8 gap-x-8 gap-y-4 z-10">
        {iranData.map((item) => {
          return (
            <div>
              <p class="text-lg lg:text-xl">{item[0]}</p>
              <p class="text-sm lg:text-base">{item[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Iran;
