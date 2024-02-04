import { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "./Header";
import TapsiService from "../tapsi-service/TapsiService";
import Content from "../content/Content";

function Home() {
  // for changing heroicons and showing drop down navbar
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavbar = () => {
    setIsNavOpen((is) => !is);
  };
  return (
    <div>
      <Header isNavOpen={isNavOpen} handleNavbar={handleNavbar} class="sticky top-0"/>
      <Banner isNavOpen={isNavOpen}/>
      <TapsiService/>
      <Content/>
    </div>
  );
}

export default Home;
