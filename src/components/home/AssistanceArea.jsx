import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { faqData } from "../../data/navbarData";
import iceflakesvg from "../../utils/svgs/ice-flase.svg";

const AssistantArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("assistantArea").offsetTop;

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
      id="assistantArea"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-bgPrimary 1000px:py-12 1000px:pl-8 font-montserrat relative"
    >
      <div className="bg-white 1000px:rounded-l-full p-2 1000px:py-6 z-20">
        <div className="flex items-center gap-2 flex-wrap 800px:flex-nowrap">
          <div className="flex  flex-col 1000px:py-12 1000px:pl-32 p-4 gap-8 w-full 800px:w-1/2">
            <h1 className="font-bold text-3xl text-center uppercase text-primary font-montserrat">
              new to alpinedge?
            </h1>
            <div className="flex flex-col gap-2">
              {faqData.map((item, index) => (
                <div
                  className="collapse collapse-plus bg-base-200 text-sm"
                  key={index + 0.0023 * 2}
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-sm font-medium">
                    {item.question}{" "}
                  </div>
                  <div className="collapse-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex  flex-col md:text-start text-center p-4 gap-2 w-full 800px:w-1/2">
            <h1 className="font-bold text-xl md:text-3xl uppercase text-primary font-montserrat">
              Need assistance?{" "}
            </h1>
            <h1 className="font-bold text-[16px] md:text-2xl uppercase text-primary font-montserrat">
              Ask Alois, your personal ski guide{" "}
            </h1>
            <img
              src="/skaterfull.webp"
              alt="skater image"
              className="max-w-[500px]"
            />
          </div>
        </div>
      </div>
      <motion.img
        src={iceflakesvg}
        alt="ice flakes"
        className="absolute -left-10 -top-10 w-[300px] h-[300px]"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default AssistantArea;
