import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const Hero = () => {
  const bgRef = useRef(null);
  const sectionIds = ["section1", "section2", "section3", "section5","section6", "section7", "section8", "section9","section10", "section11", "section12", "section13"]; // Add your section IDs here
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.scrollY;
        bgRef.current.style.backgroundPositionY = `${-scrollPosition / 15}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowUpClick = () => {
    const currentIndex = sectionIds.findIndex(id => {
      const section = document.getElementById(id);
      return section && section.getBoundingClientRect().top >= 0;
    });

    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  };

  const handleArrowDownClick = () => {
    const currentIndex = sectionIds.findIndex(id => {
      const section = document.getElementById(id);
      return section && section.getBoundingClientRect().top >= 0;
    });

    if (currentIndex < sectionIds.length - 1) {
      scrollToSection(currentIndex + 1);
    }
  };

  const handleDoubleArrowUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDoubleArrowDownClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div
      ref={bgRef} id="section1"
      className="relative 800px:h-[120vh] w-full bg-heroBg bg-cover overflow-hidden bg-no-repeat bg-center flex items-center gap-24 800px:gap-52 flex-col"
    >
      <div className="flex items-center flex-col ">
        <img src="/logo.webp" alt="logo image" className="800px:w-[250px] w-[100px]" />
        <h1 className="text-primary 800px:block hidden 800px:font-montserrat uppercase 800px:text-[6rem] text-[2rem] font-bold leading-none mt-2 800px:mt-0">
          Alpinedge
        </h1>
        <h1 className="text-primary block 800px:hidden nosifer-regular uppercase text-[2rem] font-bold leading-none mt-2 800px:mt-0">
          Alpinedge
        </h1>
        <h2
          className="text-white font-montserrat capitalize 800px:text-[2rem] text-[1rem] font-bold leading-none mt-0"
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
          className="px-8 py-3 hidden 800px:block uppercase 800px:text-lg bg-primary text-white font-[500] rounded-lg"
        >
          Start Your Alpine journey
        </motion.button>
        <motion.button
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-8 py-3 hidden 800px:block uppercase 800px:text-lg 800px:bg-bgPrimary bg-primary/50 text-white 800px:text-primary font-[500] rounded-lg"
        >
          Coming Soon 
        </motion.button>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="absolute top-4 right-4 z-20 p-2 rounded-md shadow-md md:block hidden"
      >
        <div className="w-6 h-0.5 bg-black mb-1 "></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[100px] h-full bg-blue-600 bg-opacity-60 z-40 p-4"
          >
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
                     <HiDotsHorizontal size={30} />

            </button>
            <div className="mt-40 flex flex-col justify-center items-center gap-4 my-auto h-1/2">
              <MdKeyboardDoubleArrowUp id="double-arrow-up" size={40} color="#fff" className="animate-bounce hover:cursor-pointer" onClick={handleDoubleArrowUpClick} />
              <MdKeyboardArrowUp id="arrow-up" size={40} color="#fff" className="animate-bounce hover:cursor-pointer" onClick={handleArrowUpClick} />
              <div className="h-32 border-l-2 border-dashed border-white"></div>
              <MdKeyboardArrowDown id="arrow-down" size={40} color="#fff" className="animate-bounceReverse hover:cursor-pointer" onClick={handleArrowDownClick} />
              <MdKeyboardDoubleArrowDown id="double-arrow-down" size={40} color="#fff" className="animate-bounceReverse hover:cursor-pointer" onClick={handleDoubleArrowDownClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
