const OurBrooker = () => {
  return (
    <div className="w-full p-8 bg-white">
        
      <div className="flex items-center justify-between gap-2 flex-col 800px:flex-row ">
        <div className="flex flex-col gap-2 800px:w-1/2 h-full">
          <h1 className="font-bold text-primary font-montserrat text-xl 800px:text-[1.8rem]">
            Our Brooker
          </h1>
          <p className="800px:text-3xl">
            We are exclussively partnering with the most{" "}
            <strong>reliable</strong> and <strong>reputable</strong> broker in
            the industry. Known for a supreme network of T1-Liquidity Providers
            and fair execution via STP/DMA only our broker provides our traders{" "}
            <strong> live accounts </strong>
            with <strong>virtual capital</strong> allocated throughout all
            phases of your trading with AlpinEdge!
          </p>
        </div>
        <img
          src="/brooker1.webp"
          alt="brooker stats image"
          className="object-contain 800px:w-1/2"
        />
      </div>
    </div>
  );
};

export default OurBrooker;
