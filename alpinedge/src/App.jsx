import "./App.css";
import "./css/Loader.css";
import CookiePolicy from "./pages/CookiePolicy";
import HomePage from "./pages/HomePage";
import Imprint from "./pages/Imprint";
import LoaderPage from "./pages/LoaderPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Subpage4 from "./components/Subpage4/Subpage4";
import HomeLayout from "./utils/layouts/HomeLayout";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import AboutUs from "./components/Subpage4/AboutUs";
import FaqPage from "./pages/FaqPage";
import Trust from "./pages/Trust";
import ClientArea from "./components/home/ClientArea";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route element={<HomePage />} index />
a
          <Route path="/site/privacy-policy" element={<PrivacyPolicy />} index />
          <Route element={<CookiePolicy />} path="/site/cookie-policy" />
          <Route element={<Imprint />} path="imprint" />
          <Route element={<Subpage4 />} path="landing" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<FaqPage />} path="/faq" />
          <Route element={<Trust />} path="/trust" />
          <Route element={<ClientArea />} path="/client-area" />
        </Route>
        <Route element={<CreateAccount />} path="/create-account" />
      </Routes>
    </>
  );
}

export default App;
