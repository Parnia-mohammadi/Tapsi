import Header from "./Header";

function Home() {
  return (
    <div>
      <Header class="sticky"/>
      <div class="relative">
        <img
          src="../src/assets/banner.jpg"
          alt="banner of tapsi"
          class="h-[74vh] w-full object-cover z-0"
        />
        <img src="../assets/tapsi-app.jpg" alt="tapsiApp" class="w-80 h-auto" />
        <img src="../assets/svg-sprite.svg" alt="sth" />
      </div>
    </div>
  );
}

export default Home;
