import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
