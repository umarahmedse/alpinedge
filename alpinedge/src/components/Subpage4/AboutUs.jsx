import aboutUsImg from '../../assets/about-us.png';

const AboutUs = () => {
  return (
    <section className="my-16">
      <h2 className="text-[#004D99] text-center text-4xl font-bold mb-8 px-4">
        About Us
      </h2>
      <p className="text-center text-[#4F4F4F] font-medium text-xl my-4 px-4 mx-auto w-full md:w-4/5">
        Welcome to AlpineEdge, where the allure of the Austrian Alps meets the
        excitement of trading. Our platform is a gateway to the financial
        markets, offering a unique blend of tradition and innovation. Founded in
        2024, AlpineEdge welcomes you to a journey of discovery and opportunity.
        With our virtual trading evaluation programs, traders can harness their
        skills, customize their experience, and unlock the potential of the
        alpine spirit within us all. Join us as we explore the intersection of
        nature and finance, and embark on a journey to new heights of success.
      </p>
      <img src={aboutUsImg} alt="about-us" className="my-8 w-full h-auto" />
    </section>
  );
};
export default AboutUs;
