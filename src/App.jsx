import "./App.css";
import "./css/Loader.css";
import CookiePolicy from "./pages/CookiePolicy";
import HomePage from "./pages/HomePage";
import Imprint from "./pages/Imprint";
import LoaderPage from "./pages/LoaderPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Subpage4 from "./components/Subpage4/Subpage4"
import HomeLayout from "./utils/layouts/HomeLayout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route element={<HomePage />} index />
          <Route path="privacy-policy" element={<PrivacyPolicy />} index />
          <Route element={<CookiePolicy />} path="cookie-policy" />
          <Route element={<Imprint />} path="imprint" />
          <Route element={<Subpage4 />} path="landing" />

        </Route>
      </Routes>
    </>
  );
}

export default App;