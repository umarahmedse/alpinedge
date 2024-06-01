const HowItWorks = () => {
  return (
    <div className="w-full relative" >
      <h1 className="text-4xl font-montserrat font-bold text-white absolute top-10 left-1/2 -translate-x-[100px]">How It Works</h1>
      <video controls={false} preload="auto" muted autoPlay>
        <source src="video1.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HowItWorks;
