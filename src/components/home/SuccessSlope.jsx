const SuccessSlope = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-successSlope bg-no-repeat bg-cover p-16 gap-4 font-montserrat text-white">
      <div>
        {" "}
        <h1 className="font-bold text-3xl uppercase text-white text-center mb-4">
          SLOPE TO SUCCESS <br /> GIVEAWAY
        </h1>
        <p className="text-md uppercase font-bold text-center max-w-[900px]">
          Sign up now to participate in our monthly giveaway* free of charge!
        </p>
        <p className="text-sm text-center max-w-[900px]">
          If you never want to miss anything about AlpinEdge in the future, you
          can directly opt to receive our newsletter!
        </p>
      </div>
      <img src="https://i.ibb.co/CBRRCdx/Ellipse-88.webp" alt="user-image" />

      <div className="relative max-w-2xl 800px:w-[600px]">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Enter Email Address"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />{" "}
          <span className="label-text text-white">
            {" "}
            Yes, I want to receive frequent marketing material from AlpinEdge
          </span>
        </label>
      </div>
      <p className="text-xs text-white max-w-[800px]">
        * Chance to win is only granted for the first sign-up per person.
        Enrolling in the newsletter is not a pre-requisite to participating in
        the giveaway, nor does it increase the chance of winning. By enrolling
        in the giveaway you agree to our Terms & Conditions
      </p>
    </div>
  );
};

export default SuccessSlope;
