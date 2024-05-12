const ClimateArea = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-climateBg bg-cover bg-no-repeat p-16 gap-4 font-montserrat text-white">
      <div className="flex items-center gap-4">
        <img
          src="https://i.ibb.co/KqXLDF8/Blue-Modern-Limitless-Technology-Company-Logo-4-1.png"
          alt="stripe climate image"
        />
        <h1 className="font-bold text-3xl uppercase text-white">
          Stripe Climate
        </h1>
      </div>

      <p className="text-lg text-center max-w-[900px]">
        As advocates for preserving our natural surroundings, AlpinEdge
        partnered with Stripe Climate to take tangible steps toward reducing CO2
        emissions. With every transaction processed through our platform, a
        portion of the proceeds is allocated to innovative carbon removal
        projects.
      </p>
      <p className="text-lg text-center max-w-[900px]">
        Our commitment to environmental stewardship extends beyond business
        operations; it&apos;s a reflection of our values and responsibility to
        future generations.
      </p>
      <h1 className="font-bold text-xl uppercase text-white">
        Explore our partnership with Stripe Climate here.{" "}
      </h1>
    </div>
  );
};

export default ClimateArea;
