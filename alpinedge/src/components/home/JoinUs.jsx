import { joinUsSocials } from "../../data/navbarData";

const JoinUs = () => {
  return (
    <>
      <div
        id="joinUsNow"
        className="md:flex items-center flex-col  hidden  p-10 relative gap-4 font-montserrat w-full  h-[300px] text-white"
      >
        <img
          src={"/joinUsBg.png"}
          alt="bg-img"
          className="w-full h-full absolute -top-12 bottom-0 left-0 right-0 "
        />
        <div className="absolute w-full md:flex justify-center items-center flex-col pb-20 gap-3  hidden top-0 bottom-0 left-0 right-0">
          <h1 className="text-3xl uppercase font-bold">
            <span className="text-[42px]">J</span>oin Us
          </h1>
          <div className="flex items-center gap-2">
            {joinUsSocials.map((item, index) => (
              <a
                href={item.link}
                className="p-2  border-white border rounded-full flex items-center justify-center "
                key={index + 0.02 * 2}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        id="joinUsNow"
        className="flex items-center md:hidden flex-col 800px:p-24 p-10 gap-4 font-montserrat bg-climateBg bg-cover bg-no-repeat text-white"
      >
        <h1 className="text-3xl uppercase font-bold">
          <span className="text-[42px]">J</span>oin Us
        </h1>
        <div className="flex items-center gap-2">
          {joinUsSocials.map((item, index) => (
            <a
              href={item.link}
              className="p-2  border-white border rounded-full flex items-center justify-center "
              key={index + 0.02 * 2}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUs;
