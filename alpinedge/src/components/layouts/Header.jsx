import { RxHamburgerMenu } from "react-icons/rx";
import { navBarSocialData } from "../../data/navbarData";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-5 font-montserrat bg-bgPrimary">
      <div className="hidden 800px:flex items-center gap-2">
        {navBarSocialData.map((item, index) => (
          <a
            href={item.link}
            className="p-2  border-primary border rounded-full flex items-center justify-center "
            key={index + 0.02 * 2}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <Link
          to={"/login"}
          className="px-8 py-2 uppercase text-md bg-primary 800px:block hidden font-bold text-white rounded-lg"
        >
          Client Area
        </Link>
        <Link
          to={"/login"}
          className="800px:px-8 py-2 800px:hidden block uppercase md:text-md bg-primary text-[8px] px-2 font-bold text-white rounded-lg"
        >
          Client Area
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-2 bg-transparent rounded-lg flex items-center justify-center"
          >
            <HiDotsHorizontal size={40} color="#004D99" stroke="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52 z-40"
          >
            <li className="transition-all">
              <a href="/about-us" className="text-black hover:underline hover:text-blue-600">
                About Us
              </a>
            </li>
            <li className="transition-all">
              <a href="/faq" className="text-black hover:underline hover:text-blue-600">
                FAQ
              </a>
            </li>
            <li className="transition-all">
              <Link to="/trust" className="text-black hover:underline hover:text-blue-600">
                Trust
              </Link>
            </li>
            {navBarSocialData.map((item, index) => (
              <li key={index + 0.002 * 2} className="800px:hidden">
                <a href={item.link} className="" key={index + 0.02 * 2}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
