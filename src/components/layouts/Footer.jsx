import { Link } from "react-router-dom";
import { footerSocialData } from "../../data/navbarData";

const Footer = () => {
  return (
    <div className="p-2 1000px:p-8 bg-bgPrimary flex flex-col 1000px:flex-row items-center justify-between">
      <div className="flex flex-col p-2 1000px:p-4 gap-8 font-montserrat 1000px:w-1/4">
        <img
          src="/logo.webp"
          alt="alpinedge logo"
          className="w-[150px] object-cover"
        />
        <div>
          <h1 className="font-bold">Contact Us</h1>
          <p className="text-sm">info@alpinedge.at</p>
        </div>
        <div className="flex items-start gap-2 flex-col">
          {footerSocialData.map((item, index) => (
            <div className="flex items-center gap-4" key={index + 0.02 * 8}>
              {" "}
              <div
                className="p-2  border-primary border rounded-full flex items-center justify-center "
                key={index + 0.02 * 2}
              >
                {item.icon}
              </div>
              <h1 className="font-[500] text-primary">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 1000px:w-2/4">
        <div className="grid grid-cols-2  gap-8 px-4 py-6 lg:py-8 w-full">
          <div className="w-full flex flex-col items-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Company
            </h2>
            <ul className="text-gray-500 font-medium flex flex-col items-center">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <Link to={"/site"} className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </Link>
              <Link to={"/site/cookie-policy"} className="mb-4">
                <a href="#" className="hover:underline">
                  Cookie Policy{" "}
                </a>
              </Link>
              <Link to={"/site/imprint"} className="mb-4">
                <a href="#" className="hover:underline">
                  Imprint
                </a>
              </Link>
            </ul>
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500  font-medium flex flex-col items-center">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="https://i.ibb.co/BfMbk8S/Group-1982248550.webp"
          alt="alpine partners"
        />
      </div>
      <div className="flex flex-col items-start gap-4 1000px:w-1/4">
        <h1 className="font-bold">Disclaimer</h1>
        <p className="text-sm">
          All information provided on this site is intended solely for
          educational purposes related to trading on financial markets and does
          not serve in any way as a specific investment recommendation, business
          recommendation, investment opportunity analysis or similar. AlpinEdge
          only provides services of simulated trading and educational tools for
          traders.CFDs are complex financial derivatives which carry a high risk
          profile, even in a virtual trading environment. Due to the high risk
          profile of CFDs, a total loss of investment is possible. Total loss is
          limited to the program fee paid upfront in this case. Consult with
          your dedicated financial professional, to evaluate if the inherent
          risk profile of these instruments is suitable for you. AlpinEdge does
          not act as a broker or dealer and does not accept any deposits. The
          offered technical solution for the AlpinEdge platforms and data feed
          is powered by third-party liquidity providers. The information on this
          site is not directed at residents in any country or jurisdiction where
          such distribution or use would be contrary to local laws or
          regulations.All trading accounts are live accounts hosted on live
          servers funded with virtual capital and simulated order execution.
        </p>
      </div>
    </div>
  );
};

export default Footer;
