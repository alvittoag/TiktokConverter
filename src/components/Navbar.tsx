import { MdOutlineLightMode } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between px-2 py-4 bg-gradient-to-r from-indigo-500 to-pink-600 text-white shadow-lg lg:py-7 lg:px-14 items-center">
      <div className="font-bold text-xl lg:text-2xl flex gap-1 items-center">
        <FaTiktok />
        Tiktok Converter
      </div>
      <div>
        <MdOutlineLightMode
          className="mr-2 animate-spin lg:animate-none"
          size={25}
        />
      </div>
    </div>
  );
};

export default Navbar;
