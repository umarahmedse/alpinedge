import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OurBrooker = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("ourBrooker").offsetTop;

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
      id="ourBrooker"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full p-8 bg-white"
    >
      <div className="800px:flex items-center justify-between gap-2 flex-col 800px:flex-row  pb-2" id='section7'>
        <div className="flex flex-col gap-3 md:gap-6 800px:w-1/2 h-full pb-5">
          <h1 className="font-bold  text-primary font-montserrat text-[16px] 800px:text-4xl 800px:text-[1.8rem]">
            Our Broker
          </h1>
          <p className="800px:text-[1.7rem] 800px:w-[85%] md:!leading-[40px] text-sm md:text-start text-center">
  We are <strong>exclusively</strong> partnering with <strong>ActivTrades</strong>, a supreme retail trading brokerage <strong>regulated</strong> and <strong>licenced</strong> in multiple jurisdictions and based in the UK. Known for a supreme network of <strong>T1-Liquidity</strong> Providers and <strong>fairest</strong> possible <strong>execution</strong> only (no re-quotes), our broker provides our traders <strong>demo accounts</strong> with <strong>virtual capital allocation</strong> throughout all phases of your trading with AlpinEdge!
</p>

        </div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          src="/brooker1.png"
          alt="broker stats image"
          className="object-contain 800px:w-1/2"
        />
      </div>
    </motion.div>
  );
};

export default OurBrooker;
