import ALetterFromTheCEO from './ALetterFromTheCEO';
import AboutUs from './AboutUs';
import Herosection from './Herosection';
import OurHeritage from './OurHeritage';
import OurValues from './OurValues';
import VisionAndMission from './VisionAndMission';

const Subpage4 = () => {
  return (
    <div>
      <Herosection />
      <OurHeritage />
      <div className=" bg-gradient-to-t from-[#003C82] to-[#003C8200]">
        <AboutUs />
        <VisionAndMission />
      </div>
      <OurValues />
      <ALetterFromTheCEO />
    </div>
  );
};
export default Subpage4;
