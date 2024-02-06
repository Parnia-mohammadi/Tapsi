import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function AppLayer({isNavOpen, handleNavbar}) {

  return (
    <div>
      <Header
        isNavOpen={isNavOpen}
        handleNavbar={handleNavbar}
      />
      <Outlet />
    </div>
  );
}

export default AppLayer;
