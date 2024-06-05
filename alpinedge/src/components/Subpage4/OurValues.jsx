import valueImg from '../../assets/our-values.png';
import princepleImg from '../../assets/princeple.png';

const OurValues = () => {
  return (
    <>
      <section className="flex gap-6 flex-col md:flex-row mt-12 px-12">
        <div>
          <h2 className="text-[#004D99] text-4xl font-bold mb-8">Our Values</h2>
          <h3 className="text-[#004D99] text-lg font-bold">Integrity:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We uphold the highest standards of honesty, transparency, and
            ethical conduct in everything we do. Integrity is at the core of our
            business, and we believe that earning and maintaining the trust of
            our clients and partners is paramount.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Innovation:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We embrace innovation as a driving force for progress and growth. We
            continually seek new ways to enhance our platform, improve our
            services, and adapt to the evolving needs of our clients and the
            market.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Empowerment:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We are committed to empowering individuals to take control of their
            financial futures. Through education, support, and opportunity, we
            enable traders to unlock their full potential and achieve their
            goals.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Collaboration:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We believe in the power of collaboration and partnership. By working
            together with our clients, employees, and stakeholders, we foster a
            culture of teamwork, creativity, and mutual success.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Resilience:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            Like the mountains that inspire us, we embody the spirit of
            resilience in the face of challenges. We persevere in the pursuit of
            our goals, learn from setbacks, and emerge stronger and more
            determined than before.
          </p>
        </div>
        <img
          src={valueImg}
          alt="skiing"
          className="w-full md:w-1/2 h-[100svh]"
        />
      </section>
      <section className="flex items-center gap-28 flex-col md:-mt-20 md:flex-row px-12">
        <img
          src={princepleImg}
          alt="skiing"
          className="w-full md:w-2/5 h-auto"
        />
        <div>
          <h2 className="text-[#004D99] text-right text-4xl font-bold mb-8">
            Our Principles
          </h2>
          <h3 className="text-[#004D99] text-lg font-bold">Fairness:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We believe in treating all individuals with fairness, dignity, and
            respect. We strive to create an inclusive and welcoming environment
            where everyone has an equal opportunity to succeed.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Responsibility:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We recognize our responsibility to act in the best interests of our
            clients, employees, and the community. We adhere to strict ethical
            standards and take accountability for our actions and decisions.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Transparency:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We are committed to transparency and openness in our operations and
            communications. We provide clear and honest information to our
            clients and stakeholders, ensuring they have the knowledge they need
            to make informed decisions.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">Compliance:</h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We adhere to all relevant laws, regulations, and industry standards
            governing our business. Compliance is non-negotiable, and we take
            proactive measures to ensure that we operate in a legal and ethical
            manner at all times.
          </p>
          <h3 className="text-[#004D99] text-lg font-bold">
            Continuous Improvement:
          </h3>
          <p className="text-[#4F4F4F] text-lg font-medium mb-6">
            We are dedicated to continuous improvement and strive to raise the
            bar for excellence in everything we do. We regularly review and
            evaluate our practices, policies, and procedures to identify areas
            for enhancement and optimization.
          </p>
        </div>
      </section>
    </>
  );
};
export default OurValues;
