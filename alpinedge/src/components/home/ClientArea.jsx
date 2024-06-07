import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClientArea = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("clientArea").offsetTop;

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
      id="clientArea"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full 800px:p-8 px-8 bg-white"
    >
      <div className="flex items-center gap-12 flex-col 800px:flex-row-reverse pt-10" id='section9'>
        <div className="flex flex-col gap-4 800px:w-1/2 h-full">
          <h1 className="font-bold text-primary font-montserrat text-xl 800px:text-[1.8rem]">
            Our Client Area
          </h1>
          <p className="800px:text-[1.7rem] font-medium 800px:font-normal text-[17px] leading-7 800px:!leading-[40px] 800px:text-start text-center">
            The space where you succeed. Track your progress through our
            informative dashboard, contact customer support, download your
            certificates and access many more features available in our client
            area. Our technology is{" "}
            <strong>100% built in-house in Austria</strong> . Therefore we are
            not dependent on a third-party technology provider, ensuring our
            traders a smooth and seamless use of our services.
          </p>
          <img
            src="/trader.svg"
            alt="partners image"
            className="w-full mt-2 mb-4"
          />
        </div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          src="/clientAreaLaptop.svg"
          alt="broker stats image"
          className="object-contain 800px:w-1/2 hidden 800px:block "
        />
      </div>
    </motion.div>
  );
};

export default ClientArea;
