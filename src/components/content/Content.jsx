import { contentData } from "../../Data/ContentData";
import Benefits from "./Benefits";
import BlogNews from "./BlogNews";
import Parallax from "./Parallax";

function Content() {
  return (
    <div>
      <ContentFile data={contentData}>
        <div class="mt-8 mb-4">
          <a href="#" class="text-orange-500 text-lg">
            اطلاعات بیشتر سرویس سازمانی
          </a>
          <img
            src="../src/assets/ic-left-arrow-orange.svg"
            alt="arrow"
            class="inline-block"
          />
        </div>
      </ContentFile>
      <Parallax/>
      <Benefits/>
      <BlogNews/>
    </div>
  );
}
export default Content;

function ContentFile({ data, children }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.key}
            class={`flex ${
              item.key == 1 ? "md:flex-row-reverse mt-0 pb-[10%]" : "md:flex-row mb-0 pt-[10%] pb-[8%] "
            } flex-col gap-x-20 items-center px-[6%] md:px-[10%] md:justify-between lg:items-start"`}
          >
            <div class="md:w-1/2">
              <p class="text-2xl font-bold mb-8 md:text-4xl">{item.title}</p>
              <p class="text-base text-[#333] text-justify md:text-lg lg:text-lg">
                {item.text}
              </p>
              {item.key == 0 ? children : null}
              <button class={`btn-primary ${item.key == 1 ? "mt-8" : "mt-0"} `}>
                {item.button}
              </button>
            </div>
            <div class="w-full h-[60vh] mb-0 md:h-[70vh]  my-8 md:my-0 md:w-[45%] relative">
            <img
                src={item.imgUrl}
                alt={item.title}
                class={`w-full max-h-full absolute top-1/2 ${item.key==0?"right-8 md:right-0":""} -translate-y-1/2`}
            />
            </div>
          </div>
        );
      })}
    </div>
  );
}
function ContentBanner(){
return(
    <div>
        ContentBanner
    </div>
);
}
