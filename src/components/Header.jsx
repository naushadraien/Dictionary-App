import axios from "axios";
import { API, Context } from "../main";
import { useContext, useState } from "react";
import Logo from "../assets/logo5.png";
import Search from "../assets/search2.png";

const Header = () => {
  const [word, setWord] = useState("");
  const { setRes, setShowTabs } = useContext(Context);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`${API}/${word}`);
    setRes(data[0]);
    setShowTabs(true);
  };

  return (
    <div className="relative">
      <nav className="my-2 h-14 flex items-center">
        <img src={Logo} alt="logo" width={63} height={63} />
        <h2 className="text-black font-medium text-2xl leading-normal">
          WordSound Dict: Explore, Listen, Categorize
        </h2>
      </nav>
      <form onSubmit={handleSearch} className="relative">
        <button
          className="absolute left-0 h-full px-3 py-4 rounded-l-lg "
          type="submit"
        >
          <img src={Search} alt="search" width={28} height={28} />
        </button>
        <input
          type="text"
          value={word}
          className="w-full bg-gray-100 border-none outline-none rounded-r-lg px-3 py-4 shadow-sm pl-12"
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
