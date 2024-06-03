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
      className="w-full flex items-center justify-center flex-col bg-successSlope bg-no-repeat bg-cover p-16 gap-4 font-montserrat text-white"
    >
      <video
        src="https://res.cloudinary.com/djab9oyj8/video/upload/v1717438389/t0dfjjmqax2lggrxsho4.mp4"
        className=" 1200px:w-[1200px] w-[350px]"
        autoPlay
        loop
        muted
      ></video>
    </motion.div>
  );
};

export default VideoSection;
