const AlpinedgeTraders = () => {
  return (
    <div className="bg-white px-2 py-4">
      <h1 className="text-primary font-montserrat font-bold text-4xl text-center uppercase mb-8">
        hear from our alpinedge traders
      </h1>
      <div className="flex items-center w-full flex-col 1000px:flex-row p-4 1000px:p-0 gap-4 1000px:gap-0">
        <div className="card 1000px:w-[20%] w-full h-80 bg-base-100 shadow-xl">
          <img
            src="https://i.ibb.co/YybN3f3/aa02354593c6d7988bc84db09e2c8bf3.webp"
            alt="Shoes"
            className="object-cover h-full rounded-2xl"
          />
        </div>
        <video
          controls={false}
          preload="auto"
          muted
          autoPlay
          className="1000px:w-[60%] w-full"
        >
          <source src="alpinedgeTraders.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="card 1000px:w-[20%] w-full h-80 bg-base-100 shadow-xl">
          <img
            src="https://i.ibb.co/p3CHRkB/Rectangle-6.webp"
            alt="Shoes"
            className="object-cover h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AlpinedgeTraders;
