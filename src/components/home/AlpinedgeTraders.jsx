import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AlpinedgeTraders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const elementTop = document.getElementById("alpinedgeTraders").offsetTop;

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
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      id="alpinedgeTraders"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-white px-2 py-4 relative"
    >
      <img
        src="https://i.ibb.co/c1kBMGs/Mask-group-2.webp"
        alt="bg-img"
        className="absolute left-0"
      />
      <img
        src="https://i.ibb.co/c1kBMGs/Mask-group-2.webp"
        alt="bg-img"
        className="absolute right-0"
      />
      <h1 className="text-primary font-montserrat font-bold text-3xl 800px:text-4xl text-center uppercase mb-32 mt-12">
        hear from our alpinedge traders
      </h1>
      <motion.div
        className="flex items-center w-full flex-col 1000px:flex-row p-4 1000px:p-0 gap-4 1000px:gap-0"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.3 }}
      >
        <motion.div
          className="card 1000px:w-[20%] w-full h-96 bg-base-100 shadow-xl ml-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://i.ibb.co/YybN3f3/aa02354593c6d7988bc84db09e2c8bf3.webp"
            alt="Shoes"
            className="object-cover h-full rounded-2xl"
          />
        </motion.div>
        {/* <video
          controls={false}
          preload="auto"
          muted
          autoPlay
          loop
          className="1000px:w-[60%] w-full"
        >
          <source src="alpinedgeTraders.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src="/alpinedgeTraders.png" alt="" className="1000px:w-[60%] w-full" />
        <motion.div
          className="card 1000px:w-[20%] w-full h-96 bg-base-100 shadow-xl mr-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://i.ibb.co/p3CHRkB/Rectangle-6.webp"
            alt="Shoes"
            className="object-cover h-full rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AlpinedgeTraders;
