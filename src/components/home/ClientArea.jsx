const ClientArea = () => {
  return (
    <div className="w-full p-8 bg-white">
      <div className="flex items-center gap-2 flex-col 800px:flex-row-reverse ">
        <div className="flex flex-col gap-2 800px:w-1/2 h-full">
          <h1 className="font-bold text-primary font-montserrat text-xl 800px:text-[1.8rem]">
            Our Client Area
          </h1>
          <p className="800px:text-2xl">
            The Space where you succeed. Track your progress through our
            informative dashboard, contact customer support, download your
            certificates and access many more features available in our client
            area. Our <strong>technology</strong> is{" "}
            <strong>100% built in-house in Austria</strong> . Therefore we are
            not dependent on a third-party technology provider, ensuring our
            traders a smooth and seamless use of our services
          </p>
          <img
            src="/clientarea2.webp"
            alt="partneres image"
            className="w-full mt-2"
          />
        </div>
        <img
          src="/clientarea.webp"
          alt="brooker stats image"
          className="object-contain 800px:w-1/2"
        />
      </div>
    </div>
  );
};

export default ClientArea;
