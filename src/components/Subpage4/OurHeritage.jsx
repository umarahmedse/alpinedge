import heritage from '../../assets/heritage.png';

const OurHeritage = () => {
  return (
    <section className="my-12">
      <h2 className="text-[#004D99] text-center text-4xl font-bold mb-8 px-4">
        Our Heritage
      </h2>
      <p className="text-center text-[#4F4F4F] font-medium text-xl my-4 px-4 mx-auto w-full md:w-4/5">
        In the heart of the Austrian Alps, where the whispers of history echo
        through the mountain peaks, AlpineEdge finds its roots. For centuries,
        these rugged landscapes have been a crucible of human endeavor, shaping
        the spirit of those who call this region home. From the ancient tales of
        mountaineers braving the elements to the timeless traditions passed down
        through generations, the alpine Alps have always been a source of
        inspiration and resilience.
      </p>
      <img src={heritage} alt="heritage" className="my-8 w-full h-auto" />
    </section>
  );
};
export default OurHeritage;
