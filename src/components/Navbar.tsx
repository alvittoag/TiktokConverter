import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between px-2 py-4 bg-gradient-to-r from-indigo-500 to-pink-600 text-white shadow-lg lg:py-7 lg:px-14 items-center">
      <h1 className="font-bold lg:text-2xl">Tiktok Converter</h1>
      <div>
        <MdOutlineLightMode className="mr-2" size={22} />
      </div>
    </div>
  );
};

export default Navbar;
