import { Link } from "react-router-dom";
import Logo from "../assets/logo5.png";
import  Twitter from "../assets/twitter.svg";


const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white text-center rounded-full w-full h-40 py-4">
      <div className="flex flex-row justify-center items-center">
        <Link to={'/details'}>
        <img src={Logo} alt="logo" className="relative w-60 h-60 -mt-32" />
        </Link>
        <img src={Twitter} alt="twitter-icon" className=" w-8 h-8 mb-2 ml-36 bg-gray-200 rounded mr-3" />
        <div className="flex flex-col">
        <p className="text-2xl font-extrabold">suvaye.official</p>
        <p className="text-lg">follow us on twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
