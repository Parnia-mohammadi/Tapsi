import Header from "./Header";

function Home() {
  return (
    <div>
      <Header class="sticky"/>
      <div>
        <img
          src="../src/assets/banner.jpg"
          alt="banner of tapsi"
          class="h-[74vh] w-full bg-cover"
        />
      </div>
    </div>
  );
}

export default Home;
