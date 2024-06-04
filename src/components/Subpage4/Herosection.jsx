import bgImg from '../../assets/subpage-hero-bg.png';

const Herosection = () => {
  return (
    <section className="relative w-full px-4 h-[96svh] flex flex-col items-center justify-end z-0">
      <img
        src={bgImg}
        alt="snow"
        className="w-full h-[110svh] absolute top-0 left-0 z-0"
      />
      <h1 className="text-[#004D99] font-[Mokoto] text-4xl md:text-8xl z-10 drop-shadow">
        AlPINEDGE
      </h1>
      <p className="text-[#616168] font-bold text-2xl md:text-4xl drop-shadow">
        Slope to Success
      </p>
    </section>
  );
};
export default Herosection;
