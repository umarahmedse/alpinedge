import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VscVerifiedFilled } from "react-icons/vsc";
import { regulatedData } from "../../data/regulatedData";
import mobile_and_laptop from "/mobile_and_laptop.svg"
const Regulated = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("regulatedArea").offsetTop;

      if (top > elementTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="regulatedArea"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full 800px:p-8 bg-white"
    >
      <div className="flex flex-col gap-6 w-full h-full mb-4 px-6" id='section8'>
        <h1 className="font-bold text-primary font-montserrat text-xl 800px:text-[1.8rem]">
          FOUR TIMES REGULATED & LICENCED{" "}
        </h1>
        <div className="flex items-center flex-wrap justify-between gap-2 mb-3">
          <div className="flex md:text-[22px] text-sm   md:gap-2  gap-1 items-center ">
            <VscVerifiedFilled size={20} fill="#004D99" />
            <p>EU-Onshore (Portugal)</p>
          </div>
          <div className="flex items-center md:gap-2  gap-1 md:text-[22px] text-sm ">
            <VscVerifiedFilled size={20} fill="#004D99" />
            <p>UK-Onshore (England)</p>
          </div>
          <div className="flex items-center md:gap-2  gap-1 md:text-[22px] text-sm ">
            <VscVerifiedFilled size={20} fill="#004D99" />
            <p>AMER-Onshore (Brasil)</p>
          </div>
          <div className="flex items-center md:gap-2  gap-1 md:text-[22px] text-sm ">
            <VscVerifiedFilled size={20} fill="#004D99" />
            <p>AMER-Offshore (Bahamas)</p>
          </div>
        </div>
      </div>
     
      <div className="flex items-center justify-between  gap-2 flex-col 800px:flex-row">
        <div className="flex items-center justify-between px-6 gap-4 800px:w-2/3 flex-wrap">
          {regulatedData.map((item, index) => (
            <div className="flex items-center gap-2">
              {item.icon}
              <h1 className="md:text-lg text-sm">{item.title}</h1>
            </div>
          ))}
        </div>
         {/* mobile_and_laptop image*/}
      <div className="flex justify-center ">
        <img src={mobile_and_laptop} alt="mobile_and_laptop" className="w-full block 800px:hidden" />
      </div>
      {/* image */}
      
        <div className="1000px:flex items-center gap-4 justify-center md:flex-wrap  tracking-tight overflow-auto  hidden">
          <img
            src="/fca.svg"
            alt="partnet-logo"
            className="800px:w-[190px] 800px:h-[50px] w-[50px] h-[50px]"
          />
          <img
            src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/devreach/partners/activ-trades.png?Status=Temp&sfvrsn=3e489568_2"
            alt="partnet-logo"
            className="800px:w-[200px] 800px:h-[80px]"
          />
          <img
            src="https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/LG/cmvm_logo_v2.png"
            alt="partnet-logo"
            className="800px:w-[200px]"
          />
          <img
            src="https://scb.gov.bs/wp-content/uploads/2019/02/scb-logo1-2.png"
            alt="partnet-logo"
            className="800px:w-[200px] 800px:h-[80px]"
          />
        </div>
        {/* for mobile i seprate this logos section because of responsiveness issues */}
        <div className="w-full px-3 flex gap-1 items-center 800px:justify-between flex-wrap tracking-tight overflow-hidden 1000px:hidden ">
          <img
            src="/fca.svg"
            alt="partnet-logo"
            className=""
          />
          <img
            src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/devreach/partners/activ-trades.png?Status=Temp&sfvrsn=3e489568_2"
            alt="partnet-logo"
            className="w-[150px] h-[80px]"
          />
        
        </div>
        {/* second two logos dev */}
        <div className="flex px-3 items-center w-full gap-2  800px:flex-wrap overflow-hidden tracking-tight 1000px:hidden justify-between">
          <img
            src="/cmvm.PNG"
            alt="partnet-logo"
            className="w-[200px] h-[70px]"
          />
          <img
            src="https://scb.gov.bs/wp-content/uploads/2019/02/scb-logo1-2.png"
            alt="partnet-logo"
            className="w-[150px] h-[50px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Regulated;
