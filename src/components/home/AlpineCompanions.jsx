import iceflakesvg from "../../utils/svgs/ice-flase.svg";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AlpineCompanions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("alpineCompanions").offsetTop;

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

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      id="alpineCompanions"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-bgPrimary 1000px:py-12 1000px:pr-8 font-montserrat relative"
    >
      <div className="bg-[#80BFFF] 1000px:rounded-r-full p-2 1000px:py-6">
        <div className="flex items-center gap-2 flex-wrap 800px:flex-nowrap">
          <div className="flex flex-col gap-2 w-full 800px:w-1/2">
            <div className="flex flex-col gap-2 p-4">
              <h1 className="font-bold text-3xl capitalize text-primary font-montserrat">
              Our AlpinEdge Beta Champions              </h1>
              <p className="text-lg">
                Our AlpinEdge Trader Alex H. just received a payout of{" "}
                <span className="text-primary font-bold">$xxx</span> on his{" "}
                <span className="text-primary font-bold">$xxx</span> AlpinEdge
                Account. Well done Alex! (on top he received his initial ski
                pass of <span className="text-primary font-semibold">299€</span>{" "}
                back)
              </p>
            </div>
            <div className="px-8 text-xl flex items-center gap-2">
              <ul className="list-disc">
                <li>
                  Virtual Account Size:{" "}
                  <span className="text-primary font-bold">$50,000.0</span>
                </li>
                <li>
                  Virtual Performance:{" "}
                  <span className="text-primary font-bold">+9.76%</span>
                </li>
                <li>
                  Most Traded:{" "}
                  <span className="text-primary font-bold">EUR/USD</span>
                </li>
                <li>11 Active Days on Account</li>
              </ul>
              <img
                src="/skater.svg"
                alt="skater image "
                className="hidden 1000px:block max-w-[250px]"
              />
            </div>
          </div>
          <div className="flex items-center flex-col gap-2 w-full 800px:w-1/2">
            {" "}
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-4xl capitalize text-primary font-montserrat text-center">
                The finish line <br /> Awaits!{" "}
              </h1>
              <p className="text-2xl text-white text-center max-w-[400px]">
                Join the team of our successful AlpinEdge Traders. If you are
                ready, select your preffered ski pass and become our next
                AlpinEdge Champion!
              </p>
              <div className="flex items-center gap-2">
                <button className="px-8 py-3 uppercase 800px:text-lg bg-primary text-white font-[500] rounded-lg">
                  Buy Challenge{" "}
                </button>
                <button className="px-8 py-3 uppercase 800px:text-lg 800px:bg-bgPrimary bg-primary/20 text-primary font-[500] rounded-lg">
                  Alpinedge Resort{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.img
        src={iceflakesvg}
        alt="ice flakes"
        className="absolute -right-10 -top-10 w-[300px] h-[300px]"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default AlpineCompanions;
