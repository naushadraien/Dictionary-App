import { Link } from "react-router-dom";
import Logo from "../assets/logo5.png";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white text-center rounded-full w-full py-4 md:py-6">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link to={"/details"}>
          <img
            src={Logo}
            alt="logo"
            className="relative w-32  h-32 lg:w-44 lg:h-44 -mt-20 lg:-mt-32"
          />
        </Link>
        <div className="md:ml-10 md:-mt-14 mt-4 flex space-x-3 md:space-x-2 md:-mr-64 ">
          <img
            src={Twitter}
            alt="twitter-icon"
            className="w-8 h-8 mb-2 bg-gray-200 rounded-md"
          />
          <p className="text-2xl font-extrabold">WordSound Dict</p>
        </div>
        <div className="md:block md:ml-10 md:mt-10">
          <p className="text-lg">follow us on twitter for latest updates</p>
          <Link to={"/"}>
            <p className="text-lg font-bold">{`<< Go to Home`}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
