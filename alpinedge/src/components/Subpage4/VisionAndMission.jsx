import hillImg from '../../assets/hill.png';

const VisionAndMission = () => {
  return (
    <section className="flex flex-col md:flex-row gap-2 px-4">
      <div className="w-full md:w-1/3">
        <h1 className="text-white text-4xl text-center font-bold uppercase mb-6">
          Vision
        </h1>
        <p className="text-white text-lg text-center font-medium mb-8">
          At AlpineEdge, our vision is to redefine the landscape of trading by
          empowering individuals from all walks of life to unlock their full
          potential and achieve financial independence. We envision a world
          where the thrill of the Austrian Alps meets the excitement of trading,
          where every trader has the opportunity to conquer new heights and
          reach their goals. With our innovative platform and unwavering
          commitment to excellence, we strive to inspire a new generation of
          traders and shape the future of finance.
        </p>
      </div>
      <img src={hillImg} alt="hill" className="w-full md:w-1/3 h-auto" />
      <div className="w-full md:w-1/3 mt-8 md:mt-0">
        <h1 className="text-white text-4xl text-center font-bold uppercase mb-6">
          Mission
        </h1>
        <p className="text-white text-lg text-center font-medium mb-8">
          Our mission at AlpineEdge is to provide a gateway to the financial
          markets, where traders can embark on a journey of discovery,
          opportunity, and success.We are committed to offering virtual
          evaluation programs that enable traders to harness their skills,
          customize their experience, and turn their passion for trading into
          real profits. Guided by the principles of integrity, transparency, and
          innovation, we seek to empower traders with the knowledge, resources,
          and support they need to navigate the complexities of the financial
          world and achieve their goals. Join us as we revolutionize the trading
          industry and pave the way for a brighter future for all.
        </p>
      </div>
    </section>
  );
};
export default VisionAndMission;
