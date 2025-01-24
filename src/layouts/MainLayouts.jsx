import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      {/* Dynamic outlet */}
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
