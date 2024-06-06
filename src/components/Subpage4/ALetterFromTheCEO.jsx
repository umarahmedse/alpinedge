import './CEOLatter.css';
import logo from '../../assets/logo.png';
import ceo from '../../assets/ceo.png';
import ceobg from '../../assets/ceo-bg.png';
import { IoLogoLinkedin } from 'react-icons/io';

const ALetterFromTheCEO = () => {
  return (
    <div className="w-full h-[100svh] relative">
      <img src={ceobg} alt="city" className="w-full h-[100svh] " />
      <div className="triangle rounded-b-xl w-fit md:w-full h-fit p-6 md:p-12 pt-0 absolute top-0 left-0">
        <h1 className="capitalize font-bold text-2xl md:text-5xl text-[#004D99] md:px-12 text-center mt-2">
          A Letter From The CEO
        </h1>
        <img
          src={logo}
          alt="logo"
          className="h-20 md:h-[104px] w-32 md:w-[145px] mx-auto md:mt-2"
        />
        <h2 className="text-black font-bold text-base text-center">
          Welcome to AlpinEdge!
        </h2>
        <p className="text-center text-black w-4/5 md:w-1/2 mt-2 mx-auto text-sm md:text-base">
          As CEO, I'm thrilled to have you join our community. At AlpinEdge,
          we're on a mission to empower traders like you to achieve financial
          success with integrity and innovation.
        </p>
        <p className="text-center text-black w-1/2 mt-2 mx-auto text-sm md:text-base">
          Our commitment to excellence, transparency, and collaboration is
          unwavering. Together, let's reach new heights in trading and beyond.
        </p>
        <img
          src={ceo}
          alt="man"
          className="size-[114px] rounded-full mx-auto mt-4"
        />
        <p className="text-center text-black font-semibold text-base mt-2">
          Maurus Lorenz Mack
        </p>
        <IoLogoLinkedin
          size={26}
          className="text-[#0077b5] cursor-pointer mx-auto"
        />
      </div>
    </div>
  );
};
export default ALetterFromTheCEO;
