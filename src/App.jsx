import "./index.css";
import Home from "./components/Header/Home";
import Video from "./components/Header/Video";
import Contact from "./components/Header/Contact";
// import Investors from "./components/Header/Investors";
// import Pack from "./components/Header/Pack";
import Carears from "./components/Header/Carears";
import Blog from "./components/Header/Blog";
import { Route, Routes } from "react-router-dom";
import AppLayer from "./components/AppLayer";

function App() {
  return (
    <div class="font-body">
      <Routes>
        <Route path="/" element={<AppLayer/>}>
          <Route index element={<Home />}/>
          <Route path="video" element={<Video />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/investors/landing" element={<Investors />} />
          <Route path="pack" element={<Pack />} /> */}
          <Route path="carears" element={<Carears />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
