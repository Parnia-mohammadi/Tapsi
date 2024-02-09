import { useState, useEffect, useRef } from "react";
import { dataService } from "../../Data/Data";

function TapsiService() {
  return (
    <div class="px-[6%] mt-12 md:px-[10%] md:mt-30 lg:mt-40">
      <p class="text-2xl font-bold mb-8 md:mb-16 md:text-4xl">سرویس های تپسی</p>
      <Service />
    </div>
  );
}

export default TapsiService;

function Service() {
  const [serviceType, setServiceType] = useState(0);
  const intervalRef = useRef();
  const data =
    serviceType > 6 ? dataService[serviceType - 1] : dataService[serviceType];
  //changing service type
  useEffect(() => {
    if (serviceType > 6) {
      setServiceType(0);
    }
  }, [serviceType]);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setServiceType((id) => id + 1);
    }, 5000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const handleService = (id) => {
    clearInterval(intervalRef.current);
    setServiceType(id);
  };
  return (
    <div>
      <div class="w-fulll flex flex-row gap-x-3 items-center mb-8 overflow-x-auto md:gap-x-0 lg:gap-x-8">
        {dataService.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleService(item.id)}
              class="cursor-pointer"
            >
              <img
                src={item.urlSmall}
                alt={item.title}
                class={`min-w-20 hover:opacity-100 md:min-w-[6rem] 
                ${serviceType == item.id ? "opacity-100" : "opacity-40"}`}
              />
              <p class="py-4 text-center text-[#5E5E5E]">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div class="flex flex-row items-center border-b-2 border-gray-200 pb-16 md:pb-[7rem] lg:items-start">
        <div>
          <p class="mb-4 text-xl text-[#141414] font-semibold tracking-tight md:mb-8 md:text-3xl">
            {data.title}
          </p>
          <p class="text-justify text-lg font-thin tracking-tight text-[#333] md:text-xl md:pl-16 lg:pl-20">
            {data.content}
          </p>
          {serviceType == 3 && (
            <button class="btn-primary">
              <a href="#">آشنایی با موتوپیک</a>
            </button>
          )}
        </div>
        <img
          src={data.url}
          alt={data.title}
          class="hidden w-1/2 md:w-[45%] md:inline-flex"
        />
      </div>
    </div>
  );
}
