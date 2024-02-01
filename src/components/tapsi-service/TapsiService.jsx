import { useRef } from "react";
import { dataService } from "../../Data/Data";
import { useState } from "react";

function TapsiService() {
  return (
    <div class="px-[6%] mt-12 md:px-[10%] md:mt-36 lg:mt-40">
      <p class="text-2xl font-bold mb-8 md:mb-16 md:text-4xl">سرویس های تپسی</p>
      <Service />
    </div>
  );
}

export default TapsiService;

function Service() {
  const [serviceType, setServiceType]=useState(0);
  return (
    <div>
      <div class="w-fulll flex flex-row gap-x-3 items-center mb-8 overflow-x-auto md:gap-x-0 lg:gap-x-8
      ">
        {dataService.map((item) => {
          return (
            <div key={item.id} onClick={()=> setServiceType(item.id)} class="cursor-pointer">
              <img
                src={item.urlSmall}
                alt={item.title}
                class="min-w-20 opacity-40 hover:opacity-100 md:min-w-[6rem] "
              />
              <p class="py-4 text-center text-gray-600">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div class="flex flex-row items-center border-b-2 border-gray-200 pb-20 md:pb-30 lg:items-start">
        <div >
          <p class="mb-4 text-xl font-semibold tracking-tight md:mb-8 md:text-3xl">{dataService[serviceType].title}</p>
          <p class="text-justify text-lg font-thin tracking-tight text-gray-600 md:text-xl md:pl-16 lg:pl-20">
            {dataService[serviceType].content}
          </p>
        </div>
        <img
          src={dataService[serviceType].url}
          alt={dataService[serviceType].title}
          class="hidden w-1/2 md:w-[45%] md:inline-flex"
        />
      </div>
    </div>
  );
}
