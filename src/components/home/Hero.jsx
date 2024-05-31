import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.scrollY;
        bgRef.current.style.backgroundPositionY = `${-scrollPosition / 2}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="800px:h-[120vh] w-full bg-heroBg bg-cover bg-no-repeat flex items-center gap-24 800px:gap-52 flex-col"
    >
      <div className="flex items-center flex-col">
        <img src="/logo.webp" alt=" logo image" className="w-[250px] " />
        <h1 className="text-primary font-montserrat uppercase 800px:text-[6rem] text-[2rem] font-bold leading-none mt-2 800px:mt-0">
          Alpinedge
        </h1>
        <h2
          className="text-white font-montserrat capitalize 800px:text-[2rem] text-[1rem] font-bold leading-none mt-2 800px:mt-0"
          style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
        >
          Slope To Success
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <motion.button
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="px-8 py-3 uppercase 800px:text-lg bg-primary text-white font-[500] rounded-lg"
        >
          Start Your Alpine journey
        </motion.button>
        <motion.button
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-8 py-3 uppercase 800px:text-lg 800px:bg-bgPrimary bg-primary/50 text-white 800px:text-primary font-[500] rounded-lg"
        >
          Coming Soon
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
