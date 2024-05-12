const HowItWorks = () => {
  return (
    <div className="w-full">
      <video controls={false} preload="auto" loop muted autoPlay>
        <source src="video1.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HowItWorks;
