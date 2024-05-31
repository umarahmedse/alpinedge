import React from 'react';
import { motion } from 'framer-motion';

// Define the array of slides with numbers
const slides = [
    { percent: 0.66, title: "500 ISP Index", rate: 0.05, value: 15560 },
    { percent: 0.66, title: "S&P ISP Index", rate: 0.05, value: 15560 },
    { percent: 0.66, title: "Bitcoin", rate: 0.05, value: 15560 },
    { percent: 0.66, title: "Etherium", rate: 0.05, value: 15560 },
    { percent: 0.66, title: "Solana & NFT", rate: 0.05, value: 15560 },
];

const CoinSlider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];
    // Define classes for red, blue, and green backgrounds
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500',];
    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className="relative w-full overflow-hidden hidden 1200px:block ">
            {/* <img src="/iceline.png" className='z-10 bg-white' alt="" /> */}
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 mt-4" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-4">
                                <div className={`w-[25px] h-[25px] rounded-full ${randomColor} flex items-center justify-center text-xs text-white font-semibold`}>
                                    {slide.rate * 10000}
                                </div>
                                <h1 className='text-xl'>{slide.title}</h1>
                                <h3>{slide.value}</h3>
                            </div>

                            <div className="flex items-center gap-5">
                                <h1 className="text-4xl text-green-500 font-semibold">{slide.rate}%</h1>
                                <h1 className="text-sm text-green-500 font-semibold">98.70</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CoinSlider;
