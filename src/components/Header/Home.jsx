import { useState } from "react";
import Banner from "../Banner/Banner";
import TapsiService from "../tapsi-service/TapsiService";
import Content from "../content/Content";

function Home({isNavOpen}) {
  return (
    <div>
      <Banner isNavOpen={isNavOpen}/>
      <TapsiService/>
      <Content/>
    </div>
  );
}

export default Home;
