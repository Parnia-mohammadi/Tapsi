import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function AppLayer({isNavOpen, handleNavbar}) {

  return (
    <div>
      <Header
        isNavOpen={isNavOpen}
        handleNavbar={handleNavbar}
      />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default AppLayer;
