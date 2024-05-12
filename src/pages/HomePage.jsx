import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import AlpineCompanions from "../components/home/AlpineCompanions";
import AlpinedgeTraders from "../components/home/AlpinedgeTraders";
import AssistantArea from "../components/home/AssistanceArea";
import ClientArea from "../components/home/ClientArea";
import ClimateArea from "../components/home/ClimateArea";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import WhatSetsApart from "../components/home/WhatsSetsApart";
import JoinUs from "../components/home/JoinUs";
import OurBrooker from "../components/home/OurBrooker";
import StatsDisclaimer from "../components/home/StatsDisclaimer";
import SuccessSlope from "../components/home/SuccessSlope";

const HomePage = () => {
  return (
    <div className="bg-bgPrimary overflow-hidden">
      <Hero />
      <div className="p-4 flex flex-col items-center justify-center gap-2">
        <h1 className="font-montserrat text-4xl font-bold text-center text-primary">
          Launching In
        </h1>
        <FlipClockCountdown
          className="flip-clock text-primary"
          to={new Date("2024-06-01").getTime()}
          labelStyle={{ color: "#004D99" }}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
      </div>
      {/* <StatsDisclaimer />
      <HowItWorks />
      <OurBrooker />
      <ClientArea />
      <AlpinedgeTraders />
      <WhatSetsApart />
      <AlpineCompanions />
      <AssistantArea />
      <ClimateArea />
      <SuccessSlope />*/}
      <JoinUs />
    </div>
  );
};

export default HomePage;
