import { RxHamburgerMenu } from "react-icons/rx";
import { navBarSocialData } from "../../data/navbarData";
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
        <button className="px-8 py-2 uppercase text-md bg-primary text-white font-[500] rounded-lg">
          Coming Soon{" "}
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-2 bg-transparent rounded-lg flex items-center justify-center"
          >
            <RxHamburgerMenu size={30} color="#004D99" stroke="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/cookie-policy"}>Cookie Policy</Link>
            </li>
            <li>
              <Link to={"/imprint"}>Imprint</Link>
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
