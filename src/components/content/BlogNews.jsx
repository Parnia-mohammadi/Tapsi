import { blogNews } from "../../Data/BlogNewsData";

function BlogNews() {
  return (
    <div class="mt-20 px-[6%] md:px-[10%]">
      <p class="text-4xl mb-16 font-bold">تازه ترین های وبلاگ تپسی</p>
      <div class="flex flex-col gap-4 mb-20 justify-between md:flex-row">
        {blogNews.map((item) => {
          return (
            <div
              key={item.id}
              class="flex flex-col p-8 w-1/3 rounded-2xl hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
            <a href={item.url}>
                <img
                src="../src/assets/pakro-cover.jpg"
                alt="pakroTapsi"
                class={`${item.id == 0 ? "block rounded-xl m-4" : "hidden"}`}
              />
              <p class="text-[#333] text-[22px] font-bold mb-4">{item.title}</p>
              <p class="text-[#9b9b9b] text-lg line-clamp-3 text-ellipsis">{item.text}</p>
            </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogNews;
