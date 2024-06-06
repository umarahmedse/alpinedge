import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import sikers from "../../../public/sikers.png";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const Hero = () => {
  const bgRef = useRef(null);
  const sectionIds = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "alpinedgeTraders",
    "alpineCompanions",
    "assistantArea",
    "climateArea",
    "successSlope",
    "joinUsNow",
  ];
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

  const getCurrentSectionIndex = () => {
    const viewportHeight = window.innerHeight;
    let closestSectionIndex = -1;
    let closestDistance = Infinity;

    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportHeight / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSectionIndex = index;
        }
      }
    });

    return closestSectionIndex;
  };

  const handleArrowUpClick = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  };

  const handleArrowDownClick = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sectionIds.length - 1) {
      scrollToSection(currentIndex + 1);
    } else {
    }
  };

  const handleDoubleArrowUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDoubleArrowDownClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // handleScrollToSpecificSection
  const handleScrollToSpecificSection = () => {
    const section = document.getElementById("section2");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={bgRef}
      id="section1"
     className="relative h-[80vh] 800px:h-[120vh] w-full bg-cover bg-heroBg bg-no-repeat bg-center flex items-center gap-24 800px:gap-52 flex-col"
    >
      <div className="flex items-center flex-col ">
        <img
          src="/logo.webp"
          alt="logo image"
          className="800px:w-[270px] w-[100px] mb-4"
        />
        {/* for desktop heading */}
        <h1
          style={{
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          }}
          className="text-primary 800px:block hidden Mokoto uppercase text-[5rem]  font-bold leading-none mt-2 800px:mt-0"
        >
          Alpinedge
        </h1>
        {/* for mobile heading */}
        <h1  style={{
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          }} className="text-primary block 800px:hidden nosifer-regular uppercase text-[2rem] font-bold leading-none mt-2 800px:mt-0">
          Alpinedge
        </h1>
        <h2
          className="text-white font-montserrat capitalize 800px:text-[2.5rem] text-[1.6rem] font-bold leading-none mt-3"
          style={{
            letterSpacing: "-2px",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          }}
        >
          Slope To Success
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4 absolute bottom-20 700px:bottom-6 ">
        <motion.button
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="px-10 py-4  uppercase 800px:text-2xl bg-primary text-white font-[500] rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          onClick={handleScrollToSpecificSection}
        >
          Start Your Alpine journey
        </motion.button>
        <a href={"/create-account"}>
          <motion.button
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="px-8 py-3  uppercase 800px:text-lg 800px:bg-bgPrimary bg-primary/50 text-white 800px:text-primary font-[500] rounded-lg"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            BUY SKI PASS
          </motion.button>
        </a>
      </div>

      {/* Hamburger Button */}
      <Link
        onClick={() => setIsDrawerOpen(true)}
        className="fixed right-0 top-15 z-30 rounded-md md:block hidden"
      >
        {/* <div className="w-6 h-0.5 bg-black mb-1 "></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div> */}
        <img src={sikers} alt="" />
      </Link>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[100px] h-full  z-40 p-4"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 60, 130, 0), rgba(0, 60, 130, 1))",
            }}
          >
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-10 left-0   flex items-center w-full justify-center  text-white "
            >
              <RxCrossCircled size={30} />
            </button>
            <div className="mt-40 flex flex-col justify-center items-center gap-4 my-auto h-1/2">
              <MdKeyboardDoubleArrowUp
                id="double-arrow-up"
                size={40}
                color="#fff"
                className="animate-bounce hover:cursor-pointer"
                onClick={handleDoubleArrowUpClick}
              />
              <MdKeyboardArrowUp
                id="arrow-up"
                size={40}
                color="#fff"
                className="animate-bounce hover:cursor-pointer"
                onClick={handleArrowUpClick}
              />
              <div className="h-32 border-l-2 border-dashed border-white"></div>
              <MdKeyboardArrowDown
                id="arrow-down"
                size={40}
                color="#fff"
                className="animate-bounceReverse hover:cursor-pointer"
                onClick={handleArrowDownClick}
              />
              <MdKeyboardDoubleArrowDown
                id="double-arrow-down"
                size={40}
                color="#fff"
                className="animate-bounceReverse hover:cursor-pointer"
                onClick={handleDoubleArrowDownClick}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
