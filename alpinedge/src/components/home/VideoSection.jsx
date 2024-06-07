import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("successSlope").offsetTop;

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
  // move to the next section
  const handleScrollToNextSection = () => {
    const section = document.getElementById("section5");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="successSlope"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-center flex-col relative bg-successSlope bg-no-repeat bg-center bg-cover py-10 px-12 1200px:py-24  gap-4 font-montserrat text-white 800px:mt-2"
    >
      <div className="absolute inset-0 bg-black opacity-50 800px:hidden" id='section4'></div> 

      {/* <video
       src="https://res.cloudinary.com/djab9oyj8/video/upload/v1717689820/ALOIS_MAIN_lzsiio.mp4" 
        className="relative 1200px:w-[1200px] 1200px:h-[600px]"
        autoPlay
        loop
        muted
        controls
      ></video> */}

<iframe className="relative 1200px:w-[1200px] 1200px:h-[600px]" src="https://www.videoask.com/f9x0tyz7s" allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" width="100%" height="600px"></iframe>
      <p className="font-medium 1200px:text-xl text-[12px] 1200px:block hidden underline text-white absolute bottom-2 1200px:bottom-10 1200px:right-16 cursor-pointer right-11" onClick={handleScrollToNextSection}>Skip</p>
      <p className="font-medium 1200px:text-xl text-[8px] 1200px:hidden block underline text-white absolute bottom-3 1200px:bottom-10 1200px:right-16 cursor-pointer right-11"  onClick={handleScrollToNextSection}>Skip-Continue With Site</p>
     {/* <iframe src="https://www.videoask.com/f9x0tyz7s" className="relative 1200px:w-[1200px]"></iframe> */}
    </motion.div>
    
  );
};

export default VideoSection;
