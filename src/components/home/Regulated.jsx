import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VscVerifiedFilled } from "react-icons/vsc";
import {regulatedData} from "../../data/regulatedData"
const Regulated = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top = window.pageYOffset + window.innerHeight;
            const elementTop = document.getElementById("regulatedArea").offsetTop;

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
            id="regulatedArea"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full p-8 bg-white"
        >
          <div className="flex flex-col gap-6 w-full h-full mb-4">
                    <h1 className="font-bold text-primary font-montserrat text-xl 800px:text-[1.8rem]">
                        FOUR TIMES REGULATED & LICENCED          </h1>
                    <div className="flex items-center justify-between">
                        <div className="flex md:text-[16px] text-[10px]  md:gap-2  gap-1 items-center ">
                            <VscVerifiedFilled size={30} fill="#004D99" />
                            <p>EU-Onshore (Portugal)</p>

                        </div>
                        <div className="flex items-center md:gap-2  gap-1 md:text-[16px] text-[10px]">
                            <VscVerifiedFilled size={30} fill="#004D99" />
                            <p>UK-Onshore (England)</p>

                        </div>
                        <div className="flex items-center md:gap-2  gap-1 md:text-[16px] text-[10px]">
                            <VscVerifiedFilled size={30} fill="#004D99" />
                            <p>AMER-Onshore (Brasil)</p>

                        </div>
                        <div className="flex items-center md:gap-2  gap-1 md:text-[16px] text-[10px]">
                            <VscVerifiedFilled size={30} fill="#004D99" />
                            <p>AMER-Offshore (Bahamas)</p>

                        </div>
                    </div>

                </div>
                  <div className="flex items-center justify-between gap-2 flex-col 800px:flex-row ">
                <div className="flex items-center justify-between gap-4 800px:w-2/3 flex-wrap">
                    {regulatedData.map((item,index)=>(
                        <div className="flex items-center gap-2">
                            {item.icon}
                            <h1 className="md:text-lg text-sm">{item.title}</h1>
                        </div>
                    ))}
                </div>
<div className="flex items-center justify-center flex-wrap tracking-tight ">
    <img src="https://i.ibb.co/746BW0k/attachment-7.png" alt="partnet-logo" className="w-[200px] h-[80px]" />
    <img src="https://i.ibb.co/ZfbRxL8/Activ-Trades-Logo-1024x427.webp" alt="partnet-logo" className="w-[200px] h-[80px]" />
    <img src="https://svgshare.com/i/16jh.svg" alt="partnet-logo" className="w-[200px]" />
    <img src="https://i.ibb.co/drSKvVP/scb-logo1-2.png" alt="partnet-logo" className="w-[200px] h-[80px]" />

</div>
            </div>
        </motion.div>
    );
};

export default Regulated;
