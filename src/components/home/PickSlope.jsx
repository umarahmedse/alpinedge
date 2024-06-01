import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const PickSlope = () => {
    return (
        <div 
            className="relative bg-bgPrimary w-full py-8 font-montserrat"
            style={{
                backgroundImage: `url(/stocksBg.png)`,
                backgroundSize: 'contain',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h1 className="mx-auto w-fit text-4xl text-primary font-bold font-montserrat">Pick Your Slope</h1>
            <img src="/slope1.png" alt="slopes image" className="object-cover w-full" />
            <div className="w-full flex flex-col items-center p-4">
                <div className="flex items-center 1000px:w-1/2 mx-auto justify-between">
                    <div className="border border-2 border-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-primary hover:text-white hover:border-white hover:bg-primary hover:cursor-pointer">
                        <IoMdArrowBack size={40} />
                    </div>
                    <h1 className="text-2xl">Tap arrow to change</h1>
                    <div className="border border-2 border-primary w-[50px] h-[50px] rounded-full flex items-center justify-center text-primary hover:text-white hover:border-white hover:bg-primary hover:cursor-pointer">
                        <IoMdArrowForward size={40} />
                    </div>
                </div>
                <h1 className="mx-auto w-fit text-4xl text-primary font-bold font-montserrat mt-12 uppercase">Your Ride</h1>
                <div className="mt-8 border-4 border-primary 1000px:w-1/2 relative rounded-3xl text-start uppercase py-2 px-6 font-semibold tracking-[0.5rem]">
                    BLACK Slope- Standard
                </div>
                <div className="flex items-center justify-between 1000px:w-1/2 p-4">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="react-option-1" value="" className="hidden peer" required="" />
                        <label htmlFor="react-option-1" className="inline-flex items-center justify-between w-full py-2 px-4 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary">
                            SLALOM
                        </label>
                        <input type="checkbox" id="react-option-2" value="" className="hidden peer" required="" />
                        <label htmlFor="react-option-2" className="inline-flex items-center justify-between w-full py-2 px-4 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary">
                            FREESTYLE
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="react-option-3" value="" className="hidden peer" required="" />
                        <label htmlFor="react-option-3" className="inline-flex items-center justify-between w-full py-2 px-4 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary">
                            USD
                        </label>
                        <input type="checkbox" id="react-option-4" value="" className="hidden peer" required="" />
                        <label htmlFor="react-option-4" className="inline-flex items-center justify-between w-full py-2 px-4 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary">
                            EUR
                        </label>
                        <input type="checkbox" id="react-option-5" value="" className="hidden peer" required="" />
                        <label htmlFor="react-option-5" className="inline-flex items-center justify-between w-full py-2 px-4 text-primary font-semibold bg-[#80BFFF] border-2 border-transparent rounded-xl cursor-pointer peer-checked:border-primary hover:text-white peer-checked:text-gray-600 hover:bg-primary">
                            GBP
                        </label>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 h-[150px]">
                    <div
                        className="bg-white flex justify-center items-center text-4xl font-bold h-[250px] w-[225px]"
                        style={{
                            clipPath: "polygon(7% 40%, 83% 30%, 80% 54%, 10% 58%)",
                        }}
                    >
                        <p className="-translate-y-[10px] -translate-x-[5px]">$356.00</p>
                    </div>
                    <div className="flex justify-center items-center text-4xl font-bold -translate-y-[20px]">
                        <span className="line-through text-black decoration-red-500">($391.60)</span>
                    </div>
                </div>
                <button className="px-8 py-3 uppercase 800px:text-xl bg-primary font-bold text-white rounded-lg">
                    Let&apos;s Ride
                </button>
            </div>
        </div>
    );
};

export default PickSlope;
