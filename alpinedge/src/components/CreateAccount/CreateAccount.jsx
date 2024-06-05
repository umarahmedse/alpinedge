import bgImg from '../../assets/register-bg.png';
import { FaGlobeAmericas, FaUser } from 'react-icons/fa';
import { MdEmail, MdVpnKey } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import baseURL from '../../../axios.js';
import { useState } from 'react';

const CreateAccount = () => {
  const [signupData, setSignupData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    PhoneNumber: '',
    password: '',
    confirmPassword: '',
    CountryofResidence: '',
  });
  const [error, setError] = useState(null);
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const {
      FirstName,
      LastName,
      email,
      PhoneNumber,
      password,
      confirmPassword,
      CountryofResidence,
    } = signupData;
    if (
      !FirstName ||
      !LastName ||
      !email ||
      !PhoneNumber ||
      !password ||
      !confirmPassword ||
      !CountryofResidence
    ) {
      setError('All fields are required.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await baseURL.post('/api/signup', signupData);
      console.log(response);
      setSignupSuccessful(true);
      navigate('/login');
    } catch (error) {
      console.log('Signup error: ', error);
      setError(
        error.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <div className="relative">
      <img
        src={bgImg}
        alt="snowing mountain"
        className="w-full h-auto absolute -z-10 top-0 left-0"
      />
      <div className="bg-gradient-to-t from-[#003C82] to-[#003C8200] z-10">
        <div className="w-full max-w-[520px] bg-white rounded-3xl px-6 py-4 mx-auto">
          <h1 className="text-[#004D99] text-4xl font-bold">
            Create new Account
          </h1>
          <p className="my-6 font-semibold text-sm">
            Already have an account? &#160;
            <Link to="/login" className="underline text-[#004D99] font-bold">
              Log in
            </Link>
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 border-[1.5px] border-[#00000024]">
              <FaUser size={18} color="#004D99" />
              <input
                type="text"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="First name"
                name="FirstName"
                autoComplete="given-name"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 my-4 border-[1.5px] border-[#00000024]">
              <FaUser size={18} color="#004D99" />
              <input
                type="text"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Last name"
                name="LastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 mb-4 border-[1.5px] border-[#00000024]">
              <MdEmail size={18} color="#004D99" />
              <input
                type="email"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 mb-4 border-[1.5px] border-[#00000024]">
              <FaUser size={18} color="#004D99" />
              <input
                type="tel"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Phone number"
                autoComplete="tel-national"
                name="PhoneNumber"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 mb-4 border-[1.5px] border-[#00000024]">
              <MdVpnKey size={18} color="#004D99" />
              <input
                type="password"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 mb-4 border-[1.5px] border-[#00000024]">
              <MdVpnKey size={18} color="#004D99" />
              <input
                type="password"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Confirm password"
                name="confirmPassword"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </label>
            <label className="flex gap-2 items-center rounded-md bg-[#EAF0F7] w-full shadow-sm pl-4 mb-4 border-[1.5px] border-[#00000024]">
              <FaGlobeAmericas size={18} color="#004D99" />
              <input
                type="text"
                className="bg-transparent border-none w-full py-2 outline-none"
                placeholder="Country of residence"
                name="CountryofResidence"
                autoComplete="country-name"
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="privacy-policy"
              className="md:px-20 text-xs font-semibold mb-4 flex"
            >
              <input
                type="checkbox"
                id="privacy-policy"
                className="accent-[#004D99] border-[#E1E1E2] size-[15px] rounded-md"
              />
              &#160;
              <div>
                I agree to the processing of personal data according to &#160;
                <Link className="underline">PRIVACY POLICY</Link>.
                <span className="text-red-500">*</span>
              </div>
            </label>
            <label
              htmlFor="newsletter"
              className="md:px-20 text-xs font-semibold mb-4 flex"
            >
              <input
                type="checkbox"
                id="newsletter"
                className="accent-[#004D99] border-[#E1E1E2] size-[15px] rounded-md"
              />
              <div>
                &#160; Do you want to receive frequent news and updates about
                AlpinEdge? Sign up to our{' '}
                <Link className="underline">NEWSLETTER</Link>.
                <span className="text-red-500">*</span>
              </div>
            </label>
            <label
              htmlFor="name-confirmation"
              className="md:px-20 text-xs font-semibold mb-4 flex"
            >
              <input
                type="checkbox"
                id="name-confirmation"
                className="accent-[#004D99] border-[#E1E1E2] size-[15px] rounded-md"
              />
              <div>
                &#160; I acknowledge my name is correct and corresponds to the
                government issued identification.
                <span className="text-red-500">*</span>
              </div>
            </label>
            <button
              type="submit"
              className="bg-[#004D99] rounded-md text-white px-4 py-2 my-12 font-semibold mx-auto block"
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
