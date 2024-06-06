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

  return (
    <motion.div
      id="successSlope"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-center flex-col relative bg-successSlope bg-no-repeat bg-center bg-cover py-7 px-12 1200px:p-16 gap-4 font-montserrat text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50" id='section4'></div> 

      <video
        src="https://res.cloudinary.com/djab9oyj8/video/upload/v1717438389/t0dfjjmqax2lggrxsho4.mp4"
        className="relative 1200px:w-[1200px]"
        autoPlay
        loop
        muted
        controls
      ></video>
    </motion.div>
    
  );
};

export default VideoSection;