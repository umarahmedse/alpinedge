import { faqData } from "../../data/navbarData";
import iceflakesvg from "../../utils/svgs/ice-flase.svg";
const AssistantArea = () => {
  return (
    <div className="bg-bgPrimary 1000px:py-12 1000px:pl-8 font-montserrat relative">
      <div className="bg-white 1000px:rounded-l-full p-2 1000px:py-6 z-20">
        <div className="flex items-center gap-2 flex-wrap 800px:flex-nowrap">
          <div className="flex  flex-col 1000px:py-12 1000px:pl-32 p-4 gap-8 w-full 800px:w-1/2">
            <h1 className="font-bold text-3xl text-center uppercase text-primary font-montserrat">
              new to alpinedge?
            </h1>
            <div className="flex flex-col gap-2">
              {faqData.map((item, index) => (
                <div
                  className="collapse collapse-plus bg-base-200 text-sm"
                  key={index + 0.0023 * 2}
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-sm font-medium">
                    {item.question}{" "}
                  </div>
                  <div className="collapse-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex  flex-col  p-4 gap-2 w-full 800px:w-1/2">
            <h1 className="font-bold text-3xl uppercase text-primary font-montserrat">
              Need assistance?{" "}
            </h1>
            <h1 className="font-bold text-2xl uppercase text-primary font-montserrat">
              Ask Alois, your personal ski guide{" "}
            </h1>
            <img
              src="/skaterfull.webp"
              alt="skater image"
              className="max-w-[500px]"
            />
          </div>
        </div>
      </div>
      <img
        src={iceflakesvg}
        alt="ice flakes"
        className="absolute -left-10 -top-10 w-[300px] h-[300px]"
      />
    </div>
  );
};

export default AssistantArea;
