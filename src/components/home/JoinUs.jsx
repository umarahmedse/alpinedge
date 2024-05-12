import { joinUsSocials } from "../../data/navbarData";

const JoinUs = () => {
  return (
    <div className="flex items-center flex-col p-24 gap-4 font-montserrat bg-climateBg bg-cover bg-no-repeat text-white">
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
  );
};

export default JoinUs;
