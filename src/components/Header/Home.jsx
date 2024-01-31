import { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "./Header";

function Home() {
  // for changing heroicons and showing drop down navbar
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavbar = () => {
    setIsNavOpen((is) => !is);
  };
  return (
    <div >
      <Header isNavOpen={isNavOpen} handleNavbar={handleNavbar}/>
      <Banner isNavOpen={isNavOpen}/>
    </div>
  );
}

export default Home;
