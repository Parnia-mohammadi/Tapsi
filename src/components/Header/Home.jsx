import Banner from "../Banner/Banner";
import TapsiService from "../tapsi-service/TapsiService";
import Content from "../content/Content";

function Home() {
  return (
    <div>
      <Banner/>
      <TapsiService/>
      <Content/>
    </div>
  );
}

export default Home;
