import { Link } from "react-router-dom";
import { footerSocialData, joinUsSocials } from "../../data/navbarData";

const Footer = () => {
  const handleScrollToSecondSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="p-2 1000px:px-8 bg-bgPrimary flex flex-col 1000px:flex-row  justify-between">
      <div className="flex flex-col p-2 1000px:p-4 gap-8 font-montserrat 1000px:w-1/4">
        <img
          src="/logo.webp"
          alt="alpinedge logo"
          className="w-[150px] object-cover"
        />
        <div>
          <h1 className="font-bold">Contact Us</h1>
          <p className="text-sm text-black font-bold">support@alpinedge.at</p>
        </div>
        <div className="flex items-start gap-2 flex-col">
          {footerSocialData.map((item, index) => (
            <div className="flex items-center gap-4" key={index + 0.02 * 8}>
              {" "}
              <div
                className="p-2  border-black  border rounded-full flex items-center justify-center "
                key={index + 0.02 * 2}
              >
                {item.icon}
              </div>
              <a href={item.link} className="font-[500] text-black uppercase hover:underline">{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 1000px:w-2/4 ">
        <div className="grid grid-cols-2  gap-8 px-4 pb-6 lg:pb-8 w-full">
          <div className="w-full flex flex-col justify-start ">
            <h2 className="mb-4 text-sm  text-gray-900 uppercase font-bold">
            Quick Links
            </h2>
            <ul className="text-black font-montserrat font-normal gap-2 flex flex-col ">
              <li>
                <a href="/client-area" className=" hover:underline">
                Affiliate Section
                </a>
              </li>
              <li>
                <a href="/faq" className=" hover:underline">
                Scaling Plan
                </a>
              </li>
              <li>
                <a  href={"/faq"} className="hover:underline">
                FAQ
                </a>
              </li>
              <li >
                <a href={"/about-us"} className="hover:underline">
                About Us
                </a>
              </li>
              <li  onClick={()=>{handleScrollToSecondSection("successSlope")}}>
                <a className="hover:underline cursor-pointer">
                Meet Alois
                </a>
              </li>
              <li >
                <a href={"/create-account"}className="hover:underline">
                Client Area
                </a>
              </li>
              <li className="cursor-pointer" onClick={()=>{handleScrollToSecondSection("section6")}}>
                <a  className="hover:underline">
                Product Overview
                </a>
              </li>
              
           
            </ul>
          </div>
          <div className="w-full flex flex-col justify-start relative">
            <h2 className="mb-4 text-sm  text-gray-900 uppercase font-bold">
            Legal
            </h2>
            <ul className="text-black font-montserrat font-normal gap-2 flex flex-col ">
              <li>
                <a href="#" className=" hover:underline">
                Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                Refund Policy
                </a>
              </li>
              <li >
                <a href={"/site/cookie-policy"} className="hover:underline">
                  Cookie Policy{" "}
                </a>
              </li>
              <li>
                <a href={"/site/privacy-policy"}className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li >
                <a href={"#"} className="hover:underline">
                AML / CTF
                </a>
              </li>
             
              
              
             
              
            </ul>
          </div>
         
        </div>
        <img
          src="/footerLogos.svg"
          alt="alpine partners"
          className="hover "
        /> 
        
      </div>
      <div className="flex flex-col items-start gap-4 1000px:w-1/4">
        <h1 className="font-bold">Disclaimer</h1>
        <p className="text-sm">
          All information provided on this site is intended solely for
          educational purposes related href trading on financial markets and does
          not serve in any way as a specific investment recommendation, business
          recommendation, investment opportunity analysis or similar. AlpinEdge
          only provides services of simulated trading and educational hrefols for
          traders.CFDs are complex financial derivatives which carry a high risk
          profile, even in a virtual trading environment. Due href the high risk
          profile of CFDs, a hreftal loss of investment is possible. hreftal loss is
          limited href the program fee paid upfront in this case. Consult with
          your dedicated financial professional, href evaluate if the inherent
          risk profile of these instruments is suitable for you. AlpinEdge does
          not act as a broker or dealer and does not accept any deposits. The
          offered technical solution for the AlpinEdge platforms and data feed
          is powered by third-party liquidity providers. The information on this
          site is not directed at residents in any country or jurisdiction where
          such distribution or use would be contrary href local laws or
          regulations.All trading accounts are demo accounts funded with virtual capital and simulated order execution.
        </p>
      </div>
    </div>
  );
};

export default Footer;
