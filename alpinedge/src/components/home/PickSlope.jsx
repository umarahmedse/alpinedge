import React, { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Lottie from "react-lottie";
import slope1 from "../../../animation/mountain.json";
import slope2 from "../../../animation/mountain2.json";
import slope3 from "../../../animation/mountain.json";
import { IoMdEye } from "react-icons/io";
import priceTag from "../../../public/PriceTag.png";

const PickSlope = () => {
  const lotties = [slope1, slope2, slope3];
  const [currentLottieIndex, setCurrentLottieIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentLottieIndex((prevIndex) =>
      prevIndex === 0 ? lotties.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentLottieIndex((prevIndex) =>
      prevIndex === lotties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotties[currentLottieIndex],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="relative bg-bgPrimary w-full py-14  800px:py-8  font-montserrat"
      id="section6"
    >
      <h1 className="mx-auto w-fit text-3xl 800px:text-4xl text-primary font-bold font-montserrat">
        Pick Your Slope
      </h1>
      <div className="w-full flex justify-center">
        <Lottie
          options={defaultOptions}
          height={"md:600px"}
          width={"md:600px"}
        />
      </div>
      <div className="w-full flex flex-col items-center py-4 px-3">
        <div className="flex items-center  w-full 1000px:w-1/2 mx-auto justify-between">
          <div
            className="h-[40px] w-[40px] border-2 border-primary  800px:w-[50px] 800px:h-[50px] rounded-full flex items-center justify-center  text-primary hover:text-white hover:border-white hover:bg-primary hover:cursor-pointer"
            onClick={handleLeftArrowClick}
          >
            <IoMdArrowBack className="800px:w-[100px] 800px:h-[100px] h-[50px] w-[50px]   " />
          </div>
          <h1 className="text-xl  100px:text-[16px] 400px:text-xl 800px:text-2xl">
            Tap arrow to change
          </h1>
          <div
            className="h-[40px] w-[40px] border-2 border-primary 800px:w-[50px] 800px:h-[50px]  rounded-full flex items-center justify-center text-primary hover:text-white hover:border-white hover:bg-primary hover:cursor-pointer"
            onClick={handleRightArrowClick}
          >
            <IoMdArrowForward className=" 800px:w-[100px] 800px:h-[100px] h-[50px] w-[50px]  " />
          </div>
        </div>
        <h1 className="mx-auto w-fit text-2xl 800px:text-4xl text-primary font-bold font-montserrat mt-12 uppercase">
          Your Ride
        </h1>
        <div className="800px:mt-8 mt-4 border-4 flex justify-between  border-primary w-full 1000px:w-1/2 relative rounded-3xl py-2 px-6 ">
          <p className=" text-start uppercase font-semibold md:tracking-[0.5rem]">
            {" "}
            BLACK Slope- Standard
          </p>
          <div className="flex gap-1 justify-between items-center ">
            <p
              className="800px:block hidden font-montserrat font-semibold cursor-pointer"
              style={{ color: "rgba(0, 77, 153, 1)" }}
            >
              View
            </p>
            <IoMdEye
              className="text-2xl cursor-pointer"
              style={{ color: "rgba(0, 77, 153, 1)" }}
            />
          </div>
        </div>
        <div className="flex items-center  800px:justify-between w-full 1000px:w-1/2  py-4 800px:gap-12  gap-2 ">
          <div className="flex items-center justify-between gap-2 w-full text-center ">
            <input
              type="checkbox"
              // id="react-option-1"
              value=""
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="react-option-1"
              className=" text-center   items-center text-[12px] 1000px:text-[16px] justify-between w-full py-2  text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary"
            >
              SLALOM
            </label>
            <input
              type="checkbox"
              id="react-option-2"
              value=""
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="react-option-2"
              className=" items-center text-[12px] 1000px:text-[16px]  justify-between w-full py-2  text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary"
            >
              FREESTYLE
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              id="react-option-3"
              value=""
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="react-option-3"
              className="inline-flex items-center text-[12px] 1000px:text-[16px]  justify-between w-full py-2 md:px-4 px-2 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary"
            >
              USD
            </label>
            <input
              type="checkbox"
              id="react-option-4"
              value=""
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="react-option-4"
              className="inline-flex items-center text-[12px] 1000px:text-[16px]  justify-between w-full py-2 md:px-4 px-2 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary"
            >
              EUR
            </label>
            <input
              type="checkbox"
              id="react-option-5"
              value=""
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="react-option-5"
              className="inline-flex items-center text-[12px] 1000px:text-[16px]  justify-between w-full py-2 md:px-4 px-2 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary"
            >
              GBP
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 h-[150px] mt-8">
          <div className="relative">
            <p className="absolute text-4xl 200px:top-6 200px:right-6 200px:text-3xl md:text-6xl text-black font-bold 400px:top-9 md:top-14 400px:right-6 md:right-12">
              $356.00
            </p>
            <img src={priceTag} alt="" />
          </div>
          <div className="flex justify-center items-center text-4xl font-bold -translate-y-[20px]">
            <span className="line-through text-black decoration-red-500">
              ($391.60)
            </span>
          </div>
        </div>

        <button className="px-8 py-3 uppercase 800px:text-xl bg-primary font-bold text-white rounded-lg">
          Let's Ride
        </button>
      </div>
    </div>
  );
};

export default PickSlope;
