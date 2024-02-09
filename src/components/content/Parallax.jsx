import { parallaxData } from "../../Data/ParallaxData";

function Parallax() {
  return (
    <div class="w-full h-[50vh] bg-[url(../src/assets/parallax.jpeg)] bg-cover bg-fixed md:h-[30vh]">
      {/* <img
        src="../src/assets/parallax.jpeg"
        alt="Parallax"
        class="hidden w-full h-full object-cover opacity-7 z-0"
      /> */}
      <div
        class="h-full px-[10%] flex flex-col 
      justify-around items-center justify-items-center z-10 md:flex-row"
      >
        {parallaxData.map((item) => {
          return (
            <div class=" flex flex-row justify-around items-center md:w-1/4">
              <div key={item.id} class="group text-white text-center">
                <p class={`text-lg font-bold md:text-xl`}>{item.title}</p>
                <p
                  class={`hidden "text-sm" text-justify tracking-tight px-8 group-hover:block  ${
                    item.id != 1 ? "md:text-sm" : "md:text-base"
                  } lg:text-base `}
                >
                  {item.text}
                </p>
              </div>
              <div
                class={`hidden w-2 h-[50px] bg-white ${
                  item.id == 3 ? "" : "md:block"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Parallax;
