import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ClimateArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("climateArea").offsetTop;

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
      id="climateArea"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center flex-col bg-climateBg bg-cover bg-no-repeat md:py-16 py-10 px-3  gap-4 font-montserrat text-white"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://i.ibb.co/KqXLDF8/Blue-Modern-Limitless-Technology-Company-Logo-4-1.png"
          alt="stripe climate image"
        />
        <h1 className="font-bold text-3xl uppercase text-white">
          Stripe Climate
        </h1>
      </div>

      <p className="text-lg text-center max-w-[900px]">
        As advocates for preserving our natural surroundings, AlpinEdge
        partnered with Stripe Climate to take tangible steps toward reducing CO2
        emissions. With every transaction processed through our platform, a
        portion of the proceeds is allocated to innovative carbon removal
        projects.
      </p>
      <p className="text-lg text-center max-w-[900px]">
        Our commitment to environmental stewardship extends beyond business
        operations; it&apos;s a reflection of our values and responsibility to
        future generations.
      </p>
      <h1 className="font-bold text-xl uppercase text-white text-center">
        Explore our partnership with Stripe Climate here.{" "}
      </h1>
    </motion.div>
  );
};

export default ClimateArea;
